import { RestClientV2 } from 'bitget-api';
// or, if require is preferred:
// const { RestClientV2 } = require('bitget-api');

const client = new RestClientV2({
  apiKey: 'insert_api_key_here',
  apiSecret: 'insert_api_secret_here',
  apiPass: 'insert_api_pass_here',
});

client
  .convert({
    fromCoin: 'USDT',
    fromCoinSize: '100',
    cnvtPrice: '65000',
    toCoin: 'BTC',
    toCoinSize: '0.001',
    traceId: 'trace-id',
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });
