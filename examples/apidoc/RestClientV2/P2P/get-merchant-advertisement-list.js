import { RestClientV2 } from 'bitget-api';
// or, if require is preferred:
// const { RestClientV2 } = require('bitget-api');

const client = new RestClientV2({
  apiKey: 'insert_api_key_here',
  apiSecret: 'insert_api_secret_here',
  apiPass: 'insert_api_pass_here',
});

client
  .getP2PMerchantAdvertisementList({
    startTime: '1690196141868',
    status: 'online',
    side: 'buy',
    coin: 'USDT',
    fiat: 'USD',
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });
