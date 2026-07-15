import { RestClientV3 } from 'bitget-api';
// or, if require is preferred:
// const { RestClientV3 } = require('bitget-api');

const client = new RestClientV3();

client
  .getRpiOrderBook({
    category: 'SPOT',
    symbol: 'BTCUSDT',
    limit: '5',
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });
