
# Endpoint maps

<p align="center">
  <a href="https://www.npmjs.com/package/bitget-api">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://github.com/tiagosiebler/bitget-api/blob/master/docs/images/logoDarkMode2.svg?raw=true#gh-dark-mode-only">
      <img alt="SDK Logo" src="https://github.com/tiagosiebler/bitget-api/blob/master/docs/images/logoBrightMode2.svg?raw=true#gh-light-mode-only">
    </picture>
  </a>
</p>

Each REST client is a JavaScript class, which provides functions individually mapped to each endpoint available in the exchange's API offering. 

The following table shows all methods available in each REST client, whether the method requires authentication (automatically handled if API keys are provided), as well as the exact endpoint each method is connected to.

This can be used to easily find which method to call, once you have [found which endpoint you're looking to use](https://github.com/tiagosiebler/awesome-crypto-examples/wiki/How-to-find-SDK-functions-that-match-API-docs-endpoint).

All REST clients are in the [src](/src) folder. For usage examples, make sure to check the [examples](/examples) folder.

List of clients:
- [rest-client-v2](#rest-client-v2ts)
- [rest-client-v3](#rest-client-v3ts)
- [websocket-api-client](#websocket-api-clientts)


If anything is missing or wrong, please open an issue or let us know in our [Node.js Traders](https://t.me/nodetraders) telegram group!

## How to use table

Table consists of 4 parts:

- Function name
- AUTH
- HTTP Method
- Endpoint

**Function name** is the name of the function that can be called through the SDK. Check examples folder in the repo for more help on how to use them!

**AUTH** is a boolean value that indicates if the function requires authentication - which means you need to pass your API key and secret to the SDK.

**HTTP Method** shows HTTP method that the function uses to call the endpoint. Sometimes endpoints can have same URL, but different HTTP method so you can use this column to differentiate between them.

**Endpoint** is the URL that the function uses to call the endpoint. Best way to find exact function you need for the endpoint is to search for URL in this table and find corresponding function name.


# rest-client-v2.ts

This table includes all endpoints from the official Exchange API docs and corresponding SDK functions for each endpoint that are found in [rest-client-v2.ts](/src/rest-client-v2.ts). 

| Function | AUTH | HTTP Method | Endpoint |
| -------- | :------: | :------: | -------- |
| [getAnnouncements()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L480) |  | GET | `/api/v2/public/annoucements` |
| [getServerTime()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L492) |  | GET | `/api/v2/public/time` |
| [getTradeRate()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L500) | :closed_lock_with_key:  | GET | `/api/v2/common/trade-rate` |
| [getSpotTransactionRecords()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L515) | :closed_lock_with_key:  | GET | `/api/v2/tax/spot-record` |
| [getFuturesTransactionRecords()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L521) | :closed_lock_with_key:  | GET | `/api/v2/tax/future-record` |
| [getMarginTransactionRecords()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L527) | :closed_lock_with_key:  | GET | `/api/v2/tax/margin-record` |
| [getP2PTransactionRecords()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L533) | :closed_lock_with_key:  | GET | `/api/v2/tax/p2p-record` |
| [getP2PMerchantList()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L545) | :closed_lock_with_key:  | GET | `/api/v2/p2p/merchantList` |
| [getP2PMerchantInfo()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L554) | :closed_lock_with_key:  | GET | `/api/v2/p2p/merchantInfo` |
| [getP2PMerchantOrders()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L558) | :closed_lock_with_key:  | GET | `/api/v2/p2p/orderList` |
| [getP2PMerchantAdvertisementList()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L567) | :closed_lock_with_key:  | GET | `/api/v2/p2p/advList` |
| [getSpotWhaleNetFlowData()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L584) | :closed_lock_with_key:  | GET | `/api/v2/spot/market/whale-net-flow` |
| [getFuturesActiveTakerBuySellVolumeData()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L590) |  | GET | `/api/v2/mix/market/taker-buy-sell` |
| [getFuturesActiveLongShortPositionData()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L597) |  | GET | `/api/v2/mix/market/position-long-short` |
| [getFuturesLongShortRatio()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L604) |  | GET | `/api/v2/mix/market/long-short-ratio` |
| [getMarginLoanGrowthRate()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L612) |  | GET | `/api/v2/mix/market/loan-growth` |
| [getIsolatedMarginBorrowingRatio()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L620) |  | GET | `/api/v2/mix/market/isolated-borrow-rate` |
| [getFuturesActiveBuySellVolumeData()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L627) |  | GET | `/api/v2/mix/market/long-short` |
| [getSpotFundFlow()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L634) |  | GET | `/api/v2/spot/market/fund-flow` |
| [getTradeDataSupportSymbols()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L641) |  | GET | `/api/v2/spot/market/support-symbols` |
| [getSpotFundNetFlowData()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L650) |  | GET | `/api/v2/spot/market/fund-net-flow` |
| [getFuturesActiveLongShortAccountData()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L661) |  | GET | `/api/v2/mix/market/account-long-short` |
| [createVirtualSubaccount()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L674) | :closed_lock_with_key:  | POST | `/api/v2/user/create-virtual-subaccount` |
| [modifyVirtualSubaccount()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L680) | :closed_lock_with_key:  | POST | `/api/v2/user/modify-virtual-subaccount` |
| [batchCreateVirtualSubaccountAndAPIKey()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L688) | :closed_lock_with_key:  | POST | `/api/v2/user/batch-create-subaccount-and-apikey` |
| [getVirtualSubaccounts()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L697) | :closed_lock_with_key:  | GET | `/api/v2/user/virtual-subaccount-list` |
| [createVirtualSubaccountAPIKey()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L710) | :closed_lock_with_key:  | POST | `/api/v2/user/create-virtual-subaccount-apikey` |
| [modifyVirtualSubaccountAPIKey()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L719) | :closed_lock_with_key:  | POST | `/api/v2/user/modify-virtual-subaccount-apikey` |
| [getVirtualSubaccountAPIKeys()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L728) | :closed_lock_with_key:  | GET | `/api/v2/user/virtual-subaccount-apikey-list` |
| [getFundingAssets()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L742) | :closed_lock_with_key:  | GET | `/api/v2/account/funding-assets` |
| [getBotAccount()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L748) | :closed_lock_with_key:  | GET | `/api/v2/account/bot-assets` |
| [getBalances()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L755) | :closed_lock_with_key:  | GET | `/api/v2/account/all-account-balance` |
| [getConvertCoins()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L772) | :closed_lock_with_key:  | GET | `/api/v2/convert/currencies` |
| [getConvertQuotedPrice()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L776) | :closed_lock_with_key:  | GET | `/api/v2/convert/quoted-price` |
| [convert()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L782) | :closed_lock_with_key:  | POST | `/api/v2/convert/trade` |
| [getConvertHistory()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L788) | :closed_lock_with_key:  | GET | `/api/v2/convert/convert-record` |
| [getConvertBGBCoins()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L803) | :closed_lock_with_key:  | GET | `/api/v2/convert/bgb-convert-coin-list` |
| [convertBGB()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L811) | :closed_lock_with_key:  | POST | `/api/v2/convert/bgb-convert` |
| [getConvertBGBHistory()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L817) | :closed_lock_with_key:  | GET | `/api/v2/convert/bgb-convert-records` |
| [getSpotCoinInfo()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L837) | :closed_lock_with_key:  | GET | `/api/v2/spot/public/coins` |
| [getSpotSymbolInfo()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L843) | :closed_lock_with_key:  | GET | `/api/v2/spot/public/symbols` |
| [getSpotVIPFeeRate()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L849) | :closed_lock_with_key:  | GET | `/api/v2/spot/market/vip-fee-rate` |
| [getSpotTicker()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L853) | :closed_lock_with_key:  | GET | `/api/v2/spot/market/tickers` |
| [getSpotMergeDepth()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L859) | :closed_lock_with_key:  | GET | `/api/v2/spot/market/merge-depth` |
| [getSpotOrderBookDepth()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L867) | :closed_lock_with_key:  | GET | `/api/v2/spot/market/orderbook` |
| [getSpotCandles()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L875) | :closed_lock_with_key:  | GET | `/api/v2/spot/market/candles` |
| [getSpotHistoricCandles()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L881) | :closed_lock_with_key:  | GET | `/api/v2/spot/market/history-candles` |
| [getSpotRecentTrades()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L887) | :closed_lock_with_key:  | GET | `/api/v2/spot/market/fills` |
| [getSpotHistoricTrades()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L894) | :closed_lock_with_key:  | GET | `/api/v2/spot/market/fills-history` |
| [spotSubmitOrder()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L906) | :closed_lock_with_key:  | POST | `/api/v2/spot/trade/place-order` |
| [spotCancelandSubmitOrder()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L915) | :closed_lock_with_key:  | POST | `/api/v2/spot/trade/cancel-replace-order` |
| [spotBatchCancelandSubmitOrder()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L921) | :closed_lock_with_key:  | POST | `/api/v2/spot/trade/batch-cancel-replace-order` |
| [spotCancelOrder()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L930) | :closed_lock_with_key:  | POST | `/api/v2/spot/trade/cancel-order` |
| [spotBatchSubmitOrders()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L939) | :closed_lock_with_key:  | POST | `/api/v2/spot/trade/batch-orders` |
| [spotBatchCancelOrders()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L945) | :closed_lock_with_key:  | POST | `/api/v2/spot/trade/batch-cancel-order` |
| [spotCancelSymbolOrder()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L951) | :closed_lock_with_key:  | POST | `/api/v2/spot/trade/cancel-symbol-order` |
| [getSpotOrder()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L959) | :closed_lock_with_key:  | GET | `/api/v2/spot/trade/orderInfo` |
| [getSpotOpenOrders()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L965) | :closed_lock_with_key:  | GET | `/api/v2/spot/trade/unfilled-orders` |
| [getSpotHistoricOrders()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L971) | :closed_lock_with_key:  | GET | `/api/v2/spot/trade/history-orders` |
| [getSpotFills()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L977) | :closed_lock_with_key:  | GET | `/api/v2/spot/trade/fills` |
| [spotSubmitPlanOrder()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L989) | :closed_lock_with_key:  | POST | `/api/v2/spot/trade/place-plan-order` |
| [spotModifyPlanOrder()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L998) | :closed_lock_with_key:  | POST | `/api/v2/spot/trade/modify-plan-order` |
| [spotCancelPlanOrder()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1007) | :closed_lock_with_key:  | POST | `/api/v2/spot/trade/cancel-plan-order` |
| [getSpotCurrentPlanOrders()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1018) | :closed_lock_with_key:  | GET | `/api/v2/spot/trade/current-plan-order` |
| [getSpotPlanSubOrder()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1028) | :closed_lock_with_key:  | GET | `/api/v2/spot/trade/plan-sub-order` |
| [getSpotHistoricPlanOrders()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1034) | :closed_lock_with_key:  | GET | `/api/v2/spot/trade/history-plan-order` |
| [spotCancelPlanOrders()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1044) | :closed_lock_with_key:  | POST | `/api/v2/spot/trade/batch-cancel-plan-order` |
| [getSpotAccount()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1059) | :closed_lock_with_key:  | GET | `/api/v2/spot/account/info` |
| [getSpotAccountAssets()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1063) | :closed_lock_with_key:  | GET | `/api/v2/spot/account/assets` |
| [getSpotSubAccountAssets()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1070) | :closed_lock_with_key:  | GET | `/api/v2/spot/account/subaccount-assets` |
| [spotModifyDepositAccount()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1074) | :closed_lock_with_key:  | POST | `/api/v2/spot/wallet/modify-deposit-account` |
| [getSpotAccountBills()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1084) | :closed_lock_with_key:  | GET | `/api/v2/spot/account/bills` |
| [spotTransfer()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1090) | :closed_lock_with_key:  | POST | `/api/v2/spot/wallet/transfer` |
| [getSpotTransferableCoins()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1099) | :closed_lock_with_key:  | GET | `/api/v2/spot/wallet/transfer-coin-info` |
| [spotSubTransfer()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1106) | :closed_lock_with_key:  | POST | `/api/v2/spot/wallet/subaccount-transfer` |
| [spotWithdraw()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1115) | :closed_lock_with_key:  | POST | `/api/v2/spot/wallet/withdrawal` |
| [getSpotMainSubTransferRecord()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1124) | :closed_lock_with_key:  | GET | `/api/v2/spot/account/sub-main-trans-record` |
| [getSpotTransferHistory()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1133) | :closed_lock_with_key:  | GET | `/api/v2/spot/account/transferRecords` |
| [spotSwitchBGBDeduct()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1139) | :closed_lock_with_key:  | POST | `/api/v2/spot/account/switch-deduct` |
| [getSpotDepositAddress()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1145) | :closed_lock_with_key:  | GET | `/api/v2/spot/wallet/deposit-address` |
| [getSpotSubDepositAddress()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1153) | :closed_lock_with_key:  | GET | `/api/v2/spot/wallet/subaccount-deposit-address` |
| [getSpotBGBDeductInfo()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1165) | :closed_lock_with_key:  | GET | `/api/v2/spot/account/deduct-info` |
| [spotCancelWithdrawal()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1173) | :closed_lock_with_key:  | POST | `/api/v2/spot/wallet/cancel-withdrawal` |
| [getSubAccountDepositRecords()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1179) | :closed_lock_with_key:  | GET | `/api/v2/spot/wallet/subaccount-deposit-records` |
| [getSpotWithdrawalHistory()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1188) | :closed_lock_with_key:  | GET | `/api/v2/spot/wallet/withdrawal-records` |
| [getSpotDepositHistory()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1194) | :closed_lock_with_key:  | GET | `/api/v2/spot/wallet/deposit-records` |
| [upgradeToUnifiedAccount()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1209) | :closed_lock_with_key:  | POST | `/api/v2/spot/account/upgrade` |
| [getUnifiedAccountSwitchStatus()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1219) | :closed_lock_with_key:  | GET | `/api/v2/spot/account/upgrade-status` |
| [getFuturesVIPFeeRate()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1241) |  | GET | `/api/v2/mix/market/vip-fee-rate` |
| [getFuturesInterestRateHistory()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1245) |  | GET | `/api/v2/mix/market/union-interest-rate-history` |
| [getFuturesInterestExchangeRate()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1254) |  | GET | `/api/v2/mix/market/exchange-rate` |
| [getFuturesDiscountRate()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1265) |  | GET | `/api/v2/mix/market/discount-rate` |
| [getFuturesMergeDepth()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1269) |  | GET | `/api/v2/mix/market/merge-depth` |
| [getFuturesTicker()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1275) |  | GET | `/api/v2/mix/market/ticker` |
| [getFuturesAllTickers()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1282) |  | GET | `/api/v2/mix/market/tickers` |
| [getFuturesRecentTrades()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1288) |  | GET | `/api/v2/mix/market/fills` |
| [getFuturesHistoricTrades()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1294) |  | GET | `/api/v2/mix/market/fills-history` |
| [getFuturesCandles()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1300) |  | GET | `/api/v2/mix/market/candles` |
| [getFuturesHistoricCandles()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1306) |  | GET | `/api/v2/mix/market/history-candles` |
| [getFuturesHistoricIndexPriceCandles()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1312) |  | GET | `/api/v2/mix/market/history-index-candles` |
| [getFuturesHistoricMarkPriceCandles()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1318) |  | GET | `/api/v2/mix/market/history-mark-candles` |
| [getFuturesOpenInterest()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1324) |  | GET | `/api/v2/mix/market/open-interest` |
| [getFuturesNextFundingTime()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1336) |  | GET | `/api/v2/mix/market/funding-time` |
| [getFuturesSymbolPrice()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1343) |  | GET | `/api/v2/mix/market/symbol-price` |
| [getFuturesHistoricFundingRates()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1350) |  | GET | `/api/v2/mix/market/history-fund-rate` |
| [getFuturesCurrentFundingRate()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1359) |  | GET | `/api/v2/mix/market/current-fund-rate` |
| [getFuturesContractConfig()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1377) |  | GET | `/api/v2/mix/market/contracts` |
| [getFuturesAccountAsset()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1390) | :closed_lock_with_key:  | GET | `/api/v2/mix/account/account` |
| [getFuturesAccountAssets()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1396) | :closed_lock_with_key:  | GET | `/api/v2/mix/account/accounts` |
| [getFuturesSubAccountAssets()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1402) | :closed_lock_with_key:  | GET | `/api/v2/mix/account/sub-account-assets` |
| [getFuturesInterestHistory()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1415) | :closed_lock_with_key:  | GET | `/api/v2/mix/account/interest-history` |
| [getFuturesOpenCount()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1421) | :closed_lock_with_key:  | GET | `/api/v2/mix/account/open-count` |
| [setFuturesPositionAutoMargin()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1429) | :closed_lock_with_key:  | POST | `/api/v2/mix/account/set-auto-margin` |
| [setFuturesLeverage()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1435) | :closed_lock_with_key:  | POST | `/api/v2/mix/account/set-leverage` |
| [setFuturesPositionMargin()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1441) | :closed_lock_with_key:  | POST | `/api/v2/mix/account/set-margin` |
| [setFuturesAssetMode()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1447) | :closed_lock_with_key:  | POST | `/api/v2/mix/account/set-asset-mode` |
| [setFuturesMarginMode()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1454) | :closed_lock_with_key:  | POST | `/api/v2/mix/account/set-margin-mode` |
| [setFuturesPositionMode()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1460) | :closed_lock_with_key:  | POST | `/api/v2/mix/account/set-position-mode` |
| [getFuturesAccountBills()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1471) | :closed_lock_with_key:  | GET | `/api/v2/mix/account/bill` |
| [getUnionTransferLimits()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1486) | :closed_lock_with_key:  | GET | `/api/v2/mix/account/transfer-limits` |
| [getUnionConfig()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1498) | :closed_lock_with_key:  | GET | `/api/v2/mix/account/union-config` |
| [getSwitchUnionUsdt()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1508) | :closed_lock_with_key:  | GET | `/api/v2/mix/account/switch-union-usdt` |
| [unionConvert()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1518) | :closed_lock_with_key:  | POST | `/api/v2/mix/account/union-convert` |
| [getFuturesMaxOpenableQuantity()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1530) | :closed_lock_with_key:  | GET | `/api/v2/mix/account/max-open` |
| [getFuturesLiquidationPrice()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1542) | :closed_lock_with_key:  | GET | `/api/v2/mix/account/liq-price` |
| [getFuturesIsolatedSymbols()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1554) | :closed_lock_with_key:  | GET | `/api/v2/mix/account/isolated-symbols` |
| [getFuturesPositionTier()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1566) |  | GET | `/api/v2/mix/market/query-position-lever` |
| [getFuturesPosition()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1573) | :closed_lock_with_key:  | GET | `/api/v2/mix/position/single-position` |
| [getFuturesPositions()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1581) | :closed_lock_with_key:  | GET | `/api/v2/mix/position/all-position` |
| [getFuturesHistoricPositions()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1588) | :closed_lock_with_key:  | GET | `/api/v2/mix/position/history-position` |
| [futuresSubmitOrder()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1605) | :closed_lock_with_key:  | POST | `/api/v2/mix/order/place-order` |
| [futuresSubmitReversal()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1614) | :closed_lock_with_key:  | POST | `/api/v2/mix/order/click-backhand` |
| [futuresBatchSubmitOrders()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1623) | :closed_lock_with_key:  | POST | `/api/v2/mix/order/batch-place-order` |
| [futuresModifyOrder()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1629) | :closed_lock_with_key:  | POST | `/api/v2/mix/order/modify-order` |
| [futuresCancelOrder()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1638) | :closed_lock_with_key:  | POST | `/api/v2/mix/order/cancel-order` |
| [futuresBatchCancelOrders()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1647) | :closed_lock_with_key:  | POST | `/api/v2/mix/order/batch-cancel-orders` |
| [futuresFlashClosePositions()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1653) | :closed_lock_with_key:  | POST | `/api/v2/mix/order/close-positions` |
| [getFuturesOrder()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1659) | :closed_lock_with_key:  | GET | `/api/v2/mix/order/detail` |
| [getFuturesFills()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1665) | :closed_lock_with_key:  | GET | `/api/v2/mix/order/fills` |
| [getFuturesHistoricOrderFills()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1674) | :closed_lock_with_key:  | GET | `/api/v2/mix/order/fill-history` |
| [getFuturesOpenOrders()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1685) | :closed_lock_with_key:  | GET | `/api/v2/mix/order/orders-pending` |
| [getFuturesHistoricOrders()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1694) | :closed_lock_with_key:  | GET | `/api/v2/mix/order/orders-history` |
| [futuresCancelAllOrders()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1703) | :closed_lock_with_key:  | POST | `/api/v2/mix/order/cancel-all-orders` |
| [getFuturesTriggerSubOrder()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1715) | :closed_lock_with_key:  | GET | `/api/v2/mix/order/plan-sub-order` |
| [futuresSubmitTPSLOrder()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1723) | :closed_lock_with_key:  | POST | `/api/v2/mix/order/place-tpsl-order` |
| [futuresSubmitPlanOrder()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1732) | :closed_lock_with_key:  | POST | `/api/v2/mix/order/place-plan-order` |
| [futuresModifyTPSLPOrder()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1741) | :closed_lock_with_key:  | POST | `/api/v2/mix/order/modify-tpsl-order` |
| [futuresModifyPlanOrder()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1750) | :closed_lock_with_key:  | POST | `/api/v2/mix/order/modify-plan-order` |
| [getFuturesPlanOrders()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1759) | :closed_lock_with_key:  | GET | `/api/v2/mix/order/orders-plan-pending` |
| [futuresCancelPlanOrder()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1768) | :closed_lock_with_key:  | POST | `/api/v2/mix/order/cancel-plan-order` |
| [getFuturesHistoricPlanOrders()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1774) | :closed_lock_with_key:  | GET | `/api/v2/mix/order/orders-plan-history` |
| [modifySubaccountEmail()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1799) | :closed_lock_with_key:  | POST | `/api/v2/broker/account/modify-subaccount-email` |
| [getBrokerInfo()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1809) | :closed_lock_with_key:  | GET | `/api/v2/broker/account/info` |
| [createSubaccount()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1819) | :closed_lock_with_key:  | POST | `/api/v2/broker/account/create-subaccount` |
| [getSubaccounts()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1826) | :closed_lock_with_key:  | GET | `/api/v2/broker/account/subaccount-list` |
| [modifySubaccount()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1836) | :closed_lock_with_key:  | POST | `/api/v2/broker/account/modify-subaccount` |
| [getSubaccountEmail()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1842) | :closed_lock_with_key:  | GET | `/api/v2/broker/account/subaccount-email` |
| [getSubaccountSpotAssets()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1848) | :closed_lock_with_key:  | GET | `/api/v2/broker/account/subaccount-spot-assets` |
| [getSubaccountFuturesAssets()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1863) | :closed_lock_with_key:  | GET | `/api/v2/broker/account/subaccount-future-assets` |
| [createSubaccountDepositAddress()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1877) | :closed_lock_with_key:  | POST | `/api/v2/broker/account/subaccount-address` |
| [subaccountWithdrawal()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1888) | :closed_lock_with_key:  | POST | `/api/v2/broker/account/subaccount-withdrawal` |
| [subaccountSetAutoTransfer()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1900) | :closed_lock_with_key:  | POST | `/api/v2/broker/account/set-subaccount-autotransfer` |
| [subaccountDepositRecords()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1916) | :closed_lock_with_key:  | GET | `/api/v2/broker/subaccount-deposit` |
| [subaccountWithdrawalRecords()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1927) | :closed_lock_with_key:  | GET | `/api/v2/broker/subaccount-withdrawal` |
| [createSubaccountApiKey()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1942) | :closed_lock_with_key:  | POST | `/api/v2/broker/manage/create-subaccount-apikey` |
| [getSubaccountApiKey()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1951) | :closed_lock_with_key:  | GET | `/api/v2/broker/manage/subaccount-apikey-list` |
| [modifySubaccountApiKey()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1960) | :closed_lock_with_key:  | POST | `/api/v2/broker/manage/modify-subaccount-apikey` |
| [getAllSubDepositWithdrawalRecords()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1976) | :closed_lock_with_key:  | GET | `/api/v2/broker/all-sub-deposit-withdrawal` |
| [getBrokerSubaccounts()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1993) | :closed_lock_with_key:  | GET | `/api/v2/broker/subaccounts` |
| [getBrokerCommissions()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2005) | :closed_lock_with_key:  | GET | `/api/v2/broker/commissions` |
| [getBrokerTradeVolume()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2017) | :closed_lock_with_key:  | GET | `/api/v2/broker/trade-volume` |
| [getBrokerTotalCommission()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2037) | :closed_lock_with_key:  | GET | `/api/v2/broker/total-commission` |
| [getBrokerOrderCommission()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2059) | :closed_lock_with_key:  | GET | `/api/v2/broker/order-commission` |
| [getBrokerRebateInfo()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2072) | :closed_lock_with_key:  | GET | `/api/v2/broker/rebate-info` |
| [getAgentCustomerCommissions()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2084) | :closed_lock_with_key:  | GET | `/api/v2/broker/customer-commissions` |
| [getAgentSubCustomerList()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2090) | :closed_lock_with_key:  | GET | `/api/v2/broker/sub-customer-list` |
| [getAgentCustomerTradeVolume()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2096) | :closed_lock_with_key:  | POST | `/api/v2/broker/customer-trade-volume` |
| [getAgentCustomerList()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2102) | :closed_lock_with_key:  | POST | `/api/v2/broker/customer-list` |
| [getAgentCustomerKycResult()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2108) | :closed_lock_with_key:  | GET | `/api/v2/broker/customer-kyc-result` |
| [getAgentCustomerDeposits()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2114) | :closed_lock_with_key:  | POST | `/api/v2/broker/customer-deposit` |
| [getAgentCustomerAssets()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2120) | :closed_lock_with_key:  | POST | `/api/v2/broker/customer-asset` |
| [getAgentCommissionDetail()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2126) | :closed_lock_with_key:  | GET | `/api/v2/broker/agent-commission` |
| [getMarginCurrencies()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2146) |  | GET | `/api/v2/margin/currencies` |
| [getMarginBorrowHistory()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2156) | :closed_lock_with_key:  | GET | `/api/v2/margin/${marginType}/borrow-history` |
| [getMarginRepayHistory()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2173) | :closed_lock_with_key:  | GET | `/api/v2/margin/${marginType}/repay-history` |
| [getMarginInterestHistory()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2190) | :closed_lock_with_key:  | GET | `/api/v2/margin/${marginType}/interest-history` |
| [getMarginLiquidationHistory()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2207) | :closed_lock_with_key:  | GET | `/api/v2/margin/${marginType}/liquidation-history` |
| [getMarginFinancialHistory()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2224) | :closed_lock_with_key:  | GET | `/api/v2/margin/${marginType}/financial-records` |
| [getMarginAccountAssets()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2247) | :closed_lock_with_key:  | GET | `/api/v2/margin/${marginType}/account/assets` |
| [marginBorrow()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2258) | :closed_lock_with_key:  | POST | `/api/v2/margin/${marginType}/account/borrow` |
| [marginRepay()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2281) | :closed_lock_with_key:  | POST | `/api/v2/margin/${marginType}/account/repay` |
| [getMarginRiskRate()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2306) | :closed_lock_with_key:  | GET | `/api/v2/margin/${marginType}/account/risk-rate` |
| [getMarginMaxBorrowable()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2318) | :closed_lock_with_key:  | GET | `/api/v2/margin/${marginType}/account/max-borrowable-amount` |
| [getMarginMaxTransferable()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2331) | :closed_lock_with_key:  | GET | `/api/v2/margin/${marginType}/account/max-transfer-out-amount` |
| [getMarginInterestRateAndMaxBorrowable()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2346) | :closed_lock_with_key:  | GET | `/api/v2/margin/${marginType}/interest-rate-and-limit` |
| [getMarginTierConfiguration()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2362) | :closed_lock_with_key:  | GET | `/api/v2/margin/${marginType}/tier-data` |
| [marginFlashRepay()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2374) | :closed_lock_with_key:  | POST | `/api/v2/margin/${marginType}/account/flash-repay` |
| [getMarginFlashRepayResult()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2392) | :closed_lock_with_key:  | GET | `/api/v2/margin/${marginType}/account/query-flash-repay-status` |
| [marginSubmitOrder()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2416) | :closed_lock_with_key:  | POST | `/api/v2/margin/${marginType}/place-order` |
| [marginBatchSubmitOrders()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2429) | :closed_lock_with_key:  | POST | `/api/v2/margin/${marginType}/batch-place-order` |
| [marginCancelOrder()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2440) | :closed_lock_with_key:  | POST | `/api/v2/margin/${marginType}/cancel-order` |
| [marginBatchCancelOrders()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2460) | :closed_lock_with_key:  | POST | `/api/v2/margin/${marginType}/batch-cancel-order` |
| [getMarginOpenOrders()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2474) | :closed_lock_with_key:  | GET | `/api/v2/margin/${marginType}/open-orders` |
| [getMarginHistoricOrders()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2488) | :closed_lock_with_key:  | GET | `/api/v2/margin/${marginType}/history-orders` |
| [getMarginHistoricOrderFills()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2505) | :closed_lock_with_key:  | GET | `/api/v2/margin/${marginType}/fills` |
| [getMarginLiquidationOrders()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2519) | :closed_lock_with_key:  | GET | `/api/v2/margin/${marginType}/liquidation-order` |
| [getFuturesTraderCurrentOrder()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2551) | :closed_lock_with_key:  | GET | `/api/v2/copy/mix-trader/order-current-track` |
| [getFuturesTraderHistoryOrders()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2560) | :closed_lock_with_key:  | GET | `/api/v2/copy/mix-trader/order-history-track` |
| [modifyFuturesTraderOrderTPSL()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2569) | :closed_lock_with_key:  | POST | `/api/v2/copy/mix-trader/order-modify-tpsl` |
| [getFuturesTraderOrder()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2578) | :closed_lock_with_key:  | GET | `/api/v2/copy/mix-trader/order-total-detail` |
| [getFuturesTraderProfitHistory()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2584) | :closed_lock_with_key:  | GET | `/api/v2/copy/mix-trader/profit-history-summarys` |
| [getFuturesTraderProfitShareHistory()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2590) | :closed_lock_with_key:  | GET | `/api/v2/copy/mix-trader/profit-history-details` |
| [closeFuturesTraderOrder()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2599) | :closed_lock_with_key:  | POST | `/api/v2/copy/mix-trader/order-close-positions` |
| [getFuturesTraderProfitShare()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2618) | :closed_lock_with_key:  | GET | `/api/v2/copy/mix-trader/profit-details` |
| [getFuturesTraderProfitShareGroup()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2634) | :closed_lock_with_key:  | GET | `/api/v2/copy/mix-trader/profits-group-coin-date` |
| [getFuturesTraderSymbolSettings()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2652) | :closed_lock_with_key:  | GET | `/api/v2/copy/mix-trader/config-query-symbols` |
| [updateFuturesTraderSymbolSettings()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2661) | :closed_lock_with_key:  | POST | `/api/v2/copy/mix-trader/config-setting-symbols` |
| [updateFuturesTraderGlobalSettings()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2670) | :closed_lock_with_key:  | POST | `/api/v2/copy/mix-trader/config-settings-base` |
| [getFuturesTraderFollowers()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2681) | :closed_lock_with_key:  | GET | `/api/v2/copy/mix-trader/config-query-followers` |
| [removeFuturesTraderFollower()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2690) | :closed_lock_with_key:  | POST | `/api/v2/copy/mix-trader/config-remove-follower` |
| [getFuturesFollowerCurrentOrders()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2707) | :closed_lock_with_key:  | GET | `/api/v2/copy/mix-follower/query-current-orders` |
| [getFuturesFollowerHistoryOrders()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2716) | :closed_lock_with_key:  | GET | `/api/v2/copy/mix-follower/query-history-orders` |
| [updateFuturesFollowerTPSL()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2725) | :closed_lock_with_key:  | POST | `/api/v2/copy/mix-follower/setting-tpsl` |
| [updateFuturesFollowerSettings()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2731) | :closed_lock_with_key:  | POST | `/api/v2/copy/mix-follower/settings` |
| [getFuturesFollowerSettings()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2737) | :closed_lock_with_key:  | GET | `/api/v2/copy/mix-follower/query-settings` |
| [closeFuturesFollowerPositions()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2743) | :closed_lock_with_key:  | POST | `/api/v2/copy/mix-follower/close-positions` |
| [getFuturesFollowerTraders()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2756) | :closed_lock_with_key:  | GET | `/api/v2/copy/mix-follower/query-traders` |
| [getFuturesFollowerFollowLimit()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2762) | :closed_lock_with_key:  | GET | `/api/v2/copy/mix-follower/query-quantity-limit` |
| [unfollowFuturesTrader()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2780) | :closed_lock_with_key:  | POST | `/api/v2/copy/mix-follower/cancel-trader` |
| [getBrokerTraders()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2794) | :closed_lock_with_key:  | GET | `/api/v2/copy/mix-broker/query-traders` |
| [getBrokerTradersHistoricalOrders()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2798) | :closed_lock_with_key:  | GET | `/api/v2/copy/mix-broker/query-history-traces` |
| [getBrokerTradersPendingOrders()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2805) | :closed_lock_with_key:  | GET | `/api/v2/copy/mix-broker/query-current-traces` |
| [getSpotTraderProfit()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2820) | :closed_lock_with_key:  | GET | `/api/v2/copy/spot-trader/profit-summarys` |
| [getSpotTraderHistoryProfit()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2824) | :closed_lock_with_key:  | GET | `/api/v2/copy/spot-trader/profit-history-details` |
| [getSpotTraderUnrealizedProfit()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2833) | :closed_lock_with_key:  | GET | `/api/v2/copy/spot-trader/profit-details` |
| [getSpotTraderOrder()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2841) | :closed_lock_with_key:  | GET | `/api/v2/copy/spot-trader/order-total-detail` |
| [modifySpotTraderOrderTPSL()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2845) | :closed_lock_with_key:  | POST | `/api/v2/copy/spot-trader/order-modify-tpsl` |
| [getSpotTraderHistoryOrders()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2856) | :closed_lock_with_key:  | GET | `/api/v2/copy/spot-trader/order-history-track` |
| [getSpotTraderCurrentOrders()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2865) | :closed_lock_with_key:  | GET | `/api/v2/copy/spot-trader/order-current-track` |
| [sellSpotTrader()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2874) | :closed_lock_with_key:  | POST | `/api/v2/copy/spot-trader/order-close-tracking` |
| [getSpotTraderSymbolSettings()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2884) | :closed_lock_with_key:  | POST | `/api/v2/copy/spot-trader/config-setting-symbols` |
| [removeSpotTraderFollowers()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2894) | :closed_lock_with_key:  | POST | `/api/v2/copy/spot-trader/config-remove-follower` |
| [getSpotTraderConfiguration()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2903) | :closed_lock_with_key:  | GET | `/api/v2/copy/spot-trader/config-query-settings` |
| [getSpotTraderFollowers()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2907) | :closed_lock_with_key:  | GET | `/api/v2/copy/spot-trader/config-query-followers` |
| [cancelSpotFollowerOrder()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2924) | :closed_lock_with_key:  | POST | `/api/v2/copy/spot-follower/stop-order` |
| [updateSpotFollowerSettings()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2930) | :closed_lock_with_key:  | POST | `/api/v2/copy/spot-follower/settings` |
| [updateSpotFollowerTPSL()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2939) | :closed_lock_with_key:  | POST | `/api/v2/copy/spot-follower/setting-tpsl` |
| [getSpotFollowerTraders()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2947) | :closed_lock_with_key:  | GET | `/api/v2/copy/spot-follower/query-traders` |
| [getSpotFollowerCurrentTraderSymbols()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2956) | :closed_lock_with_key:  | GET | `/api/v2/copy/spot-follower/query-trader-symbols` |
| [getSpotFollowerSettings()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2967) | :closed_lock_with_key:  | GET | `/api/v2/copy/spot-follower/query-settings` |
| [getSpotFollowerHistoryOrders()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2973) | :closed_lock_with_key:  | GET | `/api/v2/copy/spot-follower/query-history-orders` |
| [getSpotFollowerOpenOrders()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2982) | :closed_lock_with_key:  | GET | `/api/v2/copy/spot-follower/query-current-orders` |
| [sellSpotFollower()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2991) | :closed_lock_with_key:  | POST | `/api/v2/copy/spot-follower/order-close-tracking` |
| [unfollowSpotTrader()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L3001) | :closed_lock_with_key:  | POST | `/api/v2/copy/spot-follower/cancel-trader` |
| [getEarnSavingsProducts()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L3015) | :closed_lock_with_key:  | GET | `/api/v2/earn/savings/product` |
| [getEarnSavingsAccount()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L3022) | :closed_lock_with_key:  | GET | `/api/v2/earn/savings/account` |
| [getEarnSavingsAssets()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L3026) | :closed_lock_with_key:  | GET | `/api/v2/earn/savings/assets` |
| [getEarnSavingsRecords()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L3032) | :closed_lock_with_key:  | GET | `/api/v2/earn/savings/records` |
| [getEarnSavingsSubscription()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L3038) | :closed_lock_with_key:  | GET | `/api/v2/earn/savings/subscribe-info` |
| [earnSubscribeSavings()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L3045) | :closed_lock_with_key:  | POST | `/api/v2/earn/savings/subscribe` |
| [getEarnSavingsSubscriptionResult()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L3058) | :closed_lock_with_key:  | GET | `/api/v2/earn/savings/subscribe-result` |
| [earnRedeemSavings()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L3070) | :closed_lock_with_key:  | POST | `/api/v2/earn/savings/redeem` |
| [getEarnSavingsRedemptionResult()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L3079) | :closed_lock_with_key:  | GET | `/api/v2/earn/savings/redeem-result` |
| [getEarnAccount()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L3099) | :closed_lock_with_key:  | GET | `/api/v2/earn/account/assets` |
| [getEarnEliteProducts()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L3118) | :closed_lock_with_key:  | GET | `/api/v2/earn/elite/product` |
| [getEarnEliteAssets()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L3122) | :closed_lock_with_key:  | GET | `/api/v2/earn/elite/assets` |
| [getEarnEliteRecords()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L3126) | :closed_lock_with_key:  | GET | `/api/v2/earn/elite/records` |
| [getEarnEliteSubscribeInfo()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L3132) | :closed_lock_with_key:  | GET | `/api/v2/earn/elite/subscribe-info` |
| [subscribeEarnElite()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L3138) | :closed_lock_with_key:  | POST | `/api/v2/earn/elite/subscribe` |
| [getEarnEliteSubscribeResult()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L3144) | :closed_lock_with_key:  | GET | `/api/v2/earn/elite/subscribe-result` |
| [getEarnEliteRedeemInfo()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L3150) | :closed_lock_with_key:  | GET | `/api/v2/earn/elite/redeem-info` |
| [redeemEarnElite()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L3156) | :closed_lock_with_key:  | POST | `/api/v2/earn/elite/redeem` |
| [getSharkfinProducts()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L3170) | :closed_lock_with_key:  | GET | `/api/v2/earn/sharkfin/product` |
| [getSharkfinAccount()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L3178) | :closed_lock_with_key:  | GET | `/api/v2/earn/sharkfin/account` |
| [getSharkfinAssets()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L3182) | :closed_lock_with_key:  | GET | `/api/v2/earn/sharkfin/assets` |
| [getSharkfinRecords()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L3188) | :closed_lock_with_key:  | GET | `/api/v2/earn/sharkfin/records` |
| [getSharkfinSubscription()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L3194) | :closed_lock_with_key:  | GET | `/api/v2/earn/sharkfin/subscribe-info` |
| [subscribeSharkfin()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L3200) | :closed_lock_with_key:  | POST | `/api/v2/earn/sharkfin/subscribe` |
| [getSharkfinSubscriptionResult()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L3209) | :closed_lock_with_key:  | GET | `/api/v2/earn/sharkfin/subscribe-result` |
| [getLoanCurrencies()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L3226) |  | GET | `/api/v2/earn/loan/public/coinInfos` |
| [getLoanEstInterestAndBorrowable()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L3232) |  | GET | `/api/v2/earn/loan/public/hour-interest` |
| [borrowLoan()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L3243) | :closed_lock_with_key:  | POST | `/api/v2/earn/loan/borrow` |
| [getOngoingLoanOrders()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L3251) | :closed_lock_with_key:  | GET | `/api/v2/earn/loan/ongoing-orders` |
| [repayLoan()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L3259) | :closed_lock_with_key:  | POST | `/api/v2/earn/loan/repay` |
| [getRepayHistory()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L3265) | :closed_lock_with_key:  | GET | `/api/v2/earn/loan/repay-history` |
| [updateLoanPledgeRate()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L3271) | :closed_lock_with_key:  | POST | `/api/v2/earn/loan/revise-pledge` |
| [getLoanPledgeRateHistory()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L3281) | :closed_lock_with_key:  | GET | `/api/v2/earn/loan/revise-history` |
| [getLoanHistory()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L3287) | :closed_lock_with_key:  | GET | `/api/v2/earn/loan/borrow-history` |
| [getLoanDebts()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L3293) | :closed_lock_with_key:  | GET | `/api/v2/earn/loan/debts` |
| [getLoanLiquidationRecords()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L3297) | :closed_lock_with_key:  | GET | `/api/v2/earn/loan/reduces` |

# rest-client-v3.ts

This table includes all endpoints from the official Exchange API docs and corresponding SDK functions for each endpoint that are found in [rest-client-v3.ts](/src/rest-client-v3.ts). 

| Function | AUTH | HTTP Method | Endpoint |
| -------- | :------: | :------: | -------- |
| [getServerTime()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L319) |  | GET | `/api/v3/public/time` |
| [getInstruments()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L336) |  | GET | `/api/v3/market/instruments` |
| [getMarketFeeGroup()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L345) |  | GET | `/api/v3/market/fee-group` |
| [getMarketScoreWeights()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L354) |  | GET | `/api/v3/market/score-weights` |
| [getTickers()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L363) |  | GET | `/api/v3/market/tickers` |
| [getOrderBook()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L370) |  | GET | `/api/v3/market/orderbook` |
| [getFills()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L379) |  | GET | `/api/v3/market/fills` |
| [getProofOfReserves()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L388) |  | GET | `/api/v3/market/proof-of-reserves` |
| [getOpenInterest()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L395) |  | GET | `/api/v3/market/open-interest` |
| [getCandles()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L405) |  | GET | `/api/v3/market/candles` |
| [getHistoryCandles()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L414) |  | GET | `/api/v3/market/history-candles` |
| [getCurrentFundingRate()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L423) |  | GET | `/api/v3/market/current-fund-rate` |
| [getHistoryFundingRate()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L432) |  | GET | `/api/v3/market/history-fund-rate` |
| [getRiskReserve()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L441) |  | GET | `/api/v3/market/risk-reserve` |
| [getRiskReserveHour()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L450) |  | GET | `/api/v3/market/risk-reserve-hour` |
| [getRiskReserveAll()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L459) |  | GET | `/api/v3/market/risk-reserve-all` |
| [getDiscountRate()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L468) |  | GET | `/api/v3/market/discount-rate` |
| [getMarginLoans()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L475) |  | GET | `/api/v3/market/margin-loans` |
| [getPositionTier()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L484) |  | GET | `/api/v3/market/position-tier` |
| [getContractsOi()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L493) |  | GET | `/api/v3/market/oi-limit` |
| [getIndexComponents()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L502) |  | GET | `/api/v3/market/index-components` |
| [getCopyFuturesTradingPairs()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L519) | :closed_lock_with_key:  | GET | `/api/v3/copy/futures/trading-pairs` |
| [getCopyFuturesPositionSummary()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L530) | :closed_lock_with_key:  | GET | `/api/v3/copy/futures/position-summary` |
| [getBalances()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L545) | :closed_lock_with_key:  | GET | `/api/v3/account/assets` |
| [getFundingAssets()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L552) | :closed_lock_with_key:  | GET | `/api/v3/account/funding-assets` |
| [getAccountSettings()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L561) | :closed_lock_with_key:  | GET | `/api/v3/account/settings` |
| [setLeverage()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L568) | :closed_lock_with_key:  | POST | `/api/v3/account/set-leverage` |
| [setHoldMode()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L575) | :closed_lock_with_key:  | POST | `/api/v3/account/set-hold-mode` |
| [getFinancialRecords()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L584) | :closed_lock_with_key:  | GET | `/api/v3/account/financial-records` |
| [getRepayableCoins()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L596) | :closed_lock_with_key:  | GET | `/api/v3/account/repayable-coins` |
| [getPaymentCoins()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L608) | :closed_lock_with_key:  | GET | `/api/v3/account/payment-coins` |
| [submitRepay()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L620) | :closed_lock_with_key:  | POST | `/api/v3/account/repay` |
| [getConvertRecords()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L627) | :closed_lock_with_key:  | GET | `/api/v3/account/convert-records` |
| [setDepositAccount()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L642) | :closed_lock_with_key:  | POST | `/api/v3/account/deposit-account` |
| [switchDeduct()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L651) | :closed_lock_with_key:  | POST | `/api/v3/account/switch-deduct` |
| [getDeductInfo()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L658) | :closed_lock_with_key:  | GET | `/api/v3/account/deduct-info` |
| [getFeeRate()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L669) | :closed_lock_with_key:  | GET | `/api/v3/account/fee-rate` |
| [getMaxTransferable()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L685) | :closed_lock_with_key:  | GET | `/api/v3/account/max-transferable` |
| [getOpenInterestLimit()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L697) | :closed_lock_with_key:  | GET | `/api/v3/account/open-interest-limit` |
| [downgradeAccountToClassic()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L712) | :closed_lock_with_key:  | POST | `/api/v3/account/switch` |
| [getUnifiedAccountSwitchStatus()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L720) | :closed_lock_with_key:  | GET | `/api/v3/account/switch-status` |
| [getTaxRecords()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L736) | :closed_lock_with_key:  | GET | `/api/v3/tax/records` |
| [createSubAccount()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L751) | :closed_lock_with_key:  | POST | `/api/v3/user/create-sub` |
| [freezeSubAccount()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L760) | :closed_lock_with_key:  | POST | `/api/v3/user/freeze-sub` |
| [getSubUnifiedAssets()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L769) | :closed_lock_with_key:  | GET | `/api/v3/account/sub-unified-assets` |
| [getSubAccountList()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L778) | :closed_lock_with_key:  | GET | `/api/v3/user/sub-list` |
| [createSubAccountApiKey()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L791) | :closed_lock_with_key:  | POST | `/api/v3/user/create-sub-api` |
| [updateSubAccountApiKey()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L800) | :closed_lock_with_key:  | POST | `/api/v3/user/update-sub-api` |
| [deleteSubAccountApiKey()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L809) | :closed_lock_with_key:  | POST | `/api/v3/user/delete-sub-api` |
| [getSubAccountApiKeys()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L818) | :closed_lock_with_key:  | GET | `/api/v3/user/sub-api-list` |
| [getTransferableCoins()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L837) | :closed_lock_with_key:  | GET | `/api/v3/account/transferable-coins` |
| [submitTransfer()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L846) | :closed_lock_with_key:  | POST | `/api/v3/account/transfer` |
| [subAccountTransfer()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L855) | :closed_lock_with_key:  | POST | `/api/v3/account/sub-transfer` |
| [getSubTransferRecords()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L867) | :closed_lock_with_key:  | GET | `/api/v3/account/sub-transfer-record` |
| [getDepositAddress()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L885) | :closed_lock_with_key:  | GET | `/api/v3/account/deposit-address` |
| [getSubDepositAddress()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L894) | :closed_lock_with_key:  | GET | `/api/v3/account/sub-deposit-address` |
| [getDepositRecords()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L903) | :closed_lock_with_key:  | GET | `/api/v3/account/deposit-records` |
| [getSubDepositRecords()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L912) | :closed_lock_with_key:  | POST | `/api/v3/account/sub-deposit-records` |
| [submitWithdraw()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L927) | :closed_lock_with_key:  | POST | `/api/v3/account/withdraw` |
| [getWithdrawRecords()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L936) | :closed_lock_with_key:  | GET | `/api/v3/account/withdrawal-records` |
| [submitNewOrder()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L951) | :closed_lock_with_key:  | POST | `/api/v3/trade/place-order` |
| [modifyOrder()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L960) | :closed_lock_with_key:  | POST | `/api/v3/trade/modify-order` |
| [cancelOrder()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L969) | :closed_lock_with_key:  | POST | `/api/v3/trade/cancel-order` |
| [placeBatchOrders()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L978) | :closed_lock_with_key:  | POST | `/api/v3/trade/place-batch` |
| [batchModifyOrders()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L987) | :closed_lock_with_key:  | POST | `/api/v3/trade/batch-modify-order` |
| [cancelBatchOrders()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L996) | :closed_lock_with_key:  | POST | `/api/v3/trade/cancel-batch` |
| [cancelAllOrders()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1005) | :closed_lock_with_key:  | POST | `/api/v3/trade/cancel-symbol-order` |
| [closeAllPositions()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1014) | :closed_lock_with_key:  | POST | `/api/v3/trade/close-positions` |
| [getOrderInfo()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1023) | :closed_lock_with_key:  | GET | `/api/v3/trade/order-info` |
| [getUnfilledOrders()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1032) | :closed_lock_with_key:  | GET | `/api/v3/trade/unfilled-orders` |
| [getHistoryOrders()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1044) | :closed_lock_with_key:  | GET | `/api/v3/trade/history-orders` |
| [getTradeFills()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1056) | :closed_lock_with_key:  | GET | `/api/v3/trade/fills` |
| [getCurrentPosition()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1068) | :closed_lock_with_key:  | GET | `/api/v3/position/current-position` |
| [getPositionHistory()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1079) | :closed_lock_with_key:  | GET | `/api/v3/position/history-position` |
| [getMaxOpenAvailable()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1091) | :closed_lock_with_key:  | POST | `/api/v3/account/max-open-available` |
| [getPositionAdlRank()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1100) | :closed_lock_with_key:  | GET | `/api/v3/position/adlRank` |
| [countdownCancelAll()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1107) | :closed_lock_with_key:  | POST | `/api/v3/trade/countdown-cancel-all` |
| [getLoanTransfered()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1122) | :closed_lock_with_key:  | GET | `/api/v3/ins-loan/transfered` |
| [getLoanSymbols()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1131) | :closed_lock_with_key:  | GET | `/api/v3/ins-loan/symbols` |
| [getLoanRiskUnit()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1140) | :closed_lock_with_key:  | GET | `/api/v3/ins-loan/risk-unit` |
| [getLoanRepaidHistory()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1151) | :closed_lock_with_key:  | GET | `/api/v3/ins-loan/repaid-history` |
| [getLoanProductInfo()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1160) | :closed_lock_with_key:  | GET | `/api/v3/ins-loan/product-infos` |
| [getLoanOrder()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1169) | :closed_lock_with_key:  | GET | `/api/v3/ins-loan/loan-order` |
| [getLoanLTVConvert()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1178) | :closed_lock_with_key:  | GET | `/api/v3/ins-loan/ltv-convert` |
| [getLoanMarginCoinInfo()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1187) | :closed_lock_with_key:  | GET | `/api/v3/ins-loan/ensure-coins-convert` |
| [bindLoanUid()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1199) | :closed_lock_with_key:  | POST | `/api/v3/ins-loan/bind-uid` |
| [getLoanCoins()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1214) | :closed_lock_with_key:  | GET | `/api/v3/loan/coins` |
| [getLoanInterest()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1223) | :closed_lock_with_key:  | GET | `/api/v3/loan/interest` |
| [loanBorrow()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1232) | :closed_lock_with_key:  | POST | `/api/v3/loan/borrow` |
| [getLoanBorrowOngoing()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1241) | :closed_lock_with_key:  | GET | `/api/v3/loan/borrow-ongoing` |
| [getLoanBorrowHistory()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1250) | :closed_lock_with_key:  | GET | `/api/v3/loan/borrow-history` |
| [loanRepay()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1259) | :closed_lock_with_key:  | POST | `/api/v3/loan/repay` |
| [getLoanRepayHistory()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1268) | :closed_lock_with_key:  | GET | `/api/v3/loan/repay-history` |
| [loanRevisePledge()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1277) | :closed_lock_with_key:  | POST | `/api/v3/loan/revise-pledge` |
| [getLoanPledgeRateHistory()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1286) | :closed_lock_with_key:  | GET | `/api/v3/loan/pledge-rate-history` |
| [getLoanDebts()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1295) | :closed_lock_with_key:  | GET | `/api/v3/loan/debts` |
| [getLoanReduces()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1302) | :closed_lock_with_key:  | GET | `/api/v3/loan/reduces` |
| [submitStrategyOrder()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1317) | :closed_lock_with_key:  | POST | `/api/v3/trade/place-strategy-order` |
| [modifyStrategyOrder()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1326) | :closed_lock_with_key:  | POST | `/api/v3/trade/modify-strategy-order` |
| [cancelStrategyOrder()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1335) | :closed_lock_with_key:  | POST | `/api/v3/trade/cancel-strategy-order` |
| [getUnfilledStrategyOrders()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1344) | :closed_lock_with_key:  | GET | `/api/v3/trade/unfilled-strategy-orders` |
| [getHistoryStrategyOrders()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1353) | :closed_lock_with_key:  | GET | `/api/v3/trade/history-strategy-orders` |
| [createBrokerSubAccount()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1374) | :closed_lock_with_key:  | POST | `/api/v3/broker/create-sub` |
| [getBrokerSubAccountList()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1386) | :closed_lock_with_key:  | GET | `/api/v3/broker/sub-list` |
| [modifyBrokerSubAccount()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1398) | :closed_lock_with_key:  | POST | `/api/v3/broker/modify-sub` |
| [brokerSubWithdrawal()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1413) | :closed_lock_with_key:  | POST | `/api/v3/broker/sub-withdrawal` |
| [getBrokerSubDepositAddress()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1425) | :closed_lock_with_key:  | POST | `/api/v3/broker/sub-deposit-address` |
| [getBrokerAllSubDepositWithdrawal()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1437) | :closed_lock_with_key:  | GET | `/api/v3/broker/all-sub-deposit-withdrawal` |
| [getBrokerCommission()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1449) | :closed_lock_with_key:  | GET | `/api/v3/broker/commission` |
| [createBrokerSubApiKey()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1461) | :closed_lock_with_key:  | POST | `/api/v3/broker/create-sub-apikey` |
| [modifyBrokerSubApiKey()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1473) | :closed_lock_with_key:  | POST | `/api/v3/broker/modify-sub-apikey` |
| [deleteBrokerSubApiKey()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1489) | :closed_lock_with_key:  | POST | `/api/v3/broker/delete-sub-apikey` |
| [getBrokerSubApiKey()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1501) | :closed_lock_with_key:  | GET | `/api/v3/broker/query-sub-apikey` |
| [getEarnEliteProducts()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1513) | :closed_lock_with_key:  | GET | `/api/v3/earn/elite-product` |
| [getEarnEliteAssets()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1517) | :closed_lock_with_key:  | GET | `/api/v3/earn/elite-assets` |
| [getEarnEliteRecords()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1521) | :closed_lock_with_key:  | GET | `/api/v3/earn/elite-records` |
| [getEarnEliteSubscribeInfo()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1527) | :closed_lock_with_key:  | GET | `/api/v3/earn/elite-subscribe-info` |
| [subscribeEarnElite()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1533) | :closed_lock_with_key:  | POST | `/api/v3/earn/elite-subscribe` |
| [getEarnEliteSubscribeResult()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1539) | :closed_lock_with_key:  | GET | `/api/v3/earn/elite-subscribe-result` |
| [getEarnEliteRedeemInfo()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1545) | :closed_lock_with_key:  | GET | `/api/v3/earn/elite-redeem-info` |
| [redeemEarnElite()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1551) | :closed_lock_with_key:  | POST | `/api/v3/earn/elite-redeem` |

# websocket-api-client.ts

This table includes all endpoints from the official Exchange API docs and corresponding SDK functions for each endpoint that are found in [websocket-api-client.ts](/src/websocket-api-client.ts). 

This client provides WebSocket API endpoints which allow for faster interactions with the Bitget API via a WebSocket connection.

| Function | AUTH | HTTP Method | Endpoint |
| -------- | :------: | :------: | -------- |
| [submitNewOrder()](https://github.com/tiagosiebler/bitget-api/blob/master/src/websocket-api-client.ts#L79) |  | WS | `place-order` |
| [placeBatchOrders()](https://github.com/tiagosiebler/bitget-api/blob/master/src/websocket-api-client.ts#L98) |  | WS | `batch-place` |
| [cancelOrder()](https://github.com/tiagosiebler/bitget-api/blob/master/src/websocket-api-client.ts#L122) |  | WS | `cancel-order` |
| [cancelBatchOrders()](https://github.com/tiagosiebler/bitget-api/blob/master/src/websocket-api-client.ts#L141) |  | WS | `batch-cancel` |