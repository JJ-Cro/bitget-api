import { RestClientV3 } from 'bitget-api';
// or, if require is preferred:
// const { RestClientV3 } = require('bitget-api');

const client = new RestClientV3({
  apiKey: 'insert_api_key_here',
  apiSecret: 'insert_api_secret_here',
  apiPass: 'insert_api_pass_here',
});

client
  .brokerSubWithdrawal({
    subUid: '12345678910',
    dest: 'internal_transfer',
    coin: 'USDT',
    address: '123456789',
    amount: '10',
    clientOid: '91500512549_1765977438100',
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });
