import { RestClientV3 } from 'bitget-api';
// or, if require is preferred:
// const { RestClientV3 } = require('bitget-api');

const client = new RestClientV3({
  apiKey: 'insert_api_key_here',
  apiSecret: 'insert_api_secret_here',
  apiPass: 'insert_api_pass_here',
});

client
  .placeRealityOrder({
    symbol: 'rAAPLUSDT',
    side: 'buy',
    orderType: 'limit',
    qty: '10',
    price: '200.5',
    clientOid: 'myOrder001',
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });
