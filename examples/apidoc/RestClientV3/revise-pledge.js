import { RestClientV3 } from 'bitget-api';
// or, if require is preferred:
// const { RestClientV3 } = require('bitget-api');

const client = new RestClientV3({
  apiKey: 'insert_api_key_here',
  apiSecret: 'insert_api_secret_here',
  apiPass: 'insert_api_pass_here',
});

client
  .loanRevisePledge({
    orderId: '123456788661',
    amount: '1',
    pledgeCoin: 'USDT',
    reviseType: 'IN',
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });
