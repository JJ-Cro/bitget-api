import { RestClientV2 } from 'bitget-api';
// or, if require is preferred:
// const { RestClientV2 } = require('bitget-api');

const client = new RestClientV2({
  apiKey: 'insert_api_key_here',
  apiSecret: 'insert_api_secret_here',
  apiPass: 'insert_api_pass_here',
});

client
  .futuresBatchSubmitOrders({
    symbol: 'BTCUSDT',
    productType: 'USDT-FUTURES',
    marginCoin: 'USDT',
    marginMode: 'crossed',
    orderList: [
      {
        size: '0.01',
        side: 'buy',
        orderType: 'limit',
        force: 'gtc',
        price: '45000',
      },
    ],
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });
