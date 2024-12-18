import {
  APIResponse,
  BorrowLoanRequestV2,
  CloseFuturesFollowerPositionsRequestV2,
  CopyTradingProductTypeV2,
  FuturesAccountBillRequestV2,
  FuturesBatchCancelOrderRequestV2,
  FuturesBatchOrderRequestV2,
  FuturesCancelAllOrdersRequestV2,
  FuturesCancelOrderRequestV2,
  FuturesCancelPlanOrderRequestV2,
  FuturesCandlesRequestV2,
  FuturesFlashClosePositionsRequestV2,
  FuturesGetHistoricalFillsRequestV2,
  FuturesGetHistoryOrdersRequestV2,
  FuturesGetHistoryPlanOrdersRequestV2,
  FuturesGetOpenOrdersRequestV2,
  FuturesGetOrderFillsRequestV2,
  FuturesGetOrderRequestV2,
  FuturesGetPlanOrdersRequestV2,
  FuturesHistoricalPositionsRequestV2,
  FuturesHistoricTradesRequestV2,
  FuturesInterestHistoryRequestV2,
  FuturesMergeDepthRequestV2,
  FuturesModifyOrderRequestV2,
  FuturesModifyPlanOrderRequestV2,
  FuturesModifyTPSLOrderRequestV2,
  FuturesOpenCountRequestV2,
  FuturesPlaceOrderRequestV2,
  FuturesPlanOrderRequestV2,
  FuturesProductTypeV2,
  FuturesRecentTradesRequestV2,
  FuturesReversalOrderRequestV2,
  FuturesSetAutoMarginRequestV2,
  FuturesSetLeverageRequestV2,
  FuturesSetMarginModeRequestV2,
  FuturesSetPositionMarginRequestV2,
  FuturesSingleAccountRequestV2,
  FuturesTPSLOrderRequestV2,
  FuturesTraderSymbolSettingRequestV2,
  GetBorrowHistoryRequestV2,
  GetEarnSavingsAssetsRequestV2,
  GetEarnSavingsRecordsRequestV2,
  GetFinancialHistoryRequestV2,
  GetFollowerFuturesCurrentTrackingOrdersRequestV2,
  GetFollowerFuturesHistoryTrackingOrdersRequestV2,
  GetFuturesFollowerTradersRequestV2,
  GetFuturesTraderCurrentOrdersRequestV2,
  GetFuturesTraderFollowersRequestV2,
  GetFuturesTraderHistoryOrdersRequestV2,
  GetFuturesTraderProfitShareDetailRequestV2,
  GetHistoryOrdersRequestV2,
  GetInterestHistoryRequestV2,
  GetLiquidationHistoryRequestV2,
  GetLiquidationRecordsRequestV2,
  GetLoanEstInterestAndBorrowableRequestV2,
  GetLoanHistoryRequestV2,
  GetLoanPledgeRateHistoryRequestV2,
  GetLoanRepayHistoryRequestV2,
  GetMarginCurrentOrdersRequestV2,
  GetMarginLiquidationOrdersRequestV2,
  GetMarginOrderFillsRequestV2,
  GetRepayHistoryRequestV2,
  GetSharkfinAssetsRequestV2,
  GetSharkfinRecordsRequestV2,
  GetSpotAccountBillsRequestV2,
  GetSpotCurrentPlanOrdersRequestV2,
  GetSpotDepositRecordRequestV2,
  GetSpotFillsRequestV2,
  GetSpotFollowerHistoryOrdersRequestV2,
  GetSpotFollowerOpenOrdersRequestV2,
  GetSpotHistoryOrdersRequestV2,
  GetSpotHistoryPlanOrdersRequestV2,
  GetSpotOpenOrdersRequestV2,
  GetSpotOrderInfoRequestV2,
  GetSpotSubAccountDepositRecordRequestV2,
  GetSpotTraderCurrentOrdersRequestV2,
  GetSpotTraderFollowersRequestV2,
  GetSpotTraderHistoryOrdersRequestV2,
  GetSpotTraderHistoryProfitRequestV2,
  GetSpotTransferRecordRequestV2,
  GetSpotWithdrawalRecordRequestV2,
  MarginBatchOrdersRequestV2,
  MarginPlaceOrderRequestV2,
  MarginType,
  ModifyFuturesTraderOrderTPSLRequestV2,
  ModifyLoanPledgeRateRequestV2,
  RedeemSavingsRequestV2,
  RepayLoanRequestV2,
  SpotAccountBill,
  SpotAccountTypeV2,
  SpotBatchCancelOrderRequestV2,
  SpotBatchOrderRequestV2,
  SpotCancelandSubmitOrderRequestV2,
  SpotCancelOrderRequestV2,
  SpotCandlesRequestV2,
  SpotFollowerCopyTradeSettingV2,
  SpotHistoricCandlesRequestV2,
  SpotHistoricTradesRequestV2,
  SpotMainSubTransferRecordRequestV2,
  SpotModifyPlanOrderRequestV2,
  SpotOrderRequestV2,
  SpotPlanOrderRequestV2,
  SpotSubAccountTransferRequestV2,
  SpotTransferRequestV2,
  SpotWithdrawalRequestV2,
  UpdateFuturesFollowerSettingsRequestV2,
  UpdateFuturesFollowerTPSLRequestV2,
} from './types';
import {
  CreateSubAccountApiKeyRequestV2,
  GetSubAccountsRequestV2,
  ModifySubAccountApiKeyRequestV2,
  ModifySubRequestV2,
  SubDepositRecordsRequestV2,
  SubWithdrawalRecordsRequestV2,
  SubWithdrawalRequestV2,
} from './types/request/v2/broker';
import {
  ConvertQuoteRequestV2,
  ConvertRequestV2,
  CreateVirtualSubApiKeyRequestV2,
  CreateVirtualSubRequestV2,
  GetAnnouncementsRequestV2,
  GetConvertBGBHistoryRequestV2,
  GetConvertHistoryRequestV2,
  GetFuturesTransactionsRequestV2,
  GetMarginTransactionsRequestV2,
  GetMerchantAdvertisementsRequestV2,
  GetMerchantP2POrdersRequestV2,
  GetP2PMerchantsRequestV2,
  GetP2PTransactionsRequestV2,
  GetSpotTransactionsRequestV2,
  GetTradeRateRequestV2,
  ModifyVirtualSubApiKeyRequestV2,
  ModifyVirtualSubRequestV2,
} from './types/request/v2/common';
import { assertMarginType, REST_CLIENT_TYPE_ENUM } from './util';
import BaseRestClient from './util/BaseRestClient';

/**
 * REST API client for all V2 endpoints
 */
export class RestClientV2 extends BaseRestClient {
  getClientType() {
    return REST_CLIENT_TYPE_ENUM.v2;
  }

  /**
   *
   * Custom SDK functions
   *
   */

  /**
   * This method is used to get the latency and time sync between the client and the server.
   * This is not official API endpoint and is only used for internal testing purposes.
   * Use this method to check the latency and time sync between the client and the server.
   * Final values might vary slightly, but it should be within few ms difference.
   * If you have any suggestions or improvements to this measurement, please create an issue or pull request on GitHub.
   */
  async fetchLatencySummary(): Promise<any> {
    const clientTimeReqStart = Date.now();
    const serverTime = await this.getServerTime();
    const clientTimeReqEnd = Date.now();
    console.log('serverTime', serverTime);

    const serverTimeMs = Number(serverTime.data.serverTime);
    const roundTripTime = clientTimeReqEnd - clientTimeReqStart;
    const estimatedOneWayLatency = Math.floor(roundTripTime / 2);

    // Adjust server time by adding estimated one-way latency
    const adjustedServerTime = serverTimeMs + estimatedOneWayLatency;

    // Calculate time difference between adjusted server time and local time
    const timeDifference = adjustedServerTime - clientTimeReqEnd;

    const result = {
      localTime: clientTimeReqEnd,
      serverTime: serverTimeMs,
      roundTripTime,
      estimatedOneWayLatency,
      adjustedServerTime,
      timeDifference,
    };

    console.log('Time synchronization results:');
    console.log(result);

    console.log(
      `Your approximate latency to exchange server:
      One way: ${estimatedOneWayLatency}ms.
      Round trip: ${roundTripTime}ms.
      `,
    );

    if (timeDifference > 500) {
      console.warn(
        `WARNING! Time difference between server and client clock is greater than 500ms. It is currently ${timeDifference}ms.
        Consider adjusting your system clock to avoid unwanted clock sync errors!
        Visit https://github.com/tiagosiebler/awesome-crypto-examples/wiki/Timestamp-for-this-request-is-outside-of-the-recvWindow for more information`,
      );
    } else {
      console.log(
        `Time difference between server and client clock is within acceptable range of 500ms. It is currently ${timeDifference}ms.`,
      );
    }

    return result;
  }

  async fetchServerTime(): Promise<number> {
    const res = await this.getServerTime();
    return Number(res.data);
  }

  /**
   *
   * Bitget misc functions
   *
   */

  /**
   *
   *
   * Common
   *
   *
   */

  /**
   *
   * * Common | Notice
   *
   */

  getAnnouncements(
    params?: GetAnnouncementsRequestV2,
  ): Promise<APIResponse<any>> {
    return this.get('/api/v2/public/annoucements', params);
  }

  /**
   *
   * * Common | Public
   *
   */

  getServerTime(): Promise<APIResponse<any>> {
    return this.get('/api/v2/public/time');
  }

  getTradeRate(params: GetTradeRateRequestV2): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v2/common/trade-rate', params);
  }

  /**
   *
   * * Common | Tax
   *
   */

  getSpotTransactionRecords(
    params: GetSpotTransactionsRequestV2,
  ): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v2/tax/spot-record', params);
  }

  getFuturesTransactionRecords(
    params: GetFuturesTransactionsRequestV2,
  ): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v2/tax/future-record', params);
  }

  getMarginTransactionRecords(
    params: GetMarginTransactionsRequestV2,
  ): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v2/tax/margin-record', params);
  }

  getP2PTransactionRecords(
    params: GetP2PTransactionsRequestV2,
  ): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v2/tax/p2p-record', params);
  }

  /**
   *
   * * Common | P2P
   *
   */

  getP2PMerchantList(
    params?: GetP2PMerchantsRequestV2,
  ): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v2/p2p/merchantList', params);
  }

  getP2PMerchantInfo(): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v2/p2p/merchantInfo');
  }

  getP2PMerchantOrders(
    params: GetMerchantP2POrdersRequestV2,
  ): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v2/p2p/orderList', params);
  }

  getP2PMerchantAdvertisementList(
    params: GetMerchantAdvertisementsRequestV2,
  ): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v2/p2p/advList', params);
  }

  /**
   *
   * * Common | Trading insights
   *
   */

  getSpotWhaleNetFlowData(params: {
    symbol: string;
  }): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v2/spot/market/whale-net-flow', params);
  }

  getFuturesActiveTakerBuySellVolumeData(params: {
    symbol: string;
    period?: string;
  }): Promise<APIResponse<any>> {
    return this.get('/api/v2/mix/market/taker-buy-sell', params);
  }

  getFuturesActiveLongShortPositionData(params: {
    symbol: string;
    period?: string;
  }): Promise<APIResponse<any>> {
    return this.get('/api/v2/mix/market/position-long-short', params);
  }

  getFuturesLongShortRatio(params: {
    symbol: string;
    period?: string;
    coin?: string;
  }): Promise<APIResponse<any>> {
    return this.get('/api/v2/mix/market/long-short-ratio', params);
  }

  getMarginLoanGrowthRate(params: {
    symbol: string;
    period?: string;
    coin?: string;
  }): Promise<APIResponse<any>> {
    return this.get('/api/v2/mix/market/loan-growth', params);
  }

  getIsolatedMarginBorrowingRatio(params: {
    symbol: string;
    period?: string;
  }): Promise<APIResponse<any>> {
    return this.get('/api/v2/mix/market/isolated-borrow-rate', params);
  }

  getFuturesActiveBuySellVolumeData(params: {
    symbol: string;
    period?: string;
  }): Promise<APIResponse<any>> {
    return this.get('/api/v2/mix/market/long-short', params);
  }

  getSpotFundFlow(params: {
    symbol: string;
    period?: string;
  }): Promise<APIResponse<any>> {
    return this.get('/api/v2/spot/market/fund-flow', params);
  }

  getTradeDataSupportSymbols(): Promise<APIResponse<any>> {
    return this.get('/api/v2/spot/market/support-symbols');
  }

  getSpotFundNetFlowData(params: {
    symbol: string;
  }): Promise<APIResponse<any>> {
    return this.get('/api/v2/spot/market/fund-net-flow', params);
  }

  getFuturesActiveLongShortAccountData(params: {
    symbol: string;
    period?: string;
  }): Promise<APIResponse<any>> {
    return this.get('/api/v2/mix/market/account-long-short', params);
  }

  /**
   *
   * * Common | Virtual Subaccount
   *
   */

  createVirtualSubaccount(params: {
    subAccountList: string[];
  }): Promise<APIResponse<any>> {
    return this.postPrivate('/api/v2/user/create-virtual-subaccount', params);
  }

  modifyVirtualSubaccount(
    params: ModifyVirtualSubRequestV2,
  ): Promise<APIResponse<any>> {
    return this.postPrivate('/api/v2/user/modify-virtual-subaccount', params);
  }

  batchCreateVirtualSubaccountAndAPIKey(
    params: CreateVirtualSubRequestV2,
  ): Promise<APIResponse<any>> {
    return this.postPrivate(
      '/api/v2/user/batch-create-subaccount-and-apikey',
      params,
    );
  }

  getVirtualSubaccounts(params?: {
    limit?: string;
    idLessThan?: string;
    status?: 'normal' | 'freeze';
  }): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v2/user/virtual-subaccount-list', params);
  }

  createVirtualSubaccountAPIKey(
    params: CreateVirtualSubApiKeyRequestV2,
  ): Promise<APIResponse<any>> {
    return this.postPrivate(
      '/api/v2/user/create-virtual-subaccount-apikey',
      params,
    );
  }

  modifyVirtualSubaccountAPIKey(
    params: ModifyVirtualSubApiKeyRequestV2,
  ): Promise<APIResponse<any>> {
    return this.postPrivate(
      '/api/v2/user/modify-virtual-subaccount-apikey',
      params,
    );
  }

  getVirtualSubaccountAPIKeys(params: {
    subAccountUid: string;
  }): Promise<APIResponse<any>> {
    return this.getPrivate(
      '/api/v2/user/virtual-subaccount-apikey-list',
      params,
    );
  }

  /**
   *
   * * Common | Assets
   *
   */
  getFundingAssets(params?: { coin?: string }): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v2/account/funding-assets', params);
  }

  getBotAccount(params?: { accountType?: string }): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v2/account/bot-assets', params);
  }

  /** Get assets overview */
  getBalances(): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v2/account/all-account-balance');
  }

  /**
   *
   * * Common | Convert
   *
   */

  getConvertCoins(): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v2/convert/currencies');
  }

  getConvertQuotedPrice(
    params: ConvertQuoteRequestV2,
  ): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v2/convert/quoted-price', params);
  }

  convert(params: ConvertRequestV2): Promise<APIResponse<any>> {
    return this.postPrivate('/api/v2/convert/trade', params);
  }

  getConvertHistory(
    params: GetConvertHistoryRequestV2,
  ): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v2/convert/convert-record', params);
  }

  /**
   *
   * * Common | BGB Convert
   *
   */

  getConvertBGBCoins(): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v2/convert/bgb-convert-coin-list');
  }

  convertBGB(params: { coinList: string }): Promise<APIResponse<any>> {
    return this.postPrivate('/api/v2/convert/bgb-convert', params);
  }

  getConvertBGBHistory(
    params: GetConvertBGBHistoryRequestV2,
  ): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v2/convert/bgb-convert-records', params);
  }

  /**
   *
   *
   * Spot
   *
   *
   */

  /**
   *
   * * Spot | Market
   *
   */

  getSpotCoinInfo(params?: { coin?: string }): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v2/spot/public/coins', params);
  }

  getSpotSymbolInfo(params?: { symbol?: string }): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v2/spot/public/symbols', params);
  }

  getSpotVIPFeeRate(): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v2/spot/market/vip-fee-rate');
  }

  getSpotTicker(params?: { symbol?: string }): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v2/spot/market/tickers', params);
  }

  getSpotMergeDepth(params: {
    symbol: string;
    precision?: string;
    limit?: string;
  }): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v2/spot/market/merge-depth', params);
  }

  getSpotOrderBookDepth(params: {
    symbol: string;
    type?: string;
    limit?: string;
  }): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v2/spot/market/orderbook', params);
  }

  getSpotCandles(params: SpotCandlesRequestV2): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v2/spot/market/candles', params);
  }

  getSpotHistoricCandles(
    params: SpotHistoricCandlesRequestV2,
  ): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v2/spot/market/history-candles', params);
  }

  getSpotRecentTrades(params: {
    symbol: string;
    limit?: string;
  }): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v2/spot/market/fills', params);
  }

  getSpotHistoricTrades(
    params: SpotHistoricTradesRequestV2,
  ): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v2/spot/market/fills-history', params);
  }

  /**
   *
   * * Spot | Trade
   *
   */

  spotSubmitOrder(params: SpotOrderRequestV2): Promise<APIResponse<any>> {
    return this.postPrivate('/api/v2/spot/trade/place-order', params);
  }

  spotCancelandSubmitOrder(
    params: SpotCancelandSubmitOrderRequestV2,
  ): Promise<APIResponse<any>> {
    return this.postPrivate('/api/v2/spot/trade/cancel-replace-order', params);
  }

  spotBatchCancelandSubmitOrder(params: {
    orderList: SpotCancelandSubmitOrderRequestV2[];
  }): Promise<APIResponse<any>> {
    return this.postPrivate(
      '/api/v2/spot/trade/batch-cancel-replace-order',
      params,
    );
  }

  spotCancelOrder(params: SpotCancelOrderRequestV2): Promise<APIResponse<any>> {
    return this.postPrivate('/api/v2/spot/trade/cancel-order', params);
  }

  spotBatchSubmitOrders(
    params: SpotBatchOrderRequestV2,
  ): Promise<APIResponse<any>> {
    return this.postPrivate('/api/v2/spot/trade/batch-orders', params);
  }

  spotBatchCancelOrders(
    params: SpotBatchCancelOrderRequestV2,
  ): Promise<APIResponse<any>> {
    return this.postPrivate('/api/v2/spot/trade/batch-cancel-order', params);
  }

  spotCancelSymbolOrder(params: { symbol: string }): Promise<APIResponse<any>> {
    return this.postPrivate('/api/v2/spot/trade/cancel-symbol-order', params);
  }

  getSpotOrder(params?: GetSpotOrderInfoRequestV2): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v2/spot/trade/orderInfo', params);
  }

  getSpotOpenOrders(
    params?: GetSpotOpenOrdersRequestV2,
  ): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v2/spot/trade/unfilled-orders', params);
  }

  getSpotHistoricOrders(
    params?: GetSpotHistoryOrdersRequestV2,
  ): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v2/spot/trade/history-orders', params);
  }

  getSpotFills(params: GetSpotFillsRequestV2): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v2/spot/trade/fills', params);
  }

  /**
   *
   * * Spot | Trigger Orders
   *
   */

  spotSubmitPlanOrder(
    params: SpotPlanOrderRequestV2,
  ): Promise<APIResponse<any>> {
    return this.postPrivate('/api/v2/spot/trade/place-plan-order', params);
  }

  spotModifyPlanOrder(
    params: SpotModifyPlanOrderRequestV2,
  ): Promise<APIResponse<any>> {
    return this.postPrivate('/api/v2/spot/trade/modify-plan-order', params);
  }

  spotCancelPlanOrder(params: {
    clientOid?: string;
    orderId?: string;
  }): Promise<APIResponse<any>> {
    return this.postPrivate('/api/v2/spot/trade/cancel-plan-order', params);
  }

  getSpotCurrentPlanOrders(
    params: GetSpotCurrentPlanOrdersRequestV2,
  ): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v2/spot/trade/current-plan-order', params);
  }

  getSpotPlanSubOrder(params: {
    planOrderId: string;
  }): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v2/spot/trade/plan-sub-order', params);
  }

  getSpotHistoricPlanOrders(
    params: GetSpotHistoryPlanOrdersRequestV2,
  ): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v2/spot/trade/history-plan-order', params);
  }

  spotCancelPlanOrders(params?: {
    symbolList?: string[];
  }): Promise<APIResponse<any>> {
    return this.postPrivate(
      '/api/v2/spot/trade/batch-cancel-plan-order',
      params,
    );
  }

  /**
   *
   * * Spot | Account
   *
   */

  getSpotAccount(): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v2/spot/account/info');
  }

  getSpotAccountAssets(params?: {
    coin?: string;
    assetType?: string;
  }): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v2/spot/account/assets', params);
  }

  getSpotSubAccountAssets(): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v2/spot/account/subaccount-assets');
  }

  spotModifyDepositAccount(params: {
    accountType: string;
    coin: string;
  }): Promise<APIResponse<any>> {
    return this.postPrivate(
      '/api/v2/spot/wallet/modify-deposit-account',
      params,
    );
  }

  getSpotAccountBills(
    params?: GetSpotAccountBillsRequestV2,
  ): Promise<APIResponse<SpotAccountBill[]>> {
    return this.getPrivate('/api/v2/spot/account/bills', params);
  }

  spotTransfer(params: SpotTransferRequestV2): Promise<APIResponse<any>> {
    return this.postPrivate('/api/v2/spot/wallet/transfer', params);
  }

  getSpotTransferableCoins(params: {
    fromType: SpotAccountTypeV2;
    toType: SpotAccountTypeV2;
  }): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v2/spot/wallet/transfer-coin-info', params);
  }

  spotSubTransfer(
    params: SpotSubAccountTransferRequestV2,
  ): Promise<APIResponse<any>> {
    return this.postPrivate('/api/v2/spot/wallet/subaccount-transfer', params);
  }

  spotWithdraw(params: SpotWithdrawalRequestV2): Promise<APIResponse<any>> {
    return this.postPrivate('/api/v2/spot/wallet/withdrawal', params);
  }

  getSpotMainSubTransferRecord(
    params: SpotMainSubTransferRecordRequestV2,
  ): Promise<APIResponse<any>> {
    return this.getPrivate(
      '/api/v2/spot/account/sub-main-trans-record',
      params,
    );
  }

  getSpotTransferHistory(
    params: GetSpotTransferRecordRequestV2,
  ): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v2/spot/account/transferRecords', params);
  }

  spotSwitchBGBDeduct(params: { deduct: boolean }): Promise<APIResponse<any>> {
    return this.postPrivate('/api/v2/spot/account/switch-deduct', params);
  }

  getSpotDepositAddress(params: {
    coin: string;
    chain?: string;
    size: string;
  }): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v2/spot/wallet/deposit-address', params);
  }

  getSpotSubDepositAddress(params: {
    subUid: string;
    coin: string;
    chain?: string;
    size: string;
  }): Promise<APIResponse<any>> {
    return this.getPrivate(
      '/api/v2/spot/wallet/subaccount-deposit-address',
      params,
    );
  }

  getSpotBGBDeductInfo(): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v2/spot/account/deduct-info');
  }

  spotCancelWithdrawal(params: { orderId: string }): Promise<APIResponse<any>> {
    return this.postPrivate('/api/v2/spot/wallet/cancel-withdrawal', params);
  }

  getSubAccountDepositRecords(
    params: GetSpotSubAccountDepositRecordRequestV2,
  ): Promise<APIResponse<any>> {
    return this.getPrivate(
      '/api/v2/spot/wallet/subaccount-deposit-records',
      params,
    );
  }

  getSpotDepositHistory(
    params: GetSpotDepositRecordRequestV2,
  ): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v2/spot/wallet/deposit-records', params);
  }

  getSpotWithdrawalHistory(
    params: GetSpotWithdrawalRecordRequestV2,
  ): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v2/spot/wallet/withdrawal-records', params);
  }

  /**
   *
   *
   * Futures
   *
   *
   */

  /**
   *
   * * Futures | Market
   *
   */

  getFuturesVIPFeeRate(): Promise<APIResponse<any>> {
    return this.get('/api/v2/mix/market/vip-fee-rate');
  }

  getFuturesInterestRateHistory(params: {
    coin: string;
  }): Promise<APIResponse<any>> {
    return this.get('/api/v2/mix/market/union-interest-rate-history', params);
  }

  getFuturesTicker(params: {
    symbol: string;
    productType: FuturesProductTypeV2;
  }): Promise<APIResponse<any>> {
    return this.get('/api/v2/mix/market/ticker', params);
  }

  getFuturesInterestExchangeRate(): Promise<APIResponse<any>> {
    return this.get('/api/v2/mix/market/exchange-rate');
  }

  getFuturesDiscountRate(): Promise<APIResponse<any>> {
    return this.get('/api/v2/mix/market/discount-rate');
  }

  getFuturesAllTickers(params: {
    productType: FuturesProductTypeV2;
  }): Promise<APIResponse<any>> {
    return this.get('/api/v2/mix/market/tickers', params);
  }

  getFuturesMergeDepth(
    params: FuturesMergeDepthRequestV2,
  ): Promise<APIResponse<any>> {
    return this.get('/api/v2/mix/market/merge-depth', params);
  }

  getFuturesCandles(
    params: FuturesCandlesRequestV2,
  ): Promise<APIResponse<any>> {
    return this.get('/api/v2/mix/market/candles', params);
  }

  getFuturesHistoricCandles(
    params: FuturesCandlesRequestV2,
  ): Promise<APIResponse<any>> {
    return this.get('/api/v2/mix/market/history-candles', params);
  }

  getFuturesHistoricIndexPriceCandles(
    params: FuturesCandlesRequestV2,
  ): Promise<APIResponse<any>> {
    return this.get('/api/v2/mix/market/history-index-candles', params);
  }

  getFuturesHistoricMarkPriceCandles(
    params: FuturesCandlesRequestV2,
  ): Promise<APIResponse<any>> {
    return this.get('/api/v2/mix/market/history-mark-candles', params);
  }

  getFuturesRecentTrades(
    params: FuturesRecentTradesRequestV2,
  ): Promise<APIResponse<any>> {
    return this.get('/api/v2/mix/market/fills', params);
  }

  getFuturesHistoricTrades(
    params: FuturesHistoricTradesRequestV2,
  ): Promise<APIResponse<any>> {
    return this.get('/api/v2/mix/market/fills-history', params);
  }

  getFuturesOpenInterest(params: {
    symbol: string;
    productType: FuturesProductTypeV2;
  }): Promise<APIResponse<any>> {
    return this.get('/api/v2/mix/market/open-interest', params);
  }

  getFuturesNextFundingTime(params: {
    symbol: string;
    productType: FuturesProductTypeV2;
  }): Promise<APIResponse<any>> {
    return this.get('/api/v2/mix/market/funding-time', params);
  }

  getFuturesSymbolPrice(params: {
    symbol: string;
    productType: FuturesProductTypeV2;
  }): Promise<APIResponse<any>> {
    return this.get('/api/v2/mix/market/symbol-price', params);
  }

  getFuturesHistoricFundingRates(params: {
    symbol: string;
    productType: FuturesProductTypeV2;
    pageSize?: string;
    pageNumber?: string;
  }): Promise<APIResponse<any>> {
    return this.get('/api/v2/mix/market/history-fund-rate', params);
  }

  getFuturesCurrentFundingRate(params: {
    symbol: string;
    productType: FuturesProductTypeV2;
  }): Promise<APIResponse<any>> {
    return this.get('/api/v2/mix/market/current-fund-rate', params);
  }

  getFuturesContractConfig(params: {
    symbol: string;
    productType: FuturesProductTypeV2;
  }): Promise<APIResponse<any>> {
    return this.get('/api/v2/mix/market/contracts', params);
  }

  /**
   *
   * * Futures | Account
   *
   */

  getFuturesAccountAsset(
    params: FuturesSingleAccountRequestV2,
  ): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v2/mix/account/account', params);
  }

  getFuturesAccountAssets(params: {
    productType: FuturesProductTypeV2;
  }): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v2/mix/account/accounts', params);
  }

  getFuturesSubAccountAssets(params: {
    productType: FuturesProductTypeV2;
  }): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v2/mix/account/sub-account-assets', params);
  }

  getFuturesInterestHistory(
    params: FuturesInterestHistoryRequestV2,
  ): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v2/mix/account/interest-history', params);
  }

  getFuturesOpenCount(
    params: FuturesOpenCountRequestV2,
  ): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v2/mix/account/open-count', params);
  }

  setFuturesLeverage(
    params: FuturesSetLeverageRequestV2,
  ): Promise<APIResponse<any>> {
    return this.postPrivate('/api/v2/mix/account/set-leverage', params);
  }

  setFuturesPositionAutoMargin(
    params: FuturesSetAutoMarginRequestV2,
  ): Promise<APIResponse<any>> {
    return this.postPrivate('/api/v2/mix/account/set-auto-margin', params);
  }

  setFuturesPositionMargin(
    params: FuturesSetPositionMarginRequestV2,
  ): Promise<APIResponse<any>> {
    return this.postPrivate('/api/v2/mix/account/set-margin', params);
  }

  setFuturesAssetMode(params: {
    productType: 'USDT-FUTURES' | 'SUSDT-FUTURES';
    assetMode: 'single' | 'union';
  }): Promise<APIResponse<any>> {
    return this.postPrivate('/api/v2/mix/account/set-asset-mode', params);
  }

  setFuturesMarginMode(
    params: FuturesSetMarginModeRequestV2,
  ): Promise<APIResponse<any>> {
    return this.postPrivate('/api/v2/mix/account/set-margin-mode', params);
  }

  setFuturesPositionMode(params: {
    productType: FuturesProductTypeV2;
    posMode: 'one_way_mode' | 'hedge_mode';
  }): Promise<APIResponse<any>> {
    return this.postPrivate('/api/v2/mix/account/set-position-mode', params);
  }

  getFuturesAccountBills(
    params: FuturesAccountBillRequestV2,
  ): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v2/mix/account/bill', params);
  }

  /**
   *
   * * Futures | Position
   *
   */

  getFuturesPositionTier(params: {
    productType: FuturesProductTypeV2;
    symbol: string;
  }): Promise<APIResponse<any>> {
    return this.get('/api/v2/mix/market/query-position-lever', params);
  }

  getFuturesPosition(params: {
    productType: FuturesProductTypeV2;
    symbol: string;
    marginCoin: string;
  }): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v2/mix/position/single-position', params);
  }

  getFuturesPositions(params: {
    productType: FuturesProductTypeV2;
    marginCoin?: string;
  }): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v2/mix/position/all-position', params);
  }

  getFuturesHistoricPositions(
    params?: FuturesHistoricalPositionsRequestV2,
  ): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v2/mix/position/history-position', params);
  }

  /**
   *
   * * Futures | Trade
   *
   */

  futuresSubmitOrder(
    params: FuturesPlaceOrderRequestV2,
  ): Promise<APIResponse<any>> {
    return this.postPrivate('/api/v2/mix/order/place-order', params);
  }

  futuresCancelOrder(
    params: FuturesCancelOrderRequestV2,
  ): Promise<APIResponse<any>> {
    return this.postPrivate('/api/v2/mix/order/cancel-order', params);
  }

  futuresSubmitReversal(
    params: FuturesReversalOrderRequestV2,
  ): Promise<APIResponse<any>> {
    return this.postPrivate('/api/v2/mix/order/click-backhand', params);
  }

  futuresBatchSubmitOrders(
    params: FuturesBatchOrderRequestV2,
  ): Promise<APIResponse<any>> {
    return this.postPrivate('/api/v2/mix/order/batch-place-order', params);
  }

  futuresModifyOrder(
    params: FuturesModifyOrderRequestV2,
  ): Promise<APIResponse<any>> {
    return this.postPrivate('/api/v2/mix/order/modify-order', params);
  }

  futuresBatchCancelOrders(
    params: FuturesBatchCancelOrderRequestV2,
  ): Promise<APIResponse<any>> {
    return this.postPrivate('/api/v2/mix/order/batch-cancel-orders', params);
  }

  futuresFlashClosePositions(
    params: FuturesFlashClosePositionsRequestV2,
  ): Promise<APIResponse<any>> {
    return this.postPrivate('/api/v2/mix/order/close-positions', params);
  }

  getFuturesOrder(params: FuturesGetOrderRequestV2): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v2/mix/order/detail', params);
  }

  getFuturesFills(
    params: FuturesGetOrderFillsRequestV2,
  ): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v2/mix/order/fills', params);
  }

  getFuturesHistoricOrderFills(
    params: FuturesGetHistoricalFillsRequestV2,
  ): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v2/mix/order/fill-history', params);
  }

  getFuturesOpenOrders(
    params: FuturesGetOpenOrdersRequestV2,
  ): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v2/mix/order/orders-pending', params);
  }

  getFuturesHistoricOrders(
    params: FuturesGetHistoryOrdersRequestV2,
  ): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v2/mix/order/orders-history', params);
  }

  futuresCancelAllOrders(
    params: FuturesCancelAllOrdersRequestV2,
  ): Promise<APIResponse<any>> {
    return this.postPrivate('/api/v2/mix/order/cancel-all-orders', params);
  }

  /**
   *
   * * Futures | Trigger Orders
   *
   */

  futuresSubmitPlanSubOrder(params: {
    planType: 'normal_plan' | 'track_plan';
    planOrderId: string;
    productType: FuturesProductTypeV2;
  }): Promise<APIResponse<any>> {
    return this.postPrivate('/api/v2/mix/order/plan-sub-order', params);
  }

  futuresSubmitTPSLOrder(
    params: FuturesTPSLOrderRequestV2,
  ): Promise<APIResponse<any>> {
    return this.postPrivate('/api/v2/mix/order/place-tpsl-order', params);
  }

  futuresSubmitPlanOrder(
    params: FuturesPlanOrderRequestV2,
  ): Promise<APIResponse<any>> {
    return this.postPrivate('/api/v2/mix/order/place-plan-order', params);
  }

  futuresModifyTPSLPOrder(
    params: FuturesModifyTPSLOrderRequestV2,
  ): Promise<APIResponse<any>> {
    return this.postPrivate('/api/v2/mix/order/modify-tpsl-order', params);
  }

  futuresModifyPlanOrder(
    params: FuturesModifyPlanOrderRequestV2,
  ): Promise<APIResponse<any>> {
    return this.postPrivate('/api/v2/mix/order/modify-plan-order', params);
  }

  futuresCancelPlanOrder(
    params: FuturesCancelPlanOrderRequestV2,
  ): Promise<APIResponse<any>> {
    return this.postPrivate('/api/v2/mix/order/cancel-plan-order', params);
  }

  getFuturesPlanOrders(
    params: FuturesGetPlanOrdersRequestV2,
  ): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v2/mix/order/orders-plan-pending', params);
  }

  getFuturesHistoricPlanOrders(
    params: FuturesGetHistoryPlanOrdersRequestV2,
  ): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v2/mix/order/orders-plan-history', params);
  }

  /**
   *
   *
   * Broker
   *
   *
   */

  /**
   *
   * * Broker | Subaccount
   *
   */

  modifySubaccountEmail(params: {
    subUid: string;
    subaccountEmail: string;
  }): Promise<APIResponse<any>> {
    return this.postPrivate(
      '/api/v2/broker/account/modify-subaccount-email',
      params,
    );
  }

  getBrokerInfo(): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v2/broker/account/info');
  }

  createSubaccount(params: {
    subaccountName: string;
    label: string;
  }): Promise<APIResponse<any>> {
    return this.postPrivate('/api/v2/broker/account/create-subaccount', params);
  }

  getSubaccounts(params?: GetSubAccountsRequestV2): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v2/broker/account/subaccount-list', params);
  }

  modifySubaccount(params: ModifySubRequestV2): Promise<APIResponse<any>> {
    return this.postPrivate('/api/v2/broker/account/modify-subaccount', params);
  }

  getSubaccountEmail(params: { subUid: string }): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v2/broker/account/subaccount-email', params);
  }

  getSubaccountSpotAssets(params: {
    subUid: string;
    coin?: string;
    assetType?: 'hold_only' | 'all';
  }): Promise<APIResponse<any>> {
    return this.getPrivate(
      '/api/v2/broker/account/subaccount-spot-assets',
      params,
    );
  }

  getSubaccountFuturesAssets(params: {
    subUid: string;
    productType: FuturesProductTypeV2;
  }): Promise<APIResponse<any>> {
    return this.getPrivate(
      '/api/v2/broker/account/subaccount-future-assets',
      params,
    );
  }

  createSubaccountDepositAddress(params: {
    subUid: string;
    coin: string;
    chain?: string;
  }): Promise<APIResponse<any>> {
    return this.postPrivate(
      '/api/v2/broker/account/subaccount-address',
      params,
    );
  }

  subaccountWithdrawal(
    params: SubWithdrawalRequestV2,
  ): Promise<APIResponse<any>> {
    return this.postPrivate(
      '/api/v2/broker/account/subaccount-withdrawal',
      params,
    );
  }

  subaccountSetAutoTransfer(params: {
    subUid: string;
    coin: string;
    toAccountType: string;
  }): Promise<APIResponse<any>> {
    return this.postPrivate(
      '/api/v2/broker/account/set-subaccount-autotransfer',
      params,
    );
  }

  subaccountDepositRecords(
    params: SubDepositRecordsRequestV2,
  ): Promise<APIResponse<any>> {
    return this.postPrivate('/api/v2/broker/subaccount-deposit', params);
  }

  subaccountWithdrawalRecords(
    params: SubWithdrawalRecordsRequestV2,
  ): Promise<APIResponse<any>> {
    return this.postPrivate('/api/v2/broker/subaccount-withdrawal', params);
  }

  /**
   *
   * * Broker | Subaccount
   *
   */

  createSubaccountApiKey(
    params: CreateSubAccountApiKeyRequestV2,
  ): Promise<APIResponse<any>> {
    return this.postPrivate(
      '/api/v2/broker/manage/create-subaccount-apikey',
      params,
    );
  }

  getSubaccountApiKey(params: { subUid: string }): Promise<APIResponse<any>> {
    return this.getPrivate(
      '/api/v2/broker/manage/subaccount-apikey-list',
      params,
    );
  }

  modifySubaccountApiKey(
    params: ModifySubAccountApiKeyRequestV2,
  ): Promise<APIResponse<any>> {
    return this.postPrivate(
      '/api/v2/broker/manage/modify-subaccount-apikey',
      params,
    );
  }

  /**
   *
   *
   * Margin
   *
   *
   */

  /**
   *
   * * Margin | Common
   *
   */

  getMarginCurrencies(): Promise<APIResponse<any>> {
    return this.get('/api/v2/margin/currencies');
  }

  /**
   *
   * * Margin | Cross/Isolated | Order Record
   *
   */

  getMarginBorrowHistory(
    marginType: MarginType,
    params: GetBorrowHistoryRequestV2,
  ): Promise<APIResponse<any>> {
    assertMarginType(marginType);
    return this.getPrivate(
      `/api/v2/margin/${marginType}/borrow-history`,
      params,
    );
  }

  getMarginRepayHistory(
    marginType: MarginType,
    params: GetRepayHistoryRequestV2,
  ): Promise<APIResponse<any>> {
    assertMarginType(marginType);
    return this.getPrivate(
      `/api/v2/margin/${marginType}/repay-history`,
      params,
    );
  }

  getMarginInterestHistory(
    marginType: MarginType,
    params: GetInterestHistoryRequestV2,
  ): Promise<APIResponse<any>> {
    assertMarginType(marginType);
    return this.getPrivate(
      `/api/v2/margin/${marginType}/interest-history`,
      params,
    );
  }

  getMarginLiquidationHistory(
    marginType: MarginType,
    params: GetLiquidationHistoryRequestV2,
  ): Promise<APIResponse<any>> {
    assertMarginType(marginType);
    return this.getPrivate(
      `/api/v2/margin/${marginType}/liquidation-history`,
      params,
    );
  }

  getMarginFinancialHistory(
    marginType: MarginType,
    params: GetFinancialHistoryRequestV2,
  ): Promise<APIResponse<any>> {
    assertMarginType(marginType);
    return this.getPrivate(
      `/api/v2/margin/${marginType}/financial-records`,
      params,
    );
  }

  /**
   *
   * * Margin | Cross/Isolated | Account
   *
   */

  getMarginAccountAssets(
    marginType: MarginType,
    params?: { coin?: string },
  ): Promise<APIResponse<any>> {
    assertMarginType(marginType);
    return this.getPrivate(
      `/api/v2/margin/${marginType}/account/assets`,
      params,
    );
  }

  marginBorrow(
    marginType: MarginType,
    params: {
      coin: string;
      borrowAmount: string;
      clientOid?: string;
    },
  ): Promise<APIResponse<any>> {
    assertMarginType(marginType);
    return this.postPrivate(
      `/api/v2/margin/${marginType}/account/borrow`,
      params,
    );
  }

  marginRepay(
    marginType: MarginType,
    params: {
      coin: string;
      repayAmount: string;
    },
  ): Promise<APIResponse<any>> {
    assertMarginType(marginType);
    return this.postPrivate(
      `/api/v2/margin/${marginType}/account/repay`,
      params,
    );
  }

  getMarginRiskRate(marginType: MarginType): Promise<APIResponse<any>> {
    assertMarginType(marginType);
    return this.getPrivate(`/api/v2/margin/${marginType}/account/risk-rate`);
  }

  getMarginMaxBorrowable(
    marginType: MarginType,
    params: { coin: string },
  ): Promise<APIResponse<any>> {
    assertMarginType(marginType);
    return this.getPrivate(
      '/api/v2/margin/${marginType}/account/max-borrowable-amount',
      params,
    );
  }

  getMarginMaxTransferable(
    marginType: MarginType,
    params: { coin: string },
  ): Promise<APIResponse<any>> {
    assertMarginType(marginType);
    return this.getPrivate(
      '/api/v2/margin/${marginType}/account/max-transfer-out-amount',
      params,
    );
  }

  getMarginInterestRateAndMaxBorrowable(
    marginType: MarginType,
    params: { coin: string },
  ): Promise<APIResponse<any>> {
    assertMarginType(marginType);
    return this.getPrivate(
      '/api/v2/margin/${marginType}/interest-rate-and-limit',
      params,
    );
  }

  getMarginTierConfiguration(
    marginType: MarginType,
    params: { coin: string },
  ): Promise<APIResponse<any>> {
    assertMarginType(marginType);
    return this.getPrivate(`/api/v2/margin/${marginType}/tier-data`, params);
  }

  marginFlashRepay(
    marginType: MarginType,
    params: { coin: string },
  ): Promise<APIResponse<any>> {
    assertMarginType(marginType);
    return this.postPrivate(
      '/api/v2/margin/${marginType}/account/flash-repay',
      params,
    );
  }

  getMarginFlashRepayResult(
    marginType: MarginType,
    params: { idList: string },
  ): Promise<APIResponse<any>> {
    assertMarginType(marginType);
    return this.getPrivate(
      '/api/v2/margin/${marginType}/account/query-flash-repay-status',
      params,
    );
  }

  /**
   *
   * * Margin | Cross/Isolated | Trade
   *
   */

  marginSubmitOrder(
    marginType: MarginType,
    params: MarginPlaceOrderRequestV2,
  ): Promise<APIResponse<any>> {
    assertMarginType(marginType);
    return this.postPrivate(`/api/v2/margin/${marginType}/place-order`, params);
  }

  marginBatchSubmitOrders(
    marginType: MarginType,
    params: MarginBatchOrdersRequestV2,
  ): Promise<APIResponse<any>> {
    assertMarginType(marginType);
    return this.postPrivate(
      `/api/v2/margin/${marginType}/batch-place-order`,
      params,
    );
  }

  marginCancelOrder(
    marginType: MarginType,
    params: {
      symbol: string;
      orderId?: string;
      clientOid?: string;
    },
  ): Promise<APIResponse<any>> {
    assertMarginType(marginType);
    return this.postPrivate(
      `/api/v2/margin/${marginType}/cancel-order`,
      params,
    );
  }

  marginBatchCancelOrders(
    marginType: MarginType,
    params: {
      symbol: string;
      orderIdList: string[];
    },
  ): Promise<APIResponse<any>> {
    assertMarginType(marginType);
    return this.postPrivate(
      '/api/v2/margin/${marginType}/batch-cancel-order',
      params,
    );
  }

  getMarginOpenOrders(
    marginType: MarginType,
    params: GetMarginCurrentOrdersRequestV2,
  ): Promise<APIResponse<any>> {
    assertMarginType(marginType);
    return this.getPrivate(`/api/v2/margin/${marginType}/open-orders`, params);
  }

  getMarginHistoricOrders(
    marginType: MarginType,
    params: GetHistoryOrdersRequestV2,
  ): Promise<APIResponse<any>> {
    assertMarginType(marginType);
    return this.getPrivate(
      `/api/v2/margin/${marginType}/history-orders`,
      params,
    );
  }

  getMarginHistoricOrderFills(
    marginType: MarginType,
    params: GetMarginOrderFillsRequestV2,
  ): Promise<APIResponse<any>> {
    assertMarginType(marginType);
    return this.getPrivate(`/api/v2/margin/${marginType}/fills`, params);
  }

  getMarginLiquidationOrders(
    marginType: MarginType,
    params: GetMarginLiquidationOrdersRequestV2,
  ): Promise<APIResponse<any>> {
    assertMarginType(marginType);
    return this.getPrivate(
      `/api/v2/margin/${marginType}/liquidation-order`,
      params,
    );
  }

  /**
   *
   *
   * Copy Trading
   *
   *
   */

  /**
   *
   *
   * Copy Trading | Future copy trading | Trader Api
   *
   *
   */

  getFuturesTraderCurrentOrder(
    params: GetFuturesTraderCurrentOrdersRequestV2,
  ): Promise<APIResponse<any>> {
    return this.getPrivate(
      '/api/v2/copy/mix-trader/order-current-track',
      params,
    );
  }

  getFuturesTraderHistoryOrders(
    params: GetFuturesTraderHistoryOrdersRequestV2,
  ): Promise<APIResponse<any>> {
    return this.getPrivate(
      '/api/v2/copy/mix-trader/order-history-track',
      params,
    );
  }

  modifyFuturesTraderOrderTPSL(
    params: ModifyFuturesTraderOrderTPSLRequestV2,
  ): Promise<APIResponse<any>> {
    return this.postPrivate(
      '/api/v2/copy/mix-trader/order-modify-tpsl',
      params,
    );
  }

  getFuturesTraderOrder(): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v2/copy/mix-trader/order-total-detail');
  }

  getFuturesTraderProfitHistory(): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v2/copy/mix-trader/profit-history-summarys');
  }

  getFuturesTraderProfitShareHistory(
    params: GetFuturesTraderProfitShareDetailRequestV2,
  ): Promise<APIResponse<any>> {
    return this.getPrivate(
      '/api/v2/copy/mix-trader/profit-history-details',
      params,
    );
  }

  closeFuturesTraderOrder(params: {
    trackingNo: string;
    symbol: string;
    productType: CopyTradingProductTypeV2;
  }): Promise<APIResponse<any>> {
    return this.postPrivate(
      '/api/v2/copy/mix-trader/order-close-positions',
      params,
    );
  }

  getFuturesTraderProfitShare(params?: {
    coin?: string;
    pageSize?: string;
    pageNo?: string;
  }): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v2/copy/mix-trader/profit-details', params);
  }

  getFuturesTraderProfitShareGroup(params?: {
    pageSize?: string;
    pageNo?: string;
  }): Promise<APIResponse<any>> {
    return this.getPrivate(
      '/api/v2/copy/mix-trader/profits-group-coin-date',
      params,
    );
  }

  getFuturesTraderSymbolSettings(params: {
    productType: CopyTradingProductTypeV2;
  }): Promise<APIResponse<any>> {
    return this.getPrivate(
      '/api/v2/copy/mix-trader/config-query-symbols',
      params,
    );
  }

  updateFuturesTraderSymbolSettings(params: {
    settingList: FuturesTraderSymbolSettingRequestV2[];
  }): Promise<APIResponse<any>> {
    return this.postPrivate(
      '/api/v2/copy/mix-trader/config-setting-symbols',
      params,
    );
  }

  updateFuturesTraderGlobalSettings(params?: {
    enable?: 'YES' | 'NO';
    showTotalEquity?: 'YES' | 'NO';
    showTpsl?: 'YES' | 'NO';
  }): Promise<APIResponse<any>> {
    return this.postPrivate(
      '/api/v2/copy/mix-trader/config-settings-base',
      params,
    );
  }

  getFuturesTraderFollowers(
    params?: GetFuturesTraderFollowersRequestV2,
  ): Promise<APIResponse<any>> {
    return this.getPrivate(
      '/api/v2/copy/mix-trader/config-query-followers',
      params,
    );
  }

  removeFuturesTraderFollower(params: {
    followerUid: string;
  }): Promise<APIResponse<any>> {
    return this.postPrivate(
      '/api/v2/copy/mix-trader/config-remove-follower',
      params,
    );
  }

  /**
   *
   *
   * Copy Trading | Future copy trading | Follower Api
   *
   *
   */

  getFuturesFollowerCurrentOrders(
    params: GetFollowerFuturesCurrentTrackingOrdersRequestV2,
  ): Promise<APIResponse<any>> {
    return this.getPrivate(
      '/api/v2/copy/mix-follower/query-current-orders',
      params,
    );
  }

  getFuturesFollowerHistoryOrders(
    params: GetFollowerFuturesHistoryTrackingOrdersRequestV2,
  ): Promise<APIResponse<any>> {
    return this.getPrivate(
      '/api/v2/copy/mix-follower/query-history-orders',
      params,
    );
  }

  updateFuturesFollowerTPSL(
    params: UpdateFuturesFollowerTPSLRequestV2,
  ): Promise<APIResponse<any>> {
    return this.postPrivate('/api/v2/copy/mix-follower/setting-tpsl', params);
  }

  updateFuturesFollowerSettings(
    params: UpdateFuturesFollowerSettingsRequestV2,
  ): Promise<APIResponse<any>> {
    return this.postPrivate('/api/v2/copy/mix-follower/settings', params);
  }

  getFuturesFollowerSettings(params: {
    traderId: string;
  }): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v2/copy/mix-follower/query-settings', params);
  }

  closeFuturesFollowerPositions(
    params: CloseFuturesFollowerPositionsRequestV2,
  ): Promise<APIResponse<any>> {
    return this.postPrivate(
      '/api/v2/copy/mix-follower/close-positions',
      params,
    );
  }

  getFuturesFollowerTraders(
    params: GetFuturesFollowerTradersRequestV2,
  ): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v2/copy/mix-follower/query-traders', params);
  }

  getFuturesFollowerFollowLimit(params: {
    symbol: string;
    productType: CopyTradingProductTypeV2;
  }): Promise<APIResponse<any>> {
    return this.getPrivate(
      '/api/v2/copy/mix-follower/query-quantity-limit',
      params,
    );
  }

  unfollowFuturesTrader(params: {
    traderId: string;
  }): Promise<APIResponse<any>> {
    return this.postPrivate('/api/v2/copy/mix-follower/cancel-trader', params);
  }

  /**
   *
   *
   * Copy Trading | Future copy trading | Broker api
   *
   *
   */

  getBrokerTraders(params: object): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v2/copy/mix-broker/query-traders', params);
  }

  getBrokerTradersHistoricalOrders(params: object): Promise<APIResponse<any>> {
    return this.getPrivate(
      '/api/v2/copy/mix-broker/query-history-traces',
      params,
    );
  }

  getBrokerTradersPendingOrders(params: object): Promise<APIResponse<any>> {
    return this.getPrivate(
      '/api/v2/copy/mix-broker/query-current-traces',
      params,
    );
  }

  /**
   *
   *
   * Copy Trading | Spot copy trading | Trader api
   *
   *
   */

  getSpotTraderProfit(): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v2/copy/spot-trader/profit-summarys');
  }

  getSpotTraderHistoryProfit(
    params: GetSpotTraderHistoryProfitRequestV2,
  ): Promise<APIResponse<any>> {
    return this.getPrivate(
      '/api/v2/copy/spot-trader/profit-history-details',
      params,
    );
  }

  getSpotTraderUnrealizedProfit(params?: {
    coin?: string;
    pageNo?: string;
    pageSize?: string;
  }): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v2/copy/spot-trader/profit-details', params);
  }

  getSpotTraderOrder(): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v2/copy/spot-trader/order-total-detail');
  }

  modifySpotTraderOrderTPSL(params: {
    trackingNo: string;
    stopSurplusPrice?: string;
    stopLossPrice?: string;
  }): Promise<APIResponse<any>> {
    return this.postPrivate(
      '/api/v2/copy/spot-trader/order-modify-tpsl',
      params,
    );
  }

  getSpotTraderHistoryOrders(
    params: GetSpotTraderHistoryOrdersRequestV2,
  ): Promise<APIResponse<any>> {
    return this.getPrivate(
      '/api/v2/copy/spot-trader/order-history-track',
      params,
    );
  }

  getSpotTraderCurrentOrders(
    params: GetSpotTraderCurrentOrdersRequestV2,
  ): Promise<APIResponse<any>> {
    return this.getPrivate(
      '/api/v2/copy/spot-trader/order-current-track',
      params,
    );
  }

  sellSpotTrader(params: {
    trackingNoList: string[];
    symbol: string;
  }): Promise<APIResponse<any>> {
    return this.postPrivate(
      '/api/v2/copy/spot-trader/order-close-tracking',
      params,
    );
  }

  getSpotTraderSymbolSettings(params: {
    symbolList: string[];
    settingType: 'add' | 'delete';
  }): Promise<APIResponse<any>> {
    return this.postPrivate(
      '/api/v2/copy/spot-trader/config-setting-symbols',
      params,
    );
  }

  removeSpotTraderFollowers(params: {
    followerUid: string;
  }): Promise<APIResponse<any>> {
    return this.postPrivate(
      '/api/v2/copy/spot-trader/config-remove-follower',
      params,
    );
  }

  getSpotTraderConfiguration(): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v2/copy/spot-trader/config-query-settings');
  }

  getSpotTraderFollowers(
    params: GetSpotTraderFollowersRequestV2,
  ): Promise<APIResponse<any>> {
    return this.getPrivate(
      '/api/v2/copy/spot-trader/config-query-followers',
      params,
    );
  }

  /**
   *
   *
   * Copy Trading | Spot copy trading | Follower api
   *
   *
   */

  cancelSpotFollowerOrder(params: {
    trackingNoList: string[];
  }): Promise<APIResponse<any>> {
    return this.postPrivate('/api/v2/copy/spot-follower/stop-order', params);
  }

  updateSpotFollowerSettings(params: {
    traderId: string;
    autoCopy?: 'on' | 'off';
    mode?: 'basic' | 'advanced';
    settings: SpotFollowerCopyTradeSettingV2[];
  }): Promise<APIResponse<any>> {
    return this.postPrivate('/api/v2/copy/spot-follower/settings', params);
  }

  updateSpotFollowerTPSL(params: {
    trackingNo: string;
    stopSurplusPrice?: string;
    stopLossPrice?: string;
  }): Promise<APIResponse<any>> {
    return this.postPrivate('/api/v2/copy/spot-follower/setting-tpsl', params);
  }

  getSpotFollowerTraders(params?: {
    pageNo?: string;
    pageSize?: string;
    startTime?: string;
    endTime?: string;
  }): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v2/copy/spot-follower/query-traders', params);
  }

  getSpotFollowerCurrentTraderSymbols(params: {
    traderId: string;
  }): Promise<APIResponse<any>> {
    return this.getPrivate(
      '/api/v2/copy/spot-follower/query-trader-symbols',
      params,
    );
  }

  getSpotFollowerSettings(params: {
    traderId: string;
  }): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v2/copy/spot-follower/query-settings', params);
  }

  getSpotFollowerHistoryOrders(
    params: GetSpotFollowerHistoryOrdersRequestV2,
  ): Promise<APIResponse<any>> {
    return this.getPrivate(
      '/api/v2/copy/spot-follower/query-history-orders',
      params,
    );
  }

  getSpotFollowerOpenOrders(
    params: GetSpotFollowerOpenOrdersRequestV2,
  ): Promise<APIResponse<any>> {
    return this.getPrivate(
      '/api/v2/copy/spot-follower/query-current-orders',
      params,
    );
  }

  sellSpotFollower(params: {
    trackingNoList: string[];
    symbol: string;
  }): Promise<APIResponse<any>> {
    return this.postPrivate(
      '/api/v2/copy/spot-follower/order-close-tracking',
      params,
    );
  }

  unfollowSpotTrader(params: { traderId: string }): Promise<APIResponse<any>> {
    return this.postPrivate('/api/v2/copy/spot-follower/cancel-trader', params);
  }

  /**
   *
   *
   * Earn | Savings
   *
   *
   */

  getEarnSavingsProducts(params?: {
    coin?: string;
    filter?: string;
  }): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v2/earn/savings/product', params);
  }

  getEarnSavingsAccount(): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v2/earn/savings/account');
  }

  getEarnSavingsAssets(
    params: GetEarnSavingsAssetsRequestV2,
  ): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v2/earn/savings/assets', params);
  }

  getEarnSavingsRecords(
    params: GetEarnSavingsRecordsRequestV2,
  ): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v2/earn/savings/records', params);
  }

  getEarnSavingsSubscription(params: {
    productId: string;
    periodType: string;
  }): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v2/earn/savings/subscribe-info', params);
  }

  earnSubscribeSavings(params: {
    productId: string;
    periodType: string;
    amount: string;
  }): Promise<APIResponse<any>> {
    return this.postPrivate('/api/v2/earn/savings/subscribe', params);
  }

  getEarnSavingsSubscriptionResult(params: {
    productId: string;
    periodType: string;
  }): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v2/earn/savings/subscribe-result', params);
  }

  earnRedeemSavings(params: RedeemSavingsRequestV2): Promise<APIResponse<any>> {
    return this.postPrivate('/api/v2/earn/savings/redeem', params);
  }

  getEarnSavingsRedemptionResult(params: {
    orderId: string;
    periodType: string;
  }): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v2/earn/savings/redeem-result', params);
  }

  /**
   *
   *
   * Earn | Earn Account
   *
   *
   */

  getEarnAccount(params?: { coin?: string }): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v2/earn/account/assets', params);
  }

  /**
   *
   *
   * Earn | Shark Fin
   *
   *
   */

  getSharkfinProducts(params: {
    coin: string;
    limit?: string;
    idLessThan?: string;
  }): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v2/earn/sharkfin/product', params);
  }

  getSharkfinAccount(): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v2/earn/sharkfin/account');
  }

  getSharkfinAssets(
    params: GetSharkfinAssetsRequestV2,
  ): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v2/earn/sharkfin/assets', params);
  }

  getSharkfinRecords(
    params: GetSharkfinRecordsRequestV2,
  ): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v2/earn/sharkfin/records', params);
  }

  getSharkfinSubscription(params: {
    productId: string;
  }): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v2/earn/sharkfin/subscribe-info', params);
  }

  subscribeSharkfin(params: {
    productId: string;
    amount: string;
  }): Promise<APIResponse<any>> {
    return this.postPrivate('/api/v2/earn/sharkfin/subscribe', params);
  }

  getSharkfinSubscriptionResult(params: {
    orderId: string;
  }): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v2/earn/sharkfin/subscribe-result', params);
  }

  /**
   *
   *
   * Earn | Loan
   *
   *
   */

  getLoanCurrencies(params?: { coin?: string }): Promise<APIResponse<any>> {
    return this.get('/api/v2/earn/loan/public/coinInfos', params);
  }

  getLoanEstInterestAndBorrowable(
    params: GetLoanEstInterestAndBorrowableRequestV2,
  ): Promise<APIResponse<any>> {
    return this.get('/api/v2/earn/loan/public/hour-interest', params);
  }

  borrowLoan(params: BorrowLoanRequestV2): Promise<APIResponse<any>> {
    return this.postPrivate('/api/v2/earn/loan/borrow', params);
  }

  getOngoingLoanOrders(params?: {
    orderId?: string;
    loanCoin?: string;
    pledgeCoin?: string;
  }): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v2/earn/loan/ongoing-orders', params);
  }

  repayLoan(params: RepayLoanRequestV2): Promise<APIResponse<any>> {
    return this.postPrivate('/api/v2/earn/loan/repay', params);
  }

  getRepayHistory(
    params: GetLoanRepayHistoryRequestV2,
  ): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v2/earn/loan/repay-history', params);
  }

  updateLoanPledgeRate(
    params: ModifyLoanPledgeRateRequestV2,
  ): Promise<APIResponse<any>> {
    return this.postPrivate('/api/v2/earn/loan/revise-pledge', params);
  }

  getLoanPledgeRateHistory(
    params: GetLoanPledgeRateHistoryRequestV2,
  ): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v2/earn/loan/revise-history', params);
  }

  getLoanHistory(params: GetLoanHistoryRequestV2): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v2/earn/loan/borrow-history', params);
  }

  getLoanDebts(): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v2/earn/loan/debts');
  }

  getLoanLiquidationRecords(
    params: GetLiquidationRecordsRequestV2,
  ): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v2/earn/loan/reduces', params);
  }
}
