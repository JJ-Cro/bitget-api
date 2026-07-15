import { RestClientV3 } from 'bitget-api';
// or, if require is preferred:
// const { RestClientV3 } = require('bitget-api');

const client = new RestClientV3({
  apiKey: 'insert_api_key_here',
  apiSecret: 'insert_api_secret_here',
  apiPass: 'insert_api_pass_here',
});

client
  .createP2pAd({
    token: 'USDT',
    fiat: 'CNY',
    side: 'sell',
    priceType: 'fixed',
    price: '7.28',
    minAmount: '100',
    maxAmount: '10000',
    quantity: '500',
    payMethodIds: [{ payMethodId: '1', userPayMethodId: '101' }],
    payTimeLimit: '15',
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });
