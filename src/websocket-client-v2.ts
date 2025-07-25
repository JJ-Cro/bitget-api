import {
  WSOperation,
  WSOperationLoginParams,
  WsRequestOperationBitget,
} from './types/websockets/ws-api.js';
import { MessageEventLike } from './types/websockets/ws-events.js';
import {
  BitgetInstTypeV2,
  WsKey,
  WsTopicV2,
} from './types/websockets/ws-general.js';
import {
  BaseWebsocketClient,
  EmittableEvent,
  MidflightWsRequestEvent,
} from './util/BaseWSClient.js';
import { isWsPong } from './util/requestUtils.js';
import {
  SignAlgorithm,
  SignEncodeMethod,
  signMessage,
} from './util/webCryptoAPI.js';
import {
  getMaxTopicsPerSubscribeEvent,
  getNormalisedTopicRequests,
  getWsUrl,
  isPrivateChannel,
  WS_AUTH_ON_CONNECT_KEYS,
  WS_KEY_MAP,
  WsTopicRequest,
} from './util/websocket-util.js';
import { WSConnectedResult } from './util/WsStore.types.js';

const WS_LOGGER_CATEGORY = { category: 'bitget-ws' };

const COIN_CHANNELS: WsTopicV2[] = [
  'account',
  'account-crossed',
  'account-isolated',
];

export class WebsocketClientV2 extends BaseWebsocketClient<
  WsKey,
  WsRequestOperationBitget<object> // subscribe requests have an "args" parameter with an object within
> {
  /**
   * Request connection of all dependent (public & private) websockets, instead of waiting for automatic connection by library
   */
  public connectAll(): Promise<WSConnectedResult | undefined>[] {
    return [
      this.connect(WS_KEY_MAP.v2Private),
      this.connect(WS_KEY_MAP.v2Public),
    ];
  }

  /** Some private channels use `coin` instead of `instId`. This method handles building the sub/unsub request */
  private getSubRequest(
    instType: BitgetInstTypeV2,
    topic: WsTopicV2,
    coin: string = 'default',
  ): WsTopicRequest<string> {
    if (isPrivateChannel(topic)) {
      if (COIN_CHANNELS.includes(topic)) {
        const subscribeRequest: WsTopicRequest<string> = {
          topic,
          payload: {
            instType,
            coin,
          },
        };
        return subscribeRequest;
      }

      const subscribeRequest: WsTopicRequest<string> = {
        topic,
        payload: {
          instType,
          instId: coin,
        },
      };

      return subscribeRequest;
    }

    const subscribeRequest: WsTopicRequest<string> = {
      topic,
      payload: {
        instType,
        instId: coin,
      },
    };
    return subscribeRequest;
  }

  /**
   * Subscribe to a topic
   * @param instType instrument type (refer to API docs).
   * @param topic topic name (e.g. "ticker").
   * @param instId instrument ID (e.g. "BTCUSDT"). Use "default" for private topics.
   */
  public subscribeTopic(
    instType: BitgetInstTypeV2,
    topic: WsTopicV2,
    coin: string = 'default',
  ) {
    const subRequest = this.getSubRequest(instType, topic, coin);
    const isPrivateTopic = isPrivateChannel(topic);
    const wsKey = isPrivateTopic ? WS_KEY_MAP.v2Private : WS_KEY_MAP.v2Public;

    return this.subscribe(subRequest, wsKey);
  }

  /**
   * Unsubscribe from a topic
   * @param instType instrument type (refer to API docs).
   * @param topic topic name (e.g. "ticker").
   * @param instId instrument ID (e.g. "BTCUSDT"). Use "default" for private topics to get all symbols.
   */
  public unsubscribeTopic(
    instType: BitgetInstTypeV2,
    topic: WsTopicV2,
    coin: string = 'default',
  ) {
    const subRequest = this.getSubRequest(instType, topic, coin);

    const isPrivateTopic = isPrivateChannel(topic);
    const wsKey = isPrivateTopic ? WS_KEY_MAP.v2Private : WS_KEY_MAP.v2Public;

    return this.unsubscribe(subRequest, wsKey);
  }

  /**
   * Request subscription to one or more topics. Pass topics as either an array of strings,
   * or array of objects (if the topic has parameters).
   *
   * Objects should be formatted as {topic: string, params: object, category: CategoryV5}.
   *
   * - Subscriptions are automatically routed to the correct websocket connection.
   * - Authentication/connection is automatic.
   * - Resubscribe after network issues is automatic.
   *
   * Call `unsubscribe(topics)` to remove topics
   */
  public subscribe(
    requests:
      | (WsTopicRequest<WsTopicV2 | string> | WsTopicV2)
      | (WsTopicRequest<WsTopicV2 | string> | WsTopicV2)[],
    wsKey: WsKey,
  ): Promise<unknown> {
    const topicRequests = Array.isArray(requests) ? requests : [requests];
    const normalisedTopicRequests = getNormalisedTopicRequests(topicRequests);
    return this.subscribeTopicsForWsKey(normalisedTopicRequests, wsKey);
  }

  /**
   * Unsubscribe from one or more topics. Similar to subscribe() but in reverse.
   *
   * - Requests are automatically routed to the correct websocket connection.
   * - These topics will be removed from the topic cache, so they won't be subscribed to again.
   */
  public unsubscribe(
    requests:
      | (WsTopicRequest<WsTopicV2 | string> | WsTopicV2)
      | (WsTopicRequest<WsTopicV2 | string> | WsTopicV2)[],
    wsKey: WsKey,
  ) {
    const topicRequests = Array.isArray(requests) ? requests : [requests];
    const normalisedTopicRequests = getNormalisedTopicRequests(topicRequests);

    return this.unsubscribeTopicsForWsKey(normalisedTopicRequests, wsKey);
  }

  /**
   *
   *
   * Internal methods required to integrate with the BaseWSClient
   *
   *
   */

  protected sendPingEvent(wsKey: WsKey): void {
    this.tryWsSend(wsKey, 'ping');
  }

  protected sendPongEvent(wsKey: WsKey): void {
    this.tryWsSend(wsKey, 'pong');
  }

  protected isWsPing(data: any): boolean {
    if (data?.data === 'ping') {
      return true;
    }
    return false;
  }

  protected isWsPong(data: any): boolean {
    return isWsPong(data);
  }

  protected isPrivateTopicRequest(
    _request: WsTopicRequest<string>,
    wsKey: WsKey,
  ): boolean {
    return WS_AUTH_ON_CONNECT_KEYS.includes(wsKey);
  }

  protected getPrivateWSKeys(): WsKey[] {
    return WS_AUTH_ON_CONNECT_KEYS;
  }

  protected isAuthOnConnectWsKey(wsKey: WsKey): boolean {
    return WS_AUTH_ON_CONNECT_KEYS.includes(wsKey);
  }

  protected async getWsUrl(wsKey: WsKey): Promise<string> {
    return getWsUrl(wsKey, this.options, this.logger);
  }

  protected getMaxTopicsPerSubscribeEvent(wsKey: WsKey): number | null {
    return getMaxTopicsPerSubscribeEvent(wsKey);
  }

  /**
   * @returns one or more correctly structured request events for performing a operations over WS. This can vary per exchange spec.
   */
  protected async getWsRequestEvents(
    operation: WSOperation,
    requests: WsTopicRequest<string, object>[],
  ): Promise<MidflightWsRequestEvent<WsRequestOperationBitget<object>>[]> {
    const wsRequestBuildingErrors: unknown[] = [];

    const topics = requests.map(
      (r) => r.topic + ',' + Object.values(r.payload || {}).join(','),
    );

    // Previously used to track topics in a request. Keeping this for subscribe/unsubscribe requests, no need for incremental values
    const req_id =
      ['subscribe', 'unsubscribe'].includes(operation) && topics.length
        ? topics.join(',')
        : this.getNewRequestId().toFixed();

    /**
      {
        "op":"subscribe",
        "args":[
            {
                "instType":"SPOT",
                "channel":"ticker",
                "instId":"BTCUSDT"
            },
            {
                "instType":"SPOT",
                "channel":"candle5m",
                "instId":"BTCUSDT"
            }
        ]
      }
    */
    const wsEvent: WsRequestOperationBitget<object> = {
      op: operation,
      args: requests.map((request) => {
        // const request = {
        //   topic: 'ticker',
        //   payload: { instType: 'SPOT', instId: 'BTCUSDT' },
        // };
        // becomes:
        // const request = {
        //   channel: 'ticker',
        //   instType: 'SPOT',
        //   instId: 'BTCUSDT',
        // };
        return {
          channel: request.topic,
          ...request.payload,
        };
      }),
    };

    const midflightWsEvent: MidflightWsRequestEvent<
      WsRequestOperationBitget<object>
    > = {
      requestKey: req_id,
      requestEvent: wsEvent,
    };

    if (wsRequestBuildingErrors.length) {
      const label =
        wsRequestBuildingErrors.length === requests.length ? 'all' : 'some';

      this.logger.error(
        `Failed to build/send ${wsRequestBuildingErrors.length} event(s) for ${label} WS requests due to exceptions`,
        {
          ...WS_LOGGER_CATEGORY,
          wsRequestBuildingErrors,
          wsRequestBuildingErrorsStringified: JSON.stringify(
            wsRequestBuildingErrors,
            null,
            2,
          ),
        },
      );
    }

    return [midflightWsEvent];
  }

  private async getWsAuthSignature(
    wsKey: WsKey,
  ): Promise<{ expiresAt: number; signature: string }> {
    const { apiKey, apiSecret, apiPass, recvWindow } = this.options;

    if (!apiKey || !apiSecret || !apiPass) {
      this.logger.error(
        'Cannot authenticate websocket, either api key, secret or passphrase missing.',
        { ...WS_LOGGER_CATEGORY, wsKey },
      );
      throw new Error('Cannot auth - missing api or secret or pass in config');
    }

    this.logger.trace("Getting auth'd request params", {
      ...WS_LOGGER_CATEGORY,
      wsKey,
    });

    const signatureExpiresAt = ((Date.now() + recvWindow) / 1000).toFixed(0);

    const signature = await this.signMessage(
      signatureExpiresAt + 'GET' + '/user/verify',
      apiSecret,
      'base64',
      'SHA-256',
    );

    return {
      expiresAt: +signatureExpiresAt,
      signature,
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

  protected async getWsAuthRequestEvent(
    wsKey: WsKey,
  ): Promise<WsRequestOperationBitget<WSOperationLoginParams>> {
    try {
      const { apiKey, apiSecret, apiPass } = this.options;
      const { signature, expiresAt } = await this.getWsAuthSignature(wsKey);

      if (!apiKey || !apiSecret || !apiPass) {
        this.logger.error(
          'Cannot authenticate websocket, either api key, secret or passphrase missing.',
          { ...WS_LOGGER_CATEGORY, wsKey },
        );
        throw new Error(
          'Cannot auth - missing api or secret or pass in config',
        );
      }

      const request: WsRequestOperationBitget<WSOperationLoginParams> = {
        op: 'login',
        args: [
          {
            apiKey,
            passphrase: apiPass,
            timestamp: expiresAt,
            sign: signature,
          },
        ],
      };

      return request;
    } catch (e) {
      this.logger.error(e, { ...WS_LOGGER_CATEGORY, wsKey });
      throw e;
    }
  }

  /**
   * Abstraction called to sort ws events into emittable event types (response to a request, data update, etc)
   */
  protected resolveEmittableEvents(
    wsKey: WsKey,
    event: MessageEventLike,
  ): EmittableEvent[] {
    const results: EmittableEvent[] = [];

    try {
      const msg = JSON.parse(event.data);
      const emittableEvent = { ...msg, wsKey };

      // v2 event processing
      if (typeof msg === 'object') {
        if (typeof msg['code'] === 'number') {
          // v2 authentication event
          if (msg.event === 'login' && msg.code === 0) {
            results.push({
              eventType: 'response',
              event: emittableEvent,
            });
            results.push({
              eventType: 'authenticated',
              event: emittableEvent,
            });
            return results;
          }
        }

        if (msg['event']) {
          results.push({
            eventType: 'response',
            event: emittableEvent,
          });

          if (msg.event === 'error') {
            this.logger.error('WS Error received', {
              ...WS_LOGGER_CATEGORY,
              wsKey,
              message: msg || 'no message',
              // messageType: typeof msg,
              // messageString: JSON.stringify(msg),
              event,
            });
            results.push({
              eventType: 'exception',
              event: emittableEvent,
            });
          }

          return results;
        }

        if (msg['arg']) {
          results.push({
            eventType: 'update',
            event: emittableEvent,
          });
          return results;
        }
      }

      this.logger.info('Unhandled/unrecognised ws event message', {
        ...WS_LOGGER_CATEGORY,
        message: msg || 'no message',
        // messageType: typeof msg,
        // messageString: JSON.stringify(msg),
        event,
        wsKey,
      });

      // fallback emit anyway
      results.push({
        eventType: 'update',
        event: emittableEvent,
      });
      return results;
    } catch (e) {
      this.logger.error('Failed to parse ws event message', {
        ...WS_LOGGER_CATEGORY,
        error: e,
        event,
        wsKey,
      });
    }

    return results;
  }

  /**
   * @deprecrated not supported by Bitget's V2 API offering
   */
  async sendWSAPIRequest(): Promise<unknown> {
    return;
  }
}
