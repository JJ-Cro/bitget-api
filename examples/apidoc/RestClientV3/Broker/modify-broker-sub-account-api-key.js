import { RestClientV3 } from 'bitget-api';
// or, if require is preferred:
// const { RestClientV3 } = require('bitget-api');

const client = new RestClientV3({
  apiKey: 'insert_api_key_here',
  apiSecret: 'insert_api_secret_here',
  apiPass: 'insert_api_pass_here',
});

client
  .modifyBrokerSubApiKey({
    subUid: '12345678910',
    passphrase: '12345678',
    apiKey: 'bg_12345678910',
    label: '338040211757111_test01',
    permType: 'read_write',
    permList: ['uta_trade', 'uta_mgt', 'withdraw'],
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });
