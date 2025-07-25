import axios, { AxiosRequestConfig, AxiosResponse, Method } from 'axios';
import https from 'https';

import { RestClientType } from '../types/shared.js';
import {
  getRestBaseUrl,
  RestClientOptions,
  serializeParams,
} from './requestUtils.js';
import {
  SignAlgorithm,
  SignEncodeMethod,
  signMessage,
} from './webCryptoAPI.js';
import { neverGuard } from './websocket-util.js';

interface SignedRequest<T extends object | undefined = object> {
  originalParams: T;
  paramsWithSign?: T & { sign: string };
  serializedParams: string;
  sign: string;
  queryParamsWithSign: string;
  timestamp: number;
  recvWindow: number;
}

interface UnsignedRequest<T extends object | undefined = object> {
  originalParams: T;
  paramsWithSign: T;
}

type SignMethod = 'bitget';

const ENABLE_HTTP_TRACE =
  typeof process === 'object' &&
  typeof process.env === 'object' &&
  process.env.BITGETTRACE;

if (ENABLE_HTTP_TRACE) {
  axios.interceptors.request.use((request) => {
    console.log(
      new Date(),
      'Starting Request',
      JSON.stringify(
        {
          url: request.url,
          method: request.method,
          params: request.params,
          data: request.data,
        },
        null,
        2,
      ),
    );
    return request;
  });
  axios.interceptors.response.use((response) => {
    console.log(new Date(), 'Response:', {
      // request: {
      //   url: response.config.url,
      //   method: response.config.method,
      //   data: response.config.data,
      //   headers: response.config.headers,
      // },
      response: {
        status: response.status,
        statusText: response.statusText,
        headers: response.headers,
        data: response.data,
      },
    });
    return response;
  });
}

export default abstract class BaseRestClient {
  private options: RestClientOptions;

  private baseUrl: string;

  private globalRequestOptions: AxiosRequestConfig;

  private apiKey: string | undefined;

  private apiSecret: string | undefined;

  private apiPass: string | undefined;

  /** Defines the client type (affecting how requests & signatures behave) */
  abstract getClientType(): RestClientType;

  /**
   * Create an instance of the REST client. Pass API credentials in the object in the first parameter.
   * @param {RestClientOptions} [restClientOptions={}] options to configure REST API connectivity
   * @param {AxiosRequestConfig} [networkOptions={}] HTTP networking options for axios
   */
  constructor(
    restOptions: RestClientOptions = {},
    networkOptions: AxiosRequestConfig = {},
  ) {
    this.options = {
      recvWindow: 5000,
      /** Throw errors if any request params are empty */
      strictParamValidation: false,
      encodeQueryStringValues: true,
      ...restOptions,
    };

    this.globalRequestOptions = {
      /** in ms == 5 minutes by default */
      timeout: 1000 * 60 * 5,
      /** inject custom rquest options based on axios specs - see axios docs for more guidance on AxiosRequestConfig: https://github.com/axios/axios#request-config */
      ...networkOptions,
      headers: {
        'X-CHANNEL-API-CODE': 'hbnni',
        'Content-Type': 'application/json',
        locale: 'en-US',
      },
    };

    if (this.options.demoTrading) {
      this.globalRequestOptions.headers = {
        ...this.globalRequestOptions.headers,
        // Header to enable paper trading with provided demo API keys
        paptrading: '1',
      };
    }

    // If enabled, configure a https agent with keepAlive enabled
    if (this.options.keepAlive) {
      // Extract existing https agent parameters, if provided, to prevent the keepAlive flag from overwriting an existing https agent completely
      const existingHttpsAgent = this.globalRequestOptions.httpsAgent as
        | https.Agent
        | undefined;
      const existingAgentOptions = existingHttpsAgent?.options || {};

      // For more advanced configuration, raise an issue on GitHub or use the "networkOptions"
      // parameter to define a custom httpsAgent with the desired properties
      this.globalRequestOptions.httpsAgent = new https.Agent({
        ...existingAgentOptions,
        keepAlive: true,
        keepAliveMsecs: this.options.keepAliveMsecs,
      });
    }

    this.baseUrl = getRestBaseUrl(false, restOptions);
    this.apiKey = this.options.apiKey;
    this.apiSecret = this.options.apiSecret;
    this.apiPass = this.options.apiPass;

    // Throw if one of the 3 values is missing, but at least one of them is set
    const credentials = [this.apiKey, this.apiSecret, this.apiPass];
    if (
      credentials.includes(undefined) &&
      credentials.some((v) => typeof v === 'string')
    ) {
      throw new Error(
        'API Key, Secret & Passphrase are ALL required to use the authenticated REST client',
      );
    }
  }

  get(endpoint: string, params?: any) {
    return this._call('GET', endpoint, params, true);
  }

  getPrivate(endpoint: string, params?: any) {
    return this._call('GET', endpoint, params, false);
  }

  post(endpoint: string, params?: any) {
    return this._call('POST', endpoint, params, true);
  }

  postPrivate(endpoint: string, params?: any) {
    return this._call('POST', endpoint, params, false);
  }

  deletePrivate(endpoint: string, params?: any) {
    return this._call('DELETE', endpoint, params, false);
  }

  /**
   * @private Make a HTTP request to a specific endpoint. Private endpoint API calls are automatically signed.
   */
  private async _call(
    method: Method,
    endpoint: string,
    params?: any,
    isPublicApi?: boolean,
  ): Promise<any> {
    // Sanity check to make sure it's only ever prefixed by one forward slash
    const requestUrl = [this.baseUrl, endpoint].join(
      endpoint.startsWith('/') ? '' : '/',
    );

    // Build a request and handle signature process
    const options = await this.buildRequest(
      method,
      endpoint,
      requestUrl,
      params,
      isPublicApi,
    );

    if (ENABLE_HTTP_TRACE) {
      console.log('full request: ', options);
    }

    // Dispatch request
    return axios(options)
      .then((response) => {
        if (response.status == 200) {
          if (
            typeof response.data?.code === 'string' &&
            response.data?.code !== '00000'
          ) {
            throw { response };
          }
          return response.data;
        }
        throw { response };
      })
      .catch((e) => this.parseException(e));
  }

  /**
   * @private generic handler to parse request exceptions
   */
  parseException(e: any): unknown {
    if (this.options.parseExceptions === false) {
      throw e;
    }

    // Something happened in setting up the request that triggered an error
    if (!e.response) {
      if (!e.request) {
        throw e.message;
      }

      // request made but no response received
      throw e;
    }

    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    const response: AxiosResponse = e.response;
    // console.error('err: ', response?.data);

    throw {
      code: response.status,
      message: response.statusText,
      body: response.data,
      headers: response.headers,
      requestOptions: {
        ...this.options,
        // Prevent credentials from leaking into error messages
        apiPass: 'omittedFromError',
        apiSecret: 'omittedFromError',
      },
    };
  }

  private async signMessage(
    paramsStr: string,
    secret: string,
    method: SignEncodeMethod,
    algorithm: SignAlgorithm,
  ): Promise<string> {
    if (typeof this.options.customSignMessageFn === 'function') {
      return this.options.customSignMessageFn(paramsStr, secret);
    }
    return await signMessage(paramsStr, secret, method, algorithm);
  }

  /**
   * @private sign request and set recv window
   */
  private async signRequest<T extends object | undefined = object>(
    data: T,
    endpoint: string,
    method: Method,
    signMethod: SignMethod,
  ): Promise<SignedRequest<T>> {
    const timestamp = Date.now();

    const res: SignedRequest<T> = {
      originalParams: {
        ...data,
      },
      sign: '',
      timestamp,
      recvWindow: 0,
      serializedParams: '',
      queryParamsWithSign: '',
    };

    if (!this.apiKey || !this.apiSecret) {
      return res;
    }

    // It's possible to override the recv window on a per rquest level
    const strictParamValidation = this.options.strictParamValidation;
    const encodeQueryStringValues = this.options.encodeQueryStringValues;

    if (signMethod === 'bitget') {
      const signRequestParams =
        method === 'GET'
          ? serializeParams(
              data,
              strictParamValidation,
              encodeQueryStringValues,
              '?',
            )
          : JSON.stringify(data) || '';

      const paramsStr =
        timestamp + method.toUpperCase() + endpoint + signRequestParams;

      // console.log('sign params: ', paramsStr);

      res.sign = await this.signMessage(
        paramsStr,
        this.apiSecret,
        'base64',
        'SHA-256',
      );
      res.queryParamsWithSign = signRequestParams;
      return res;
    }

    console.error(
      new Date(),
      neverGuard(signMethod, `Unhandled sign method: "${signMessage}"`),
    );

    return res;
  }

  private async prepareSignParams<TParams extends object | undefined>(
    method: Method,
    endpoint: string,
    signMethod: SignMethod,
    params?: TParams,
    isPublicApi?: true,
  ): Promise<UnsignedRequest<TParams>>;

  private async prepareSignParams<TParams extends object | undefined>(
    method: Method,
    endpoint: string,
    signMethod: SignMethod,
    params?: TParams,
    isPublicApi?: false | undefined,
  ): Promise<SignedRequest<TParams>>;

  private async prepareSignParams<TParams extends object | undefined>(
    method: Method,
    endpoint: string,
    signMethod: SignMethod,
    params?: TParams,
    isPublicApi?: boolean,
  ) {
    if (isPublicApi) {
      return {
        originalParams: params,
        paramsWithSign: params,
      };
    }

    if (!this.apiKey || !this.apiSecret) {
      throw new Error('Private endpoints require api and private keys set');
    }

    return this.signRequest(params, endpoint, method, signMethod);
  }

  /** Returns an axios request object. Handles signing process automatically if this is a private API call */
  private async buildRequest(
    method: Method,
    endpoint: string,
    url: string,
    params?: any,
    isPublicApi?: boolean,
  ): Promise<AxiosRequestConfig> {
    const options: AxiosRequestConfig = {
      ...this.globalRequestOptions,
      url: url,
      method: method,
    };

    for (const key in params) {
      if (typeof params[key] === 'undefined') {
        delete params[key];
      }
    }

    if (isPublicApi || !this.apiKey || !this.apiPass) {
      return {
        ...options,
        params: params,
      };
    }

    const signResult = await this.prepareSignParams(
      method,
      endpoint,
      'bitget',
      params,
      isPublicApi,
    );

    const authHeaders = {
      'ACCESS-KEY': this.apiKey,
      'ACCESS-PASSPHRASE': this.apiPass,
      'ACCESS-TIMESTAMP': signResult.timestamp,
      'ACCESS-SIGN': signResult.sign,
    };

    if (method === 'GET') {
      return {
        ...options,
        headers: {
          ...authHeaders,
          ...options.headers,
        },
        url: options.url + signResult.queryParamsWithSign,
      };
    }

    return {
      ...options,
      headers: {
        ...authHeaders,
        ...options.headers,
      },
      data: params,
    };
  }
}
