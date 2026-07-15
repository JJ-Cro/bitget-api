import { RestClientV3 } from 'bitget-api';
// or, if require is preferred:
// const { RestClientV3 } = require('bitget-api');

const client = new RestClientV3();

client
  .getHistoryFundingRate({
    category: 'USDT-FUTURES',
    symbol: 'BTCUSDT',
    limit: '10',
    cursor: '1',
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });
