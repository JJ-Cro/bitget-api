import { RestClientV3 } from 'bitget-api';
// or, if require is preferred:
// const { RestClientV3 } = require('bitget-api');

const client = new RestClientV3({
  apiKey: 'insert_api_key_here',
  apiSecret: 'insert_api_secret_here',
  apiPass: 'insert_api_pass_here',
});

client
  .redeemEarnElite({
    productSubId: '12169111111111111',
    productId: '121691111111111111',
    redeemType: 'fast',
    amount: '1',
    coin: 'BGUSD',
    receiveAccount: 'spot',
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });
