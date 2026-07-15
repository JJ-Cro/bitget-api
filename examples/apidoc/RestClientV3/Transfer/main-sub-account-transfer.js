import { RestClientV3 } from 'bitget-api';
// or, if require is preferred:
// const { RestClientV3 } = require('bitget-api');

const client = new RestClientV3({
  apiKey: 'insert_api_key_here',
  apiSecret: 'insert_api_secret_here',
  apiPass: 'insert_api_pass_here',
});

client
  .subAccountTransfer({
    fromType: 'spot',
    toType: 'uta',
    amount: '1000',
    coin: 'USDT',
    fromUserId: '1991021336',
    toUserId: '4746345901',
    clientOid: 'xxxxx',
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });
