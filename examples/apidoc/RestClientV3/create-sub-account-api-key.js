import { RestClientV3 } from 'bitget-api';
// or, if require is preferred:
// const { RestClientV3 } = require('bitget-api');

const client = new RestClientV3({
  apiKey: 'insert_api_key_here',
  apiSecret: 'insert_api_secret_here',
  apiPass: 'insert_api_pass_here',
});

client
  .createSubAccountApiKey({
    subUid: 'xxx',
    note: 'xxx',
    type: 'read_only',
    permissions: ['uta_trade'],
    passphrase: '1234567Aa',
    ips: ['127.0.0.1'],
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });
