import { RestClientV2 } from 'bitget-api';
// or, if require is preferred:
// const { RestClientV2 } = require('bitget-api');

const client = new RestClientV2({
  apiKey: 'insert_api_key_here',
  apiSecret: 'insert_api_secret_here',
  apiPass: 'insert_api_pass_here',
});

client
  .futuresSubmitPlanOrder({
    planType: 'normal_plan',
    symbol: 'BTCUSDT',
    productType: 'USDT-FUTURES',
    marginMode: 'crossed',
    marginCoin: 'USDT',
    size: '0.01',
    triggerPrice: '70000',
    triggerType: 'mark_price',
    side: 'buy',
    orderType: 'limit',
    price: '45000',
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });
