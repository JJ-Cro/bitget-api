import { RestClientV2 } from 'bitget-api';
// or, if require is preferred:
// const { RestClientV2 } = require('bitget-api');

const client = new RestClientV2();

client
  .getFuturesHistoricFundingRates({
    symbol: 'BTCUSDT',
    productType: 'USDT-FUTURES',
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });
