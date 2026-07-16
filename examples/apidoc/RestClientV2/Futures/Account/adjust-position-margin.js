import { RestClientV2 } from 'bitget-api';
// or, if require is preferred:
// const { RestClientV2 } = require('bitget-api');

const client = new RestClientV2({
  apiKey: 'insert_api_key_here',
  apiSecret: 'insert_api_secret_here',
  apiPass: 'insert_api_pass_here',
});

client
  .setFuturesPositionMargin({
    symbol: 'BTCUSDT',
    productType: 'USDT-FUTURES',
    marginCoin: 'USDT',
    holdSide: 'long',
    amount: '10',
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });
