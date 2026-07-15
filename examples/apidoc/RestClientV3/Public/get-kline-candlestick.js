import { RestClientV3 } from 'bitget-api';
// or, if require is preferred:
// const { RestClientV3 } = require('bitget-api');

const client = new RestClientV3();

client
  .getCandles({
    category: 'USDT-FUTURES',
    symbol: 'BTCUSDT',
    interval: '1m',
    type: 'MARKET',
    limit: '10',
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });
