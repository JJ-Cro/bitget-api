
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
| [getAnnouncements()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L482) |  | GET | `/api/v2/public/annoucements` |
| [getServerTime()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L494) |  | GET | `/api/v2/public/time` |
| [getTradeRate()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L502) | :closed_lock_with_key:  | GET | `/api/v2/common/trade-rate` |
| [getSpotTransactionRecords()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L517) | :closed_lock_with_key:  | GET | `/api/v2/tax/spot-record` |
| [getFuturesTransactionRecords()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L523) | :closed_lock_with_key:  | GET | `/api/v2/tax/future-record` |
| [getMarginTransactionRecords()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L529) | :closed_lock_with_key:  | GET | `/api/v2/tax/margin-record` |
| [getP2PTransactionRecords()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L535) | :closed_lock_with_key:  | GET | `/api/v2/tax/p2p-record` |
| [getP2PMerchantList()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L547) | :closed_lock_with_key:  | GET | `/api/v2/p2p/merchantList` |
| [getP2PMerchantInfo()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L556) | :closed_lock_with_key:  | GET | `/api/v2/p2p/merchantInfo` |
| [getP2PMerchantOrders()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L560) | :closed_lock_with_key:  | GET | `/api/v2/p2p/orderList` |
| [getP2PMerchantAdvertisementList()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L569) | :closed_lock_with_key:  | GET | `/api/v2/p2p/advList` |
| [getSpotWhaleNetFlowData()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L586) | :closed_lock_with_key:  | GET | `/api/v2/spot/market/whale-net-flow` |
| [getFuturesActiveTakerBuySellVolumeData()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L592) |  | GET | `/api/v2/mix/market/taker-buy-sell` |
| [getFuturesActiveLongShortPositionData()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L599) |  | GET | `/api/v2/mix/market/position-long-short` |
| [getFuturesLongShortRatio()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L606) |  | GET | `/api/v2/mix/market/long-short-ratio` |
| [getMarginLoanGrowthRate()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L614) |  | GET | `/api/v2/mix/market/loan-growth` |
| [getIsolatedMarginBorrowingRatio()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L622) |  | GET | `/api/v2/mix/market/isolated-borrow-rate` |
| [getFuturesActiveBuySellVolumeData()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L629) |  | GET | `/api/v2/mix/market/long-short` |
| [getSpotFundFlow()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L636) |  | GET | `/api/v2/spot/market/fund-flow` |
| [getTradeDataSupportSymbols()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L643) |  | GET | `/api/v2/spot/market/support-symbols` |
| [getSpotFundNetFlowData()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L652) |  | GET | `/api/v2/spot/market/fund-net-flow` |
| [getFuturesActiveLongShortAccountData()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L663) |  | GET | `/api/v2/mix/market/account-long-short` |
| [createVirtualSubaccount()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L676) | :closed_lock_with_key:  | POST | `/api/v2/user/create-virtual-subaccount` |
| [modifyVirtualSubaccount()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L682) | :closed_lock_with_key:  | POST | `/api/v2/user/modify-virtual-subaccount` |
| [batchCreateVirtualSubaccountAndAPIKey()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L690) | :closed_lock_with_key:  | POST | `/api/v2/user/batch-create-subaccount-and-apikey` |
| [getVirtualSubaccounts()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L699) | :closed_lock_with_key:  | GET | `/api/v2/user/virtual-subaccount-list` |
| [createVirtualSubaccountAPIKey()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L712) | :closed_lock_with_key:  | POST | `/api/v2/user/create-virtual-subaccount-apikey` |
| [modifyVirtualSubaccountAPIKey()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L721) | :closed_lock_with_key:  | POST | `/api/v2/user/modify-virtual-subaccount-apikey` |
| [getVirtualSubaccountAPIKeys()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L730) | :closed_lock_with_key:  | GET | `/api/v2/user/virtual-subaccount-apikey-list` |
| [createAgentSubaccount()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L743) | :closed_lock_with_key:  | POST | `/api/v2/user/create-agent-subaccount` |
| [getFundingAssets()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L754) | :closed_lock_with_key:  | GET | `/api/v2/account/funding-assets` |
| [getBotAccount()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L760) | :closed_lock_with_key:  | GET | `/api/v2/account/bot-assets` |
| [getBalances()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L767) | :closed_lock_with_key:  | GET | `/api/v2/account/all-account-balance` |
| [getConvertCoins()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L784) | :closed_lock_with_key:  | GET | `/api/v2/convert/currencies` |
| [getConvertQuotedPrice()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L788) | :closed_lock_with_key:  | GET | `/api/v2/convert/quoted-price` |
| [convert()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L794) | :closed_lock_with_key:  | POST | `/api/v2/convert/trade` |
| [getConvertHistory()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L800) | :closed_lock_with_key:  | GET | `/api/v2/convert/convert-record` |
| [getConvertBGBCoins()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L815) | :closed_lock_with_key:  | GET | `/api/v2/convert/bgb-convert-coin-list` |
| [convertBGB()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L823) | :closed_lock_with_key:  | POST | `/api/v2/convert/bgb-convert` |
| [getConvertBGBHistory()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L829) | :closed_lock_with_key:  | GET | `/api/v2/convert/bgb-convert-records` |
| [getSpotCoinInfo()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L849) | :closed_lock_with_key:  | GET | `/api/v2/spot/public/coins` |
| [getSpotSymbolInfo()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L855) | :closed_lock_with_key:  | GET | `/api/v2/spot/public/symbols` |
| [getSpotVIPFeeRate()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L861) | :closed_lock_with_key:  | GET | `/api/v2/spot/market/vip-fee-rate` |
| [getSpotTicker()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L865) | :closed_lock_with_key:  | GET | `/api/v2/spot/market/tickers` |
| [getSpotMergeDepth()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L871) | :closed_lock_with_key:  | GET | `/api/v2/spot/market/merge-depth` |
| [getSpotOrderBookDepth()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L879) | :closed_lock_with_key:  | GET | `/api/v2/spot/market/orderbook` |
| [getSpotCandles()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L887) | :closed_lock_with_key:  | GET | `/api/v2/spot/market/candles` |
| [getSpotHistoricCandles()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L893) | :closed_lock_with_key:  | GET | `/api/v2/spot/market/history-candles` |
| [getSpotRecentTrades()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L899) | :closed_lock_with_key:  | GET | `/api/v2/spot/market/fills` |
| [getSpotHistoricTrades()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L906) | :closed_lock_with_key:  | GET | `/api/v2/spot/market/fills-history` |
| [spotSubmitOrder()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L918) | :closed_lock_with_key:  | POST | `/api/v2/spot/trade/place-order` |
| [spotCancelandSubmitOrder()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L927) | :closed_lock_with_key:  | POST | `/api/v2/spot/trade/cancel-replace-order` |
| [spotBatchCancelandSubmitOrder()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L933) | :closed_lock_with_key:  | POST | `/api/v2/spot/trade/batch-cancel-replace-order` |
| [spotCancelOrder()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L942) | :closed_lock_with_key:  | POST | `/api/v2/spot/trade/cancel-order` |
| [spotBatchSubmitOrders()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L951) | :closed_lock_with_key:  | POST | `/api/v2/spot/trade/batch-orders` |
| [spotBatchCancelOrders()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L957) | :closed_lock_with_key:  | POST | `/api/v2/spot/trade/batch-cancel-order` |
| [spotCancelSymbolOrder()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L963) | :closed_lock_with_key:  | POST | `/api/v2/spot/trade/cancel-symbol-order` |
| [getSpotOrder()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L971) | :closed_lock_with_key:  | GET | `/api/v2/spot/trade/orderInfo` |
| [getSpotOpenOrders()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L977) | :closed_lock_with_key:  | GET | `/api/v2/spot/trade/unfilled-orders` |
| [getSpotHistoricOrders()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L983) | :closed_lock_with_key:  | GET | `/api/v2/spot/trade/history-orders` |
| [getSpotFills()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L989) | :closed_lock_with_key:  | GET | `/api/v2/spot/trade/fills` |
| [spotSubmitPlanOrder()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1001) | :closed_lock_with_key:  | POST | `/api/v2/spot/trade/place-plan-order` |
| [spotModifyPlanOrder()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1010) | :closed_lock_with_key:  | POST | `/api/v2/spot/trade/modify-plan-order` |
| [spotCancelPlanOrder()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1019) | :closed_lock_with_key:  | POST | `/api/v2/spot/trade/cancel-plan-order` |
| [getSpotCurrentPlanOrders()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1030) | :closed_lock_with_key:  | GET | `/api/v2/spot/trade/current-plan-order` |
| [getSpotPlanSubOrder()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1040) | :closed_lock_with_key:  | GET | `/api/v2/spot/trade/plan-sub-order` |
| [getSpotHistoricPlanOrders()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1046) | :closed_lock_with_key:  | GET | `/api/v2/spot/trade/history-plan-order` |
| [spotCancelPlanOrders()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1056) | :closed_lock_with_key:  | POST | `/api/v2/spot/trade/batch-cancel-plan-order` |
| [getSpotAccount()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1071) | :closed_lock_with_key:  | GET | `/api/v2/spot/account/info` |
| [getSpotAccountAssets()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1075) | :closed_lock_with_key:  | GET | `/api/v2/spot/account/assets` |
| [getSpotSubAccountAssets()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1082) | :closed_lock_with_key:  | GET | `/api/v2/spot/account/subaccount-assets` |
| [spotModifyDepositAccount()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1086) | :closed_lock_with_key:  | POST | `/api/v2/spot/wallet/modify-deposit-account` |
| [getSpotAccountBills()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1096) | :closed_lock_with_key:  | GET | `/api/v2/spot/account/bills` |
| [spotTransfer()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1102) | :closed_lock_with_key:  | POST | `/api/v2/spot/wallet/transfer` |
| [getSpotTransferableCoins()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1111) | :closed_lock_with_key:  | GET | `/api/v2/spot/wallet/transfer-coin-info` |
| [spotSubTransfer()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1118) | :closed_lock_with_key:  | POST | `/api/v2/spot/wallet/subaccount-transfer` |
| [spotWithdraw()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1127) | :closed_lock_with_key:  | POST | `/api/v2/spot/wallet/withdrawal` |
| [getSpotMainSubTransferRecord()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1136) | :closed_lock_with_key:  | GET | `/api/v2/spot/account/sub-main-trans-record` |
| [getSpotTransferHistory()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1145) | :closed_lock_with_key:  | GET | `/api/v2/spot/account/transferRecords` |
| [spotSwitchBGBDeduct()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1151) | :closed_lock_with_key:  | POST | `/api/v2/spot/account/switch-deduct` |
| [getSpotDepositAddress()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1157) | :closed_lock_with_key:  | GET | `/api/v2/spot/wallet/deposit-address` |
| [getSpotSubDepositAddress()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1165) | :closed_lock_with_key:  | GET | `/api/v2/spot/wallet/subaccount-deposit-address` |
| [getSpotBGBDeductInfo()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1177) | :closed_lock_with_key:  | GET | `/api/v2/spot/account/deduct-info` |
| [spotCancelWithdrawal()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1185) | :closed_lock_with_key:  | POST | `/api/v2/spot/wallet/cancel-withdrawal` |
| [getSubAccountDepositRecords()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1191) | :closed_lock_with_key:  | GET | `/api/v2/spot/wallet/subaccount-deposit-records` |
| [getSpotWithdrawalHistory()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1200) | :closed_lock_with_key:  | GET | `/api/v2/spot/wallet/withdrawal-records` |
| [getSpotDepositHistory()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1206) | :closed_lock_with_key:  | GET | `/api/v2/spot/wallet/deposit-records` |
| [upgradeToUnifiedAccount()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1221) | :closed_lock_with_key:  | POST | `/api/v2/spot/account/upgrade` |
| [getUnifiedAccountSwitchStatus()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1231) | :closed_lock_with_key:  | GET | `/api/v2/spot/account/upgrade-status` |
| [getFuturesVIPFeeRate()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1253) |  | GET | `/api/v2/mix/market/vip-fee-rate` |
| [getFuturesInterestRateHistory()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1257) |  | GET | `/api/v2/mix/market/union-interest-rate-history` |
| [getFuturesInterestExchangeRate()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1266) |  | GET | `/api/v2/mix/market/exchange-rate` |
| [getFuturesDiscountRate()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1277) |  | GET | `/api/v2/mix/market/discount-rate` |
| [getFuturesMergeDepth()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1281) |  | GET | `/api/v2/mix/market/merge-depth` |
| [getFuturesTicker()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1287) |  | GET | `/api/v2/mix/market/ticker` |
| [getFuturesAllTickers()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1294) |  | GET | `/api/v2/mix/market/tickers` |
| [getFuturesRecentTrades()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1300) |  | GET | `/api/v2/mix/market/fills` |
| [getFuturesHistoricTrades()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1306) |  | GET | `/api/v2/mix/market/fills-history` |
| [getFuturesCandles()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1312) |  | GET | `/api/v2/mix/market/candles` |
| [getFuturesHistoricCandles()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1318) |  | GET | `/api/v2/mix/market/history-candles` |
| [getFuturesHistoricIndexPriceCandles()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1324) |  | GET | `/api/v2/mix/market/history-index-candles` |
| [getFuturesHistoricMarkPriceCandles()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1330) |  | GET | `/api/v2/mix/market/history-mark-candles` |
| [getFuturesOpenInterest()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1336) |  | GET | `/api/v2/mix/market/open-interest` |
| [getFuturesNextFundingTime()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1348) |  | GET | `/api/v2/mix/market/funding-time` |
| [getFuturesSymbolPrice()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1355) |  | GET | `/api/v2/mix/market/symbol-price` |
| [getFuturesHistoricFundingRates()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1362) |  | GET | `/api/v2/mix/market/history-fund-rate` |
| [getFuturesCurrentFundingRate()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1371) |  | GET | `/api/v2/mix/market/current-fund-rate` |
| [getFuturesContractConfig()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1389) |  | GET | `/api/v2/mix/market/contracts` |
| [getFuturesAccountAsset()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1402) | :closed_lock_with_key:  | GET | `/api/v2/mix/account/account` |
| [getFuturesAccountAssets()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1408) | :closed_lock_with_key:  | GET | `/api/v2/mix/account/accounts` |
| [getFuturesSubAccountAssets()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1414) | :closed_lock_with_key:  | GET | `/api/v2/mix/account/sub-account-assets` |
| [getFuturesInterestHistory()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1427) | :closed_lock_with_key:  | GET | `/api/v2/mix/account/interest-history` |
| [getFuturesOpenCount()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1433) | :closed_lock_with_key:  | GET | `/api/v2/mix/account/open-count` |
| [setFuturesPositionAutoMargin()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1441) | :closed_lock_with_key:  | POST | `/api/v2/mix/account/set-auto-margin` |
| [setFuturesLeverage()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1447) | :closed_lock_with_key:  | POST | `/api/v2/mix/account/set-leverage` |
| [setFuturesPositionMargin()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1453) | :closed_lock_with_key:  | POST | `/api/v2/mix/account/set-margin` |
| [setFuturesAssetMode()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1459) | :closed_lock_with_key:  | POST | `/api/v2/mix/account/set-asset-mode` |
| [setFuturesMarginMode()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1466) | :closed_lock_with_key:  | POST | `/api/v2/mix/account/set-margin-mode` |
| [setFuturesPositionMode()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1472) | :closed_lock_with_key:  | POST | `/api/v2/mix/account/set-position-mode` |
| [getFuturesAccountBills()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1483) | :closed_lock_with_key:  | GET | `/api/v2/mix/account/bill` |
| [getUnionTransferLimits()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1498) | :closed_lock_with_key:  | GET | `/api/v2/mix/account/transfer-limits` |
| [getUnionConfig()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1510) | :closed_lock_with_key:  | GET | `/api/v2/mix/account/union-config` |
| [getSwitchUnionUsdt()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1520) | :closed_lock_with_key:  | GET | `/api/v2/mix/account/switch-union-usdt` |
| [unionConvert()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1530) | :closed_lock_with_key:  | POST | `/api/v2/mix/account/union-convert` |
| [getFuturesMaxOpenableQuantity()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1542) | :closed_lock_with_key:  | GET | `/api/v2/mix/account/max-open` |
| [getFuturesLiquidationPrice()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1554) | :closed_lock_with_key:  | GET | `/api/v2/mix/account/liq-price` |
| [getFuturesIsolatedSymbols()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1566) | :closed_lock_with_key:  | GET | `/api/v2/mix/account/isolated-symbols` |
| [getFuturesPositionTier()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1578) |  | GET | `/api/v2/mix/market/query-position-lever` |
| [getFuturesPosition()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1585) | :closed_lock_with_key:  | GET | `/api/v2/mix/position/single-position` |
| [getFuturesPositions()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1593) | :closed_lock_with_key:  | GET | `/api/v2/mix/position/all-position` |
| [getFuturesHistoricPositions()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1600) | :closed_lock_with_key:  | GET | `/api/v2/mix/position/history-position` |
| [futuresSubmitOrder()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1617) | :closed_lock_with_key:  | POST | `/api/v2/mix/order/place-order` |
| [futuresSubmitReversal()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1626) | :closed_lock_with_key:  | POST | `/api/v2/mix/order/click-backhand` |
| [futuresBatchSubmitOrders()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1635) | :closed_lock_with_key:  | POST | `/api/v2/mix/order/batch-place-order` |
| [futuresModifyOrder()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1641) | :closed_lock_with_key:  | POST | `/api/v2/mix/order/modify-order` |
| [futuresCancelOrder()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1650) | :closed_lock_with_key:  | POST | `/api/v2/mix/order/cancel-order` |
| [futuresBatchCancelOrders()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1659) | :closed_lock_with_key:  | POST | `/api/v2/mix/order/batch-cancel-orders` |
| [futuresFlashClosePositions()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1665) | :closed_lock_with_key:  | POST | `/api/v2/mix/order/close-positions` |
| [getFuturesOrder()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1671) | :closed_lock_with_key:  | GET | `/api/v2/mix/order/detail` |
| [getFuturesFills()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1677) | :closed_lock_with_key:  | GET | `/api/v2/mix/order/fills` |
| [getFuturesHistoricOrderFills()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1686) | :closed_lock_with_key:  | GET | `/api/v2/mix/order/fill-history` |
| [getFuturesOpenOrders()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1697) | :closed_lock_with_key:  | GET | `/api/v2/mix/order/orders-pending` |
| [getFuturesHistoricOrders()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1706) | :closed_lock_with_key:  | GET | `/api/v2/mix/order/orders-history` |
| [futuresCancelAllOrders()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1715) | :closed_lock_with_key:  | POST | `/api/v2/mix/order/cancel-all-orders` |
| [getFuturesTriggerSubOrder()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1727) | :closed_lock_with_key:  | GET | `/api/v2/mix/order/plan-sub-order` |
| [futuresSubmitTPSLOrder()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1735) | :closed_lock_with_key:  | POST | `/api/v2/mix/order/place-tpsl-order` |
| [futuresSubmitPlanOrder()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1744) | :closed_lock_with_key:  | POST | `/api/v2/mix/order/place-plan-order` |
| [futuresModifyTPSLPOrder()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1753) | :closed_lock_with_key:  | POST | `/api/v2/mix/order/modify-tpsl-order` |
| [futuresModifyPlanOrder()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1762) | :closed_lock_with_key:  | POST | `/api/v2/mix/order/modify-plan-order` |
| [getFuturesPlanOrders()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1771) | :closed_lock_with_key:  | GET | `/api/v2/mix/order/orders-plan-pending` |
| [futuresCancelPlanOrder()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1780) | :closed_lock_with_key:  | POST | `/api/v2/mix/order/cancel-plan-order` |
| [getFuturesHistoricPlanOrders()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1786) | :closed_lock_with_key:  | GET | `/api/v2/mix/order/orders-plan-history` |
| [modifySubaccountEmail()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1811) | :closed_lock_with_key:  | POST | `/api/v2/broker/account/modify-subaccount-email` |
| [getBrokerInfo()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1821) | :closed_lock_with_key:  | GET | `/api/v2/broker/account/info` |
| [createSubaccount()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1831) | :closed_lock_with_key:  | POST | `/api/v2/broker/account/create-subaccount` |
| [getSubaccounts()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1838) | :closed_lock_with_key:  | GET | `/api/v2/broker/account/subaccount-list` |
| [modifySubaccount()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1848) | :closed_lock_with_key:  | POST | `/api/v2/broker/account/modify-subaccount` |
| [getSubaccountEmail()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1854) | :closed_lock_with_key:  | GET | `/api/v2/broker/account/subaccount-email` |
| [getSubaccountSpotAssets()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1860) | :closed_lock_with_key:  | GET | `/api/v2/broker/account/subaccount-spot-assets` |
| [getSubaccountFuturesAssets()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1875) | :closed_lock_with_key:  | GET | `/api/v2/broker/account/subaccount-future-assets` |
| [createSubaccountDepositAddress()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1889) | :closed_lock_with_key:  | POST | `/api/v2/broker/account/subaccount-address` |
| [subaccountWithdrawal()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1900) | :closed_lock_with_key:  | POST | `/api/v2/broker/account/subaccount-withdrawal` |
| [subaccountSetAutoTransfer()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1912) | :closed_lock_with_key:  | POST | `/api/v2/broker/account/set-subaccount-autotransfer` |
| [subaccountDepositRecords()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1928) | :closed_lock_with_key:  | GET | `/api/v2/broker/subaccount-deposit` |
| [subaccountWithdrawalRecords()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1939) | :closed_lock_with_key:  | GET | `/api/v2/broker/subaccount-withdrawal` |
| [createSubaccountApiKey()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1954) | :closed_lock_with_key:  | POST | `/api/v2/broker/manage/create-subaccount-apikey` |
| [getSubaccountApiKey()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1963) | :closed_lock_with_key:  | GET | `/api/v2/broker/manage/subaccount-apikey-list` |
| [modifySubaccountApiKey()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1972) | :closed_lock_with_key:  | POST | `/api/v2/broker/manage/modify-subaccount-apikey` |
| [getAllSubDepositWithdrawalRecords()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L1988) | :closed_lock_with_key:  | GET | `/api/v2/broker/all-sub-deposit-withdrawal` |
| [getBrokerSubaccounts()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2005) | :closed_lock_with_key:  | GET | `/api/v2/broker/subaccounts` |
| [getBrokerCommissions()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2017) | :closed_lock_with_key:  | GET | `/api/v2/broker/commissions` |
| [getBrokerTradeVolume()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2029) | :closed_lock_with_key:  | GET | `/api/v2/broker/trade-volume` |
| [getBrokerTotalCommission()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2049) | :closed_lock_with_key:  | GET | `/api/v2/broker/total-commission` |
| [getBrokerOrderCommission()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2071) | :closed_lock_with_key:  | GET | `/api/v2/broker/order-commission` |
| [getBrokerRebateInfo()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2084) | :closed_lock_with_key:  | GET | `/api/v2/broker/rebate-info` |
| [getAgentCustomerCommissions()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2096) | :closed_lock_with_key:  | GET | `/api/v2/broker/customer-commissions` |
| [getAgentSubCustomerList()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2105) | :closed_lock_with_key:  | GET | `/api/v2/broker/sub-customer-list` |
| [getAgentCustomerTradeVolume()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2111) | :closed_lock_with_key:  | POST | `/api/v2/broker/customer-trade-volume` |
| [getAgentCustomerList()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2120) | :closed_lock_with_key:  | POST | `/api/v2/broker/customer-list` |
| [getAgentCustomerKycResult()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2126) | :closed_lock_with_key:  | GET | `/api/v2/broker/customer-kyc-result` |
| [getAgentCustomerDeposits()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2132) | :closed_lock_with_key:  | POST | `/api/v2/broker/customer-deposit` |
| [getAgentCustomerAssets()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2138) | :closed_lock_with_key:  | POST | `/api/v2/broker/customer-asset` |
| [getAgentCommissionDetail()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2144) | :closed_lock_with_key:  | GET | `/api/v2/broker/agent-commission` |
| [getMarginCurrencies()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2164) |  | GET | `/api/v2/margin/currencies` |
| [getMarginBorrowHistory()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2174) | :closed_lock_with_key:  | GET | `/api/v2/margin/${marginType}/borrow-history` |
| [getMarginRepayHistory()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2191) | :closed_lock_with_key:  | GET | `/api/v2/margin/${marginType}/repay-history` |
| [getMarginInterestHistory()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2208) | :closed_lock_with_key:  | GET | `/api/v2/margin/${marginType}/interest-history` |
| [getMarginLiquidationHistory()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2225) | :closed_lock_with_key:  | GET | `/api/v2/margin/${marginType}/liquidation-history` |
| [getMarginFinancialHistory()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2242) | :closed_lock_with_key:  | GET | `/api/v2/margin/${marginType}/financial-records` |
| [getMarginAccountAssets()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2265) | :closed_lock_with_key:  | GET | `/api/v2/margin/${marginType}/account/assets` |
| [marginBorrow()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2276) | :closed_lock_with_key:  | POST | `/api/v2/margin/${marginType}/account/borrow` |
| [marginRepay()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2299) | :closed_lock_with_key:  | POST | `/api/v2/margin/${marginType}/account/repay` |
| [getMarginRiskRate()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2324) | :closed_lock_with_key:  | GET | `/api/v2/margin/${marginType}/account/risk-rate` |
| [getMarginMaxBorrowable()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2336) | :closed_lock_with_key:  | GET | `/api/v2/margin/${marginType}/account/max-borrowable-amount` |
| [getMarginMaxTransferable()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2349) | :closed_lock_with_key:  | GET | `/api/v2/margin/${marginType}/account/max-transfer-out-amount` |
| [getMarginInterestRateAndMaxBorrowable()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2364) | :closed_lock_with_key:  | GET | `/api/v2/margin/${marginType}/interest-rate-and-limit` |
| [getMarginTierConfiguration()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2380) | :closed_lock_with_key:  | GET | `/api/v2/margin/${marginType}/tier-data` |
| [marginFlashRepay()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2392) | :closed_lock_with_key:  | POST | `/api/v2/margin/${marginType}/account/flash-repay` |
| [getMarginFlashRepayResult()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2410) | :closed_lock_with_key:  | GET | `/api/v2/margin/${marginType}/account/query-flash-repay-status` |
| [marginSubmitOrder()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2434) | :closed_lock_with_key:  | POST | `/api/v2/margin/${marginType}/place-order` |
| [marginBatchSubmitOrders()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2447) | :closed_lock_with_key:  | POST | `/api/v2/margin/${marginType}/batch-place-order` |
| [marginCancelOrder()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2458) | :closed_lock_with_key:  | POST | `/api/v2/margin/${marginType}/cancel-order` |
| [marginBatchCancelOrders()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2478) | :closed_lock_with_key:  | POST | `/api/v2/margin/${marginType}/batch-cancel-order` |
| [getMarginOpenOrders()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2492) | :closed_lock_with_key:  | GET | `/api/v2/margin/${marginType}/open-orders` |
| [getMarginHistoricOrders()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2506) | :closed_lock_with_key:  | GET | `/api/v2/margin/${marginType}/history-orders` |
| [getMarginHistoricOrderFills()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2523) | :closed_lock_with_key:  | GET | `/api/v2/margin/${marginType}/fills` |
| [getMarginLiquidationOrders()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2537) | :closed_lock_with_key:  | GET | `/api/v2/margin/${marginType}/liquidation-order` |
| [getFuturesTraderCurrentOrder()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2569) | :closed_lock_with_key:  | GET | `/api/v2/copy/mix-trader/order-current-track` |
| [getFuturesTraderHistoryOrders()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2578) | :closed_lock_with_key:  | GET | `/api/v2/copy/mix-trader/order-history-track` |
| [modifyFuturesTraderOrderTPSL()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2587) | :closed_lock_with_key:  | POST | `/api/v2/copy/mix-trader/order-modify-tpsl` |
| [getFuturesTraderOrder()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2596) | :closed_lock_with_key:  | GET | `/api/v2/copy/mix-trader/order-total-detail` |
| [getFuturesTraderProfitHistory()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2602) | :closed_lock_with_key:  | GET | `/api/v2/copy/mix-trader/profit-history-summarys` |
| [getFuturesTraderProfitShareHistory()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2608) | :closed_lock_with_key:  | GET | `/api/v2/copy/mix-trader/profit-history-details` |
| [closeFuturesTraderOrder()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2617) | :closed_lock_with_key:  | POST | `/api/v2/copy/mix-trader/order-close-positions` |
| [getFuturesTraderProfitShare()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2636) | :closed_lock_with_key:  | GET | `/api/v2/copy/mix-trader/profit-details` |
| [getFuturesTraderProfitShareGroup()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2652) | :closed_lock_with_key:  | GET | `/api/v2/copy/mix-trader/profits-group-coin-date` |
| [getFuturesTraderSymbolSettings()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2670) | :closed_lock_with_key:  | GET | `/api/v2/copy/mix-trader/config-query-symbols` |
| [updateFuturesTraderSymbolSettings()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2679) | :closed_lock_with_key:  | POST | `/api/v2/copy/mix-trader/config-setting-symbols` |
| [updateFuturesTraderGlobalSettings()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2688) | :closed_lock_with_key:  | POST | `/api/v2/copy/mix-trader/config-settings-base` |
| [getFuturesTraderFollowers()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2699) | :closed_lock_with_key:  | GET | `/api/v2/copy/mix-trader/config-query-followers` |
| [removeFuturesTraderFollower()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2708) | :closed_lock_with_key:  | POST | `/api/v2/copy/mix-trader/config-remove-follower` |
| [getFuturesFollowerCurrentOrders()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2725) | :closed_lock_with_key:  | GET | `/api/v2/copy/mix-follower/query-current-orders` |
| [getFuturesFollowerHistoryOrders()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2734) | :closed_lock_with_key:  | GET | `/api/v2/copy/mix-follower/query-history-orders` |
| [updateFuturesFollowerTPSL()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2743) | :closed_lock_with_key:  | POST | `/api/v2/copy/mix-follower/setting-tpsl` |
| [updateFuturesFollowerSettings()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2749) | :closed_lock_with_key:  | POST | `/api/v2/copy/mix-follower/settings` |
| [getFuturesFollowerSettings()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2755) | :closed_lock_with_key:  | GET | `/api/v2/copy/mix-follower/query-settings` |
| [closeFuturesFollowerPositions()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2761) | :closed_lock_with_key:  | POST | `/api/v2/copy/mix-follower/close-positions` |
| [getFuturesFollowerTraders()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2774) | :closed_lock_with_key:  | GET | `/api/v2/copy/mix-follower/query-traders` |
| [getFuturesFollowerFollowLimit()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2780) | :closed_lock_with_key:  | GET | `/api/v2/copy/mix-follower/query-quantity-limit` |
| [unfollowFuturesTrader()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2798) | :closed_lock_with_key:  | POST | `/api/v2/copy/mix-follower/cancel-trader` |
| [getBrokerTraders()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2812) | :closed_lock_with_key:  | GET | `/api/v2/copy/mix-broker/query-traders` |
| [getBrokerTradersHistoricalOrders()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2816) | :closed_lock_with_key:  | GET | `/api/v2/copy/mix-broker/query-history-traces` |
| [getBrokerTradersPendingOrders()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2823) | :closed_lock_with_key:  | GET | `/api/v2/copy/mix-broker/query-current-traces` |
| [getSpotTraderProfit()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2838) | :closed_lock_with_key:  | GET | `/api/v2/copy/spot-trader/profit-summarys` |
| [getSpotTraderHistoryProfit()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2842) | :closed_lock_with_key:  | GET | `/api/v2/copy/spot-trader/profit-history-details` |
| [getSpotTraderUnrealizedProfit()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2851) | :closed_lock_with_key:  | GET | `/api/v2/copy/spot-trader/profit-details` |
| [getSpotTraderOrder()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2859) | :closed_lock_with_key:  | GET | `/api/v2/copy/spot-trader/order-total-detail` |
| [modifySpotTraderOrderTPSL()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2863) | :closed_lock_with_key:  | POST | `/api/v2/copy/spot-trader/order-modify-tpsl` |
| [getSpotTraderHistoryOrders()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2874) | :closed_lock_with_key:  | GET | `/api/v2/copy/spot-trader/order-history-track` |
| [getSpotTraderCurrentOrders()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2883) | :closed_lock_with_key:  | GET | `/api/v2/copy/spot-trader/order-current-track` |
| [sellSpotTrader()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2892) | :closed_lock_with_key:  | POST | `/api/v2/copy/spot-trader/order-close-tracking` |
| [getSpotTraderSymbolSettings()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2902) | :closed_lock_with_key:  | POST | `/api/v2/copy/spot-trader/config-setting-symbols` |
| [removeSpotTraderFollowers()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2912) | :closed_lock_with_key:  | POST | `/api/v2/copy/spot-trader/config-remove-follower` |
| [getSpotTraderConfiguration()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2921) | :closed_lock_with_key:  | GET | `/api/v2/copy/spot-trader/config-query-settings` |
| [getSpotTraderFollowers()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2925) | :closed_lock_with_key:  | GET | `/api/v2/copy/spot-trader/config-query-followers` |
| [cancelSpotFollowerOrder()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2942) | :closed_lock_with_key:  | POST | `/api/v2/copy/spot-follower/stop-order` |
| [updateSpotFollowerSettings()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2948) | :closed_lock_with_key:  | POST | `/api/v2/copy/spot-follower/settings` |
| [updateSpotFollowerTPSL()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2957) | :closed_lock_with_key:  | POST | `/api/v2/copy/spot-follower/setting-tpsl` |
| [getSpotFollowerTraders()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2965) | :closed_lock_with_key:  | GET | `/api/v2/copy/spot-follower/query-traders` |
| [getSpotFollowerCurrentTraderSymbols()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2974) | :closed_lock_with_key:  | GET | `/api/v2/copy/spot-follower/query-trader-symbols` |
| [getSpotFollowerSettings()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2985) | :closed_lock_with_key:  | GET | `/api/v2/copy/spot-follower/query-settings` |
| [getSpotFollowerHistoryOrders()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L2991) | :closed_lock_with_key:  | GET | `/api/v2/copy/spot-follower/query-history-orders` |
| [getSpotFollowerOpenOrders()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L3000) | :closed_lock_with_key:  | GET | `/api/v2/copy/spot-follower/query-current-orders` |
| [sellSpotFollower()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L3009) | :closed_lock_with_key:  | POST | `/api/v2/copy/spot-follower/order-close-tracking` |
| [unfollowSpotTrader()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L3019) | :closed_lock_with_key:  | POST | `/api/v2/copy/spot-follower/cancel-trader` |
| [getEarnSavingsProducts()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L3033) | :closed_lock_with_key:  | GET | `/api/v2/earn/savings/product` |
| [getEarnSavingsAccount()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L3040) | :closed_lock_with_key:  | GET | `/api/v2/earn/savings/account` |
| [getEarnSavingsAssets()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L3044) | :closed_lock_with_key:  | GET | `/api/v2/earn/savings/assets` |
| [getEarnSavingsRecords()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L3050) | :closed_lock_with_key:  | GET | `/api/v2/earn/savings/records` |
| [getEarnSavingsSubscription()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L3056) | :closed_lock_with_key:  | GET | `/api/v2/earn/savings/subscribe-info` |
| [earnSubscribeSavings()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L3063) | :closed_lock_with_key:  | POST | `/api/v2/earn/savings/subscribe` |
| [getEarnSavingsSubscriptionResult()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L3076) | :closed_lock_with_key:  | GET | `/api/v2/earn/savings/subscribe-result` |
| [earnRedeemSavings()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L3088) | :closed_lock_with_key:  | POST | `/api/v2/earn/savings/redeem` |
| [getEarnSavingsRedemptionResult()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L3097) | :closed_lock_with_key:  | GET | `/api/v2/earn/savings/redeem-result` |
| [getEarnAccount()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L3117) | :closed_lock_with_key:  | GET | `/api/v2/earn/account/assets` |
| [getEarnEliteProducts()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L3136) | :closed_lock_with_key:  | GET | `/api/v2/earn/elite/product` |
| [getEarnEliteAssets()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L3140) | :closed_lock_with_key:  | GET | `/api/v2/earn/elite/assets` |
| [getEarnEliteRecords()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L3144) | :closed_lock_with_key:  | GET | `/api/v2/earn/elite/records` |
| [getEarnEliteSubscribeInfo()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L3150) | :closed_lock_with_key:  | GET | `/api/v2/earn/elite/subscribe-info` |
| [subscribeEarnElite()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L3156) | :closed_lock_with_key:  | POST | `/api/v2/earn/elite/subscribe` |
| [getEarnEliteSubscribeResult()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L3162) | :closed_lock_with_key:  | GET | `/api/v2/earn/elite/subscribe-result` |
| [getEarnEliteRedeemInfo()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L3168) | :closed_lock_with_key:  | GET | `/api/v2/earn/elite/redeem-info` |
| [redeemEarnElite()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L3174) | :closed_lock_with_key:  | POST | `/api/v2/earn/elite/redeem` |
| [getSharkfinProducts()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L3188) | :closed_lock_with_key:  | GET | `/api/v2/earn/sharkfin/product` |
| [getSharkfinAccount()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L3196) | :closed_lock_with_key:  | GET | `/api/v2/earn/sharkfin/account` |
| [getSharkfinAssets()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L3200) | :closed_lock_with_key:  | GET | `/api/v2/earn/sharkfin/assets` |
| [getSharkfinRecords()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L3206) | :closed_lock_with_key:  | GET | `/api/v2/earn/sharkfin/records` |
| [getSharkfinSubscription()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L3212) | :closed_lock_with_key:  | GET | `/api/v2/earn/sharkfin/subscribe-info` |
| [subscribeSharkfin()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L3218) | :closed_lock_with_key:  | POST | `/api/v2/earn/sharkfin/subscribe` |
| [getSharkfinSubscriptionResult()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L3227) | :closed_lock_with_key:  | GET | `/api/v2/earn/sharkfin/subscribe-result` |
| [getLoanCurrencies()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L3244) |  | GET | `/api/v2/earn/loan/public/coinInfos` |
| [getLoanEstInterestAndBorrowable()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L3250) |  | GET | `/api/v2/earn/loan/public/hour-interest` |
| [borrowLoan()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L3261) | :closed_lock_with_key:  | POST | `/api/v2/earn/loan/borrow` |
| [getOngoingLoanOrders()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L3269) | :closed_lock_with_key:  | GET | `/api/v2/earn/loan/ongoing-orders` |
| [repayLoan()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L3277) | :closed_lock_with_key:  | POST | `/api/v2/earn/loan/repay` |
| [getRepayHistory()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L3283) | :closed_lock_with_key:  | GET | `/api/v2/earn/loan/repay-history` |
| [updateLoanPledgeRate()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L3289) | :closed_lock_with_key:  | POST | `/api/v2/earn/loan/revise-pledge` |
| [getLoanPledgeRateHistory()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L3299) | :closed_lock_with_key:  | GET | `/api/v2/earn/loan/revise-history` |
| [getLoanHistory()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L3305) | :closed_lock_with_key:  | GET | `/api/v2/earn/loan/borrow-history` |
| [getLoanDebts()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L3311) | :closed_lock_with_key:  | GET | `/api/v2/earn/loan/debts` |
| [getLoanLiquidationRecords()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v2.ts#L3315) | :closed_lock_with_key:  | GET | `/api/v2/earn/loan/reduces` |

# rest-client-v3.ts

This table includes all endpoints from the official Exchange API docs and corresponding SDK functions for each endpoint that are found in [rest-client-v3.ts](/src/rest-client-v3.ts). 

| Function | AUTH | HTTP Method | Endpoint |
| -------- | :------: | :------: | -------- |
| [getServerTime()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L402) |  | GET | `/api/v3/public/time` |
| [getInstruments()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L419) |  | GET | `/api/v3/market/instruments` |
| [getMarketFeeGroup()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L428) |  | GET | `/api/v3/market/fee-group` |
| [getLiquidations()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L437) |  | GET | `/api/v3/market/liquidations` |
| [getRpiSymbols()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L446) |  | GET | `/api/v3/market/rpi-symbols` |
| [getRpiOrderBook()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L453) |  | GET | `/api/v3/market/rpi-orderbook` |
| [getCashDividendRecords()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L462) |  | GET | `/api/v3/market/cash-dividend-records` |
| [getSpotWhaleFlow()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L471) |  | GET | `/api/v3/market/spot-whale-flow` |
| [getSpotFundFlow()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L480) |  | GET | `/api/v3/market/spot-fund-flow` |
| [getSpotNetFlow()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L489) |  | GET | `/api/v3/market/spot-net-flow` |
| [getMarginLongShort()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L498) |  | GET | `/api/v3/market/margin-long-short` |
| [getMarginLoanGrowth()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L507) |  | GET | `/api/v3/market/margin-loan-growth` |
| [getMarginIsolatedBorrow()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L516) |  | GET | `/api/v3/market/margin-isolated-borrow` |
| [getFuturesActiveBuySell()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L525) |  | GET | `/api/v3/market/futures-active-buy-sell` |
| [getFuturesLongShort()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L534) |  | GET | `/api/v3/market/futures-long-short` |
| [getFuturesPositionLongShort()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L543) |  | GET | `/api/v3/market/futures-position-long-short` |
| [getFuturesAccountLongShort()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L552) |  | GET | `/api/v3/market/futures-account-long-short` |
| [getMarketScoreWeights()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L561) |  | GET | `/api/v3/market/score-weights` |
| [getTickers()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L570) |  | GET | `/api/v3/market/tickers` |
| [getOrderBook()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L577) |  | GET | `/api/v3/market/orderbook` |
| [getFills()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L586) |  | GET | `/api/v3/market/fills` |
| [getProofOfReserves()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L595) |  | GET | `/api/v3/market/proof-of-reserves` |
| [getOpenInterest()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L602) |  | GET | `/api/v3/market/open-interest` |
| [getCandles()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L612) |  | GET | `/api/v3/market/candles` |
| [getHistoryCandles()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L621) |  | GET | `/api/v3/market/history-candles` |
| [getCurrentFundingRate()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L630) |  | GET | `/api/v3/market/current-fund-rate` |
| [getHistoryFundingRate()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L639) |  | GET | `/api/v3/market/history-fund-rate` |
| [getRiskReserve()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L648) |  | GET | `/api/v3/market/risk-reserve` |
| [getRiskReserveHour()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L657) |  | GET | `/api/v3/market/risk-reserve-hour` |
| [getRiskReserveAll()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L666) |  | GET | `/api/v3/market/risk-reserve-all` |
| [getDiscountRate()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L675) |  | GET | `/api/v3/market/discount-rate` |
| [getMarginLoans()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L682) |  | GET | `/api/v3/market/margin-loans` |
| [getPositionTier()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L691) |  | GET | `/api/v3/market/position-tier` |
| [getContractsOi()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L700) |  | GET | `/api/v3/market/oi-limit` |
| [getIndexComponents()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L709) |  | GET | `/api/v3/market/index-components` |
| [getCopyFuturesTradingPairs()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L726) | :closed_lock_with_key:  | GET | `/api/v3/copy/futures/trading-pairs` |
| [getCopyFuturesPositionSummary()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L737) | :closed_lock_with_key:  | GET | `/api/v3/copy/futures/position-summary` |
| [getCopyFuturesMaxTransferable()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L747) | :closed_lock_with_key:  | GET | `/api/v3/copy/futures/max-transferable` |
| [copyFuturesTransfer()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L757) | :closed_lock_with_key:  | POST | `/api/v3/copy/futures/transfer` |
| [getCopyFuturesTransferRecords()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L767) | :closed_lock_with_key:  | GET | `/api/v3/copy/futures/transfer-record` |
| [getBalances()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L782) | :closed_lock_with_key:  | GET | `/api/v3/account/assets` |
| [getFundingAssets()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L789) | :closed_lock_with_key:  | GET | `/api/v3/account/funding-assets` |
| [getAccountInfo()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L799) | :closed_lock_with_key:  | GET | `/api/v3/account/info` |
| [getAccountSettings()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L807) | :closed_lock_with_key:  | GET | `/api/v3/account/settings` |
| [adjustAccountMode()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L814) | :closed_lock_with_key:  | POST | `/api/v3/account/adjust-account-mode` |
| [getDeltaInfo()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L824) | :closed_lock_with_key:  | GET | `/api/v3/account/delta-info` |
| [setLeverage()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L831) | :closed_lock_with_key:  | POST | `/api/v3/account/set-leverage` |
| [setHoldMode()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L838) | :closed_lock_with_key:  | POST | `/api/v3/account/set-hold-mode` |
| [getCollateralType()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L847) | :closed_lock_with_key:  | GET | `/api/v3/account/collateral-type` |
| [setCollateralType()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L854) | :closed_lock_with_key:  | POST | `/api/v3/account/set-collateral-type` |
| [getCustomCollateralCoins()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L863) |  | GET | `/api/v3/account/custom-collateral-coins` |
| [preSetLeverage()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L870) | :closed_lock_with_key:  | GET | `/api/v3/account/pre-set-leverage` |
| [setMargin()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L879) | :closed_lock_with_key:  | POST | `/api/v3/account/set-margin` |
| [getMaxWithdrawal()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L886) | :closed_lock_with_key:  | GET | `/api/v3/account/max-withdrawal` |
| [getFinancialRecords()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L895) | :closed_lock_with_key:  | GET | `/api/v3/account/financial-records` |
| [getRepayableCoins()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L907) | :closed_lock_with_key:  | GET | `/api/v3/account/repayable-coins` |
| [getPaymentCoins()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L919) | :closed_lock_with_key:  | GET | `/api/v3/account/payment-coins` |
| [submitRepay()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L931) | :closed_lock_with_key:  | POST | `/api/v3/account/repay` |
| [getConvertRecords()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L938) | :closed_lock_with_key:  | GET | `/api/v3/account/convert-records` |
| [setDepositAccount()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L953) | :closed_lock_with_key:  | POST | `/api/v3/account/deposit-account` |
| [switchDeduct()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L962) | :closed_lock_with_key:  | POST | `/api/v3/account/switch-deduct` |
| [getDeductInfo()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L969) | :closed_lock_with_key:  | GET | `/api/v3/account/deduct-info` |
| [getFeeRate()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L980) | :closed_lock_with_key:  | GET | `/api/v3/account/fee-rate` |
| [getAllFeeRates()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L992) | :closed_lock_with_key:  | GET | `/api/v3/account/all-fee-rate` |
| [getMaxTransferable()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1005) | :closed_lock_with_key:  | GET | `/api/v3/account/max-transferable` |
| [getOpenInterestLimit()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1017) | :closed_lock_with_key:  | GET | `/api/v3/account/open-interest-limit` |
| [downgradeAccountToClassic()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1032) | :closed_lock_with_key:  | POST | `/api/v3/account/switch` |
| [getUnifiedAccountSwitchStatus()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1040) | :closed_lock_with_key:  | GET | `/api/v3/account/switch-status` |
| [getTaxRecords()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1056) | :closed_lock_with_key:  | GET | `/api/v3/tax/records` |
| [createSubAccount()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1071) | :closed_lock_with_key:  | POST | `/api/v3/user/create-sub` |
| [freezeSubAccount()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1080) | :closed_lock_with_key:  | POST | `/api/v3/user/freeze-sub` |
| [getSubUnifiedAssets()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1089) | :closed_lock_with_key:  | GET | `/api/v3/account/sub-unified-assets` |
| [getSubAccountList()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1098) | :closed_lock_with_key:  | GET | `/api/v3/user/sub-list` |
| [createSubAccountApiKey()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1111) | :closed_lock_with_key:  | POST | `/api/v3/user/create-sub-api` |
| [updateSubAccountApiKey()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1120) | :closed_lock_with_key:  | POST | `/api/v3/user/update-sub-api` |
| [deleteSubAccountApiKey()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1129) | :closed_lock_with_key:  | POST | `/api/v3/user/delete-sub-api` |
| [getSubAccountApiKeys()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1138) | :closed_lock_with_key:  | GET | `/api/v3/user/sub-api-list` |
| [getTransferableCoins()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1157) | :closed_lock_with_key:  | GET | `/api/v3/account/transferable-coins` |
| [submitTransfer()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1166) | :closed_lock_with_key:  | POST | `/api/v3/account/transfer` |
| [subAccountTransfer()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1175) | :closed_lock_with_key:  | POST | `/api/v3/account/sub-transfer` |
| [getSubTransferRecords()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1187) | :closed_lock_with_key:  | GET | `/api/v3/account/sub-transfer-record` |
| [getDepositAddress()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1205) | :closed_lock_with_key:  | GET | `/api/v3/account/deposit-address` |
| [getSubDepositAddress()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1214) | :closed_lock_with_key:  | GET | `/api/v3/account/sub-deposit-address` |
| [getDepositRecords()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1223) | :closed_lock_with_key:  | GET | `/api/v3/account/deposit-records` |
| [getSubDepositRecords()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1232) | :closed_lock_with_key:  | POST | `/api/v3/account/sub-deposit-records` |
| [submitWithdraw()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1247) | :closed_lock_with_key:  | POST | `/api/v3/account/withdraw` |
| [getWithdrawRecords()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1256) | :closed_lock_with_key:  | GET | `/api/v3/account/withdrawal-records` |
| [getWithdrawAddressBook()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1265) | :closed_lock_with_key:  | GET | `/api/v3/account/withdraw-address` |
| [cancelWithdrawal()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1274) | :closed_lock_with_key:  | POST | `/api/v3/account/cancel-withdrawal` |
| [submitNewOrder()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1289) | :closed_lock_with_key:  | POST | `/api/v3/trade/place-order` |
| [modifyOrder()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1298) | :closed_lock_with_key:  | POST | `/api/v3/trade/modify-order` |
| [placeRealityOrder()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1307) | :closed_lock_with_key:  | POST | `/api/v3/trade/place-reality-order` |
| [cancelRealityOrder()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1316) | :closed_lock_with_key:  | POST | `/api/v3/trade/cancel-reality-order` |
| [getLoanData()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1325) | :closed_lock_with_key:  | GET | `/api/v3/trade/loan-data` |
| [cancelOrder()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1332) | :closed_lock_with_key:  | POST | `/api/v3/trade/cancel-order` |
| [placeBatchOrders()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1341) | :closed_lock_with_key:  | POST | `/api/v3/trade/place-batch` |
| [batchModifyOrders()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1350) | :closed_lock_with_key:  | POST | `/api/v3/trade/batch-modify-order` |
| [cancelBatchOrders()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1359) | :closed_lock_with_key:  | POST | `/api/v3/trade/cancel-batch` |
| [cancelAllOrders()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1368) | :closed_lock_with_key:  | POST | `/api/v3/trade/cancel-symbol-order` |
| [closeAllPositions()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1377) | :closed_lock_with_key:  | POST | `/api/v3/trade/close-positions` |
| [getOrderInfo()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1386) | :closed_lock_with_key:  | GET | `/api/v3/trade/order-info` |
| [getUnfilledOrders()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1395) | :closed_lock_with_key:  | GET | `/api/v3/trade/unfilled-orders` |
| [getHistoryOrders()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1407) | :closed_lock_with_key:  | GET | `/api/v3/trade/history-orders` |
| [getTradeFills()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1419) | :closed_lock_with_key:  | GET | `/api/v3/trade/fills` |
| [getCurrentPosition()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1431) | :closed_lock_with_key:  | GET | `/api/v3/position/current-position` |
| [getPositionHistory()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1442) | :closed_lock_with_key:  | GET | `/api/v3/position/history-position` |
| [getMaxOpenAvailable()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1454) | :closed_lock_with_key:  | POST | `/api/v3/account/max-open-available` |
| [getPositionAdlRank()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1463) | :closed_lock_with_key:  | GET | `/api/v3/position/adlRank` |
| [countdownCancelAll()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1470) | :closed_lock_with_key:  | POST | `/api/v3/trade/countdown-cancel-all` |
| [getLoanTransfered()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1485) | :closed_lock_with_key:  | GET | `/api/v3/ins-loan/transfered` |
| [getLoanSymbols()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1494) | :closed_lock_with_key:  | GET | `/api/v3/ins-loan/symbols` |
| [getLoanRiskUnit()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1503) | :closed_lock_with_key:  | GET | `/api/v3/ins-loan/risk-unit` |
| [getLoanRepaidHistory()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1514) | :closed_lock_with_key:  | GET | `/api/v3/ins-loan/repaid-history` |
| [getLoanProductInfo()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1523) | :closed_lock_with_key:  | GET | `/api/v3/ins-loan/product-infos` |
| [getLoanOrder()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1532) | :closed_lock_with_key:  | GET | `/api/v3/ins-loan/loan-order` |
| [getLoanLTVConvert()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1541) | :closed_lock_with_key:  | GET | `/api/v3/ins-loan/ltv-convert` |
| [getLoanMarginCoinInfo()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1550) | :closed_lock_with_key:  | GET | `/api/v3/ins-loan/ensure-coins-convert` |
| [bindLoanUid()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1562) | :closed_lock_with_key:  | POST | `/api/v3/ins-loan/bind-uid` |
| [getLoanCoins()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1577) | :closed_lock_with_key:  | GET | `/api/v3/loan/coins` |
| [getLoanInterest()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1586) | :closed_lock_with_key:  | GET | `/api/v3/loan/interest` |
| [loanBorrow()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1595) | :closed_lock_with_key:  | POST | `/api/v3/loan/borrow` |
| [getLoanBorrowOngoing()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1604) | :closed_lock_with_key:  | GET | `/api/v3/loan/borrow-ongoing` |
| [getLoanBorrowHistory()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1613) | :closed_lock_with_key:  | GET | `/api/v3/loan/borrow-history` |
| [loanRepay()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1622) | :closed_lock_with_key:  | POST | `/api/v3/loan/repay` |
| [getLoanRepayHistory()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1631) | :closed_lock_with_key:  | GET | `/api/v3/loan/repay-history` |
| [loanRevisePledge()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1640) | :closed_lock_with_key:  | POST | `/api/v3/loan/revise-pledge` |
| [getLoanPledgeRateHistory()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1649) | :closed_lock_with_key:  | GET | `/api/v3/loan/pledge-rate-history` |
| [getLoanDebts()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1658) | :closed_lock_with_key:  | GET | `/api/v3/loan/debts` |
| [getLoanReduces()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1665) | :closed_lock_with_key:  | GET | `/api/v3/loan/reduces` |
| [submitStrategyOrder()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1680) | :closed_lock_with_key:  | POST | `/api/v3/trade/place-strategy-order` |
| [modifyStrategyOrder()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1689) | :closed_lock_with_key:  | POST | `/api/v3/trade/modify-strategy-order` |
| [cancelStrategyOrder()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1698) | :closed_lock_with_key:  | POST | `/api/v3/trade/cancel-strategy-order` |
| [getUnfilledStrategyOrders()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1707) | :closed_lock_with_key:  | GET | `/api/v3/trade/unfilled-strategy-orders` |
| [getHistoryStrategyOrders()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1716) | :closed_lock_with_key:  | GET | `/api/v3/trade/history-strategy-orders` |
| [createBrokerSubAccount()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1737) | :closed_lock_with_key:  | POST | `/api/v3/broker/create-sub` |
| [getBrokerSubAccountList()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1749) | :closed_lock_with_key:  | GET | `/api/v3/broker/sub-list` |
| [modifyBrokerSubAccount()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1761) | :closed_lock_with_key:  | POST | `/api/v3/broker/modify-sub` |
| [brokerSubWithdrawal()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1776) | :closed_lock_with_key:  | POST | `/api/v3/broker/sub-withdrawal` |
| [getBrokerSubDepositAddress()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1788) | :closed_lock_with_key:  | POST | `/api/v3/broker/sub-deposit-address` |
| [getBrokerAllSubDepositWithdrawal()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1800) | :closed_lock_with_key:  | GET | `/api/v3/broker/all-sub-deposit-withdrawal` |
| [getBrokerCommission()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1812) | :closed_lock_with_key:  | GET | `/api/v3/broker/commission` |
| [createBrokerSubApiKey()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1824) | :closed_lock_with_key:  | POST | `/api/v3/broker/create-sub-apikey` |
| [modifyBrokerSubApiKey()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1836) | :closed_lock_with_key:  | POST | `/api/v3/broker/modify-sub-apikey` |
| [deleteBrokerSubApiKey()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1852) | :closed_lock_with_key:  | POST | `/api/v3/broker/delete-sub-apikey` |
| [getBrokerSubApiKey()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1864) | :closed_lock_with_key:  | GET | `/api/v3/broker/query-sub-apikey` |
| [getP2pAdList()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1876) | :closed_lock_with_key:  | GET | `/api/v3/p2p/ad-list` |
| [getP2pExchangeRate()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1882) | :closed_lock_with_key:  | GET | `/api/v3/p2p/exchange-rate` |
| [simulateP2pFee()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1888) | :closed_lock_with_key:  | POST | `/api/v3/p2p/fee-simulate` |
| [getP2pAdLimit()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1894) | :closed_lock_with_key:  | GET | `/api/v3/p2p/ad-limit` |
| [createP2pAd()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1900) | :closed_lock_with_key:  | POST | `/api/v3/p2p/ad-create` |
| [updateP2pAd()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1906) | :closed_lock_with_key:  | POST | `/api/v3/p2p/ad-update` |
| [operateP2pAd()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1910) | :closed_lock_with_key:  | POST | `/api/v3/p2p/ad-operate` |
| [getP2pAdInfo()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1914) | :closed_lock_with_key:  | GET | `/api/v3/p2p/ad-info` |
| [getP2pMyAds()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1920) | :closed_lock_with_key:  | GET | `/api/v3/p2p/my-ads` |
| [getP2pPendingOrders()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1926) | :closed_lock_with_key:  | GET | `/api/v3/p2p/pending-orders` |
| [getP2pAllOrders()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1932) | :closed_lock_with_key:  | GET | `/api/v3/p2p/all-orders` |
| [getP2pOrderInfo()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1938) | :closed_lock_with_key:  | GET | `/api/v3/p2p/order-info` |
| [confirmP2pOrderPayment()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1944) | :closed_lock_with_key:  | POST | `/api/v3/p2p/order-pay` |
| [releaseP2pOrderAsset()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1950) | :closed_lock_with_key:  | POST | `/api/v3/p2p/order-release` |
| [getP2pUserInfo()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1956) | :closed_lock_with_key:  | GET | `/api/v3/p2p/user-info` |
| [getP2pCurrencies()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1960) | :closed_lock_with_key:  | GET | `/api/v3/p2p/currencies` |
| [getP2pPayMethods()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1964) | :closed_lock_with_key:  | GET | `/api/v3/p2p/pay-method` |
| [getP2pBalance()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1968) | :closed_lock_with_key:  | GET | `/api/v3/p2p/balance` |
| [getEarnEliteProducts()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1980) | :closed_lock_with_key:  | GET | `/api/v3/earn/elite-product` |
| [getEarnEliteAssets()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1984) | :closed_lock_with_key:  | GET | `/api/v3/earn/elite-assets` |
| [getEarnEliteRecords()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1988) | :closed_lock_with_key:  | GET | `/api/v3/earn/elite-records` |
| [getEarnEliteSubscribeInfo()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L1994) | :closed_lock_with_key:  | GET | `/api/v3/earn/elite-subscribe-info` |
| [subscribeEarnElite()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L2000) | :closed_lock_with_key:  | POST | `/api/v3/earn/elite-subscribe` |
| [getEarnEliteSubscribeResult()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L2006) | :closed_lock_with_key:  | GET | `/api/v3/earn/elite-subscribe-result` |
| [getEarnEliteRedeemInfo()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L2012) | :closed_lock_with_key:  | GET | `/api/v3/earn/elite-redeem-info` |
| [redeemEarnElite()](https://github.com/tiagosiebler/bitget-api/blob/master/src/rest-client-v3.ts#L2018) | :closed_lock_with_key:  | POST | `/api/v3/earn/elite-redeem` |

# websocket-api-client.ts

This table includes all endpoints from the official Exchange API docs and corresponding SDK functions for each endpoint that are found in [websocket-api-client.ts](/src/websocket-api-client.ts). 

This client provides WebSocket API endpoints which allow for faster interactions with the Bitget API via a WebSocket connection.

| Function | AUTH | HTTP Method | Endpoint |
| -------- | :------: | :------: | -------- |
| [submitNewOrder()](https://github.com/tiagosiebler/bitget-api/blob/master/src/websocket-api-client.ts#L79) |  | WS | `place-order` |
| [placeBatchOrders()](https://github.com/tiagosiebler/bitget-api/blob/master/src/websocket-api-client.ts#L98) |  | WS | `batch-place` |
| [cancelOrder()](https://github.com/tiagosiebler/bitget-api/blob/master/src/websocket-api-client.ts#L122) |  | WS | `cancel-order` |
| [cancelBatchOrders()](https://github.com/tiagosiebler/bitget-api/blob/master/src/websocket-api-client.ts#L141) |  | WS | `batch-cancel` |