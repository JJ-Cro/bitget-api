import { RestClientV2 } from 'bitget-api';
// or, if require is preferred:
// const { RestClientV2 } = require('bitget-api');

const client = new RestClientV2({
  apiKey: 'insert_api_key_here',
  apiSecret: 'insert_api_secret_here',
  apiPass: 'insert_api_pass_here',
});

client
  .futuresSubmitTPSLOrder({
    marginCoin: 'USDT',
    productType: 'USDT-FUTURES',
    symbol: 'BTCUSDT',
    planType: 'profit_plan',
    triggerPrice: '70000',
    triggerType: 'mark_price',
    executePrice: '70000',
    holdSide: 'long',
    size: '0.01',
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });
