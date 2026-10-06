import { RestClientV3 } from 'bitget-api';
// or, if require is preferred:
// const { RestClientV3 } = require('bitget-api');

const client = new RestClientV3({
  apiKey: 'insert_api_key_here',
  apiSecret: 'insert_api_secret_here',
  apiPass: 'insert_api_pass_here',
});

client
  .copyFuturesFollowerTransfer({
    projectId: '1234567890',
    type: 'in',
    coin: 'USDT',
    amount: '500',
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });
