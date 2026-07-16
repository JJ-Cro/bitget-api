import { RestClientV2 } from 'bitget-api';
// or, if require is preferred:
// const { RestClientV2 } = require('bitget-api');

const client = new RestClientV2({
  apiKey: 'insert_api_key_here',
  apiSecret: 'insert_api_secret_here',
  apiPass: 'insert_api_pass_here',
});

client
  .futuresSubmitPositionTPSL({
    marginCoin: 'USDT',
    productType: 'USDT-FUTURES',
    symbol: 'BTCUSDT',
    stopSurplusTriggerPrice: '69000',
    stopSurplusTriggerType: 'mark_price',
    stopSurplusExecutePrice: '69001',
    stopLossTriggerPrice: '55001',
    stopLossTriggerType: 'mark_price',
    stopLossExecutePrice: '55000',
    holdSide: 'long',
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });
