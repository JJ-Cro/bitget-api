import { RestClientV2 } from 'bitget-api';
// or, if require is preferred:
// const { RestClientV2 } = require('bitget-api');

const client = new RestClientV2({
  apiKey: 'insert_api_key_here',
  apiSecret: 'insert_api_secret_here',
  apiPass: 'insert_api_pass_here',
});

client
  .marginRepay('crossed', {
    remainDebtAmount: '0',
    symbol: 'BTCUSDT',
    repayId: '1234567890',
    coin: 'USDT',
    repayAmount: '100',
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });
