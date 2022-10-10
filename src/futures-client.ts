import {
  APIResponse,
  KlineInterval,
  FuturesProductType,
  FuturesAccountBillRequest,
  FuturesBusinessBillRequest,
  NewFuturesOrder,
  NewBatchFuturesOrder,
  FuturesPagination,
  NewFuturesPlanOrder,
  ModifyFuturesPlanOrder,
  ModifyFuturesPlanOrderTPSL,
  NewFuturesPlanPositionTPSL,
  ModifyFuturesPlanStopOrder,
  CancelFuturesPlanTPSL,
  HistoricPlanOrderTPSLRequest,
  NewFuturesPlanStopOrder,
  FuturesAccount,
  FuturesSymbolRule,
} from './types';
import { REST_CLIENT_TYPE_ENUM } from './util';
import BaseRestClient from './util/BaseRestClient';

/**
 * REST API client
 */
export class FuturesClient extends BaseRestClient {
  getClientType() {
    return REST_CLIENT_TYPE_ENUM.futures;
  }

  /**
   *
   * Market
   *
   */

  /** Get Symbols : Get basic configuration information of all trading pairs (including rules) */
  getSymbols(
    productType: FuturesProductType
  ): Promise<APIResponse<FuturesSymbolRule[]>> {
    return this.get('/api/mix/v1/market/contracts', { productType });
  }

  /** Get Depth */
  getDepth(symbol: string, limit?: string): Promise<APIResponse<any>> {
    return this.get('/api/mix/v1/market/depth', { symbol, limit });
  }

  /** Get Single Symbol Ticker */
  getTicker(symbol: string): Promise<APIResponse<any>> {
    return this.get('/api/mix/v1/market/ticker', { symbol });
  }

  /** Get All Tickers */
  getAllTickers(productType: FuturesProductType): Promise<APIResponse<any>> {
    return this.get('/api/mix/v1/market/tickers', { productType });
  }

  /** Get Market Trades */
  getMarketTrades(symbol: string, limit?: string): Promise<APIResponse<any>> {
    return this.get('/api/mix/v1/market/fills', { symbol, limit });
  }

  /** Get Candle Data */
  getCandles(
    symbol: string,
    granularity: KlineInterval,
    startTime: string,
    endTime: string
  ): Promise<any> {
    return this.get('/api/mix/v1/market/candles', {
      symbol,
      granularity,
      startTime,
      endTime,
    });
  }

  /** Get symbol index price */
  getIndexPrice(symbol: string): Promise<APIResponse<any>> {
    return this.get('/api/mix/v1/market/index', { symbol });
  }

  /** Get symbol next funding time */
  getNextFundingTime(symbol: string): Promise<APIResponse<any>> {
    return this.get('/api/mix/v1/market/funding-time', { symbol });
  }

  /** Get Withdraw List */
  getHistoricFundingRate(
    symbol: string,
    pageSize?: string,
    pageNo?: string,
    nextPage?: boolean
  ): Promise<APIResponse<any>> {
    return this.get('/api/mix/v1/market/history-fundRate', {
      symbol,
      nextPage,
      pageSize,
      pageNo,
    });
  }

  /** Get symbol current funding time */
  getCurrentFundingRate(symbol: string): Promise<APIResponse<any>> {
    return this.get('/api/mix/v1/market/current-fundRate', { symbol });
  }

  /** Get symbol open interest */
  getOpenInterest(symbol: string): Promise<APIResponse<any>> {
    return this.get('/api/mix/v1/market/open-interest', { symbol });
  }

  /** Get symbol mark price */
  getMarkPrice(symbol: string): Promise<APIResponse<any>> {
    return this.get('/api/mix/v1/market/mark-price', { symbol });
  }

  /** Get symbol min/max leverage rules */
  getLeverageMinMax(symbol: string): Promise<APIResponse<any>> {
    return this.get('/api/mix/v1/market/symbol-leverage', { symbol });
  }

  /**
   *
   * Account Endpoints
   *
   */

  /** Get Single Account */
  getAccount(
    symbol: string,
    marginCoin: string
  ): Promise<APIResponse<FuturesAccount>> {
    return this.getPrivate('/api/mix/v1/account/account', {
      symbol,
      marginCoin,
    });
  }

  /** Get Account List */
  getAccounts(productType: FuturesProductType): Promise<APIResponse<any>> {
    return this.getPrivate('/api/mix/v1/account/accounts', { productType });
  }

  /**
   * This interface is only used to calculate the maximum number of positions that can be opened when the user does not hold a position by default.
   * The result does not represent the actual number of positions opened.
   */
  getOpenCount(
    symbol: string,
    marginCoin: string,
    openPrice: number,
    openAmount: number,
    leverage?: number
  ): Promise<APIResponse<any>> {
    return this.postPrivate('/api/mix/v1/account/open-count', {
      symbol,
      marginCoin,
      openPrice,
      openAmount,
      leverage,
    });
  }

  /** Change Leverage */
  setLeverage(
    symbol: string,
    marginCoin: string,
    leverage: string,
    holdSide?: string
  ): Promise<APIResponse<any>> {
    return this.postPrivate('/api/mix/v1/account/setLeverage', {
      symbol,
      marginCoin,
      leverage,
      holdSide,
    });
  }

  /** Change Margin */
  setMargin(
    symbol: string,
    marginCoin: string,
    amount: string,
    holdSide?: string
  ): Promise<APIResponse<any>> {
    return this.postPrivate('/api/mix/v1/account/setMargin', {
      symbol,
      marginCoin,
      amount,
      holdSide,
    });
  }

  /** Change Margin Mode */
  setMarginMode(
    symbol: string,
    marginCoin: string,
    marginMode: 'fixed' | 'crossed'
  ): Promise<APIResponse<any>> {
    return this.postPrivate('/api/mix/v1/account/setMarginMode', {
      symbol,
      marginCoin,
      marginMode,
    });
  }

  /** Get Symbol Position */
  getPosition(symbol: string, marginCoin?: string): Promise<APIResponse<any>> {
    return this.getPrivate('/api/mix/v1/position/singlePosition', {
      symbol,
      marginCoin,
    });
  }

  /** Get All Position */
  getPositions(
    productType: FuturesProductType,
    marginCoin?: string
  ): Promise<APIResponse<any>> {
    return this.getPrivate('/api/mix/v1/position/allPosition', {
      productType,
      marginCoin,
    });
  }

  /** Get Account Bill */
  getAccountBill(params: FuturesAccountBillRequest): Promise<APIResponse<any>> {
    return this.getPrivate('/api/mix/v1/account/accountBill', params);
  }

  /** Get Business Account Bill */
  getBusinessBill(
    params: FuturesBusinessBillRequest
  ): Promise<APIResponse<any>> {
    return this.getPrivate('/api/mix/v1/account/accountBusinessBill', params);
  }

  /**
   *
   * Trade Endpoints
   *
   */

  /** Place Order */
  submitOrder(params: NewFuturesOrder): Promise<APIResponse<any>> {
    return this.postPrivate('/api/mix/v1/order/placeOrder', params);
  }

  /** Batch Order */
  batchSubmitOrder(
    symbol: string,
    marginCoin: string,
    orders: NewBatchFuturesOrder[]
  ): Promise<APIResponse<any>> {
    return this.postPrivate('/api/mix/v1/order/batch-orders', {
      symbol,
      marginCoin,
      orderDataList: orders,
    });
  }

  /** Cancel Order */
  cancelOrder(
    symbol: string,
    marginCoin: string,
    orderId: string
  ): Promise<APIResponse<any>> {
    return this.postPrivate('/api/mix/v1/order/cancel-order', {
      symbol,
      marginCoin,
      orderId,
    });
  }

  /** Batch Cancel Order */
  batchCancelOrder(
    symbol: string,
    marginCoin: string,
    orderIds: string[]
  ): Promise<APIResponse<any>> {
    return this.postPrivate('/api/mix/v1/order/cancel-batch-orders', {
      symbol,
      marginCoin,
      orderIds,
    });
  }

  /** Cancel All Order */
  cancelAllOrders(
    productType: FuturesProductType,
    marginCoin: string
  ): Promise<APIResponse<any>> {
    return this.postPrivate('/api/mix/v1/order/cancel-all-orders', {
      productType,
      marginCoin,
    });
  }

  /** Get Open Order */
  getOpenSymbolOrders(symbol: string): Promise<APIResponse<any>> {
    return this.getPrivate('/api/mix/v1/order/current', { symbol });
  }

  /** Get All Open Order */
  getOpenOrders(
    productType: FuturesProductType,
    marginCoin: string
  ): Promise<APIResponse<any>> {
    return this.getPrivate('/api/mix/v1/order/marginCoinCurrent', {
      productType,
      marginCoin,
    });
  }

  /** Get History Orders */
  getOrderHistory(
    symbol: string,
    startTime: string,
    endTime: string,
    pageSize: string,
    lastEndId?: string,
    isPre?: boolean
  ): Promise<APIResponse<any>> {
    return this.getPrivate('/api/mix/v1/order/history', {
      symbol,
      startTime,
      endTime,
      pageSize,
      lastEndId,
      isPre,
    });
  }

  /** Get ProductType History Orders */
  getProductTypeOrderHistory(
    productType: FuturesProductType,
    startTime: string,
    endTime: string,
    pageSize: string,
    lastEndId?: string,
    isPre?: boolean
  ): Promise<APIResponse<any>> {
    return this.getPrivate('/api/mix/v1/order/historyProductType', {
      productType,
      startTime,
      endTime,
      pageSize,
      lastEndId,
      isPre,
    });
  }

  /** Get order details */
  getOrder(
    symbol: string,
    orderId?: string,
    clientOid?: string
  ): Promise<APIResponse<any>> {
    return this.getPrivate('/api/mix/v1/order/detail', {
      symbol,
      orderId,
      clientOid,
    });
  }

  /** Get transaction details / history (fills)  */
  getOrderFills(
    symbol: string,
    orderId?: string,
    pagination?: FuturesPagination
  ): Promise<APIResponse<any>> {
    return this.getPrivate('/api/mix/v1/order/fills', {
      symbol,
      orderId,
      ...pagination,
    });
  }

  /** Get ProductType Order fill detail */
  getProductTypeOrderFills(
    productType: FuturesProductType,
    pagination?: FuturesPagination
  ): Promise<APIResponse<any>> {
    return this.getPrivate('/api/mix/v1/order/allFills', {
      productType: productType.toUpperCase(),
      ...pagination,
    });
  }

  /** Place Plan order */
  submitPlanOrder(params: NewFuturesPlanOrder): Promise<APIResponse<any>> {
    return this.postPrivate('/api/mix/v1/plan/placePlan', params);
  }

  /** Modify Plan Order */
  modifyPlanOrder(params: ModifyFuturesPlanOrder): Promise<APIResponse<any>> {
    return this.postPrivate('/api/mix/v1/plan/modifyPlan', params);
  }

  /** Modify Plan Order TPSL */
  modifyPlanOrderTPSL(
    params: ModifyFuturesPlanOrderTPSL
  ): Promise<APIResponse<any>> {
    return this.postPrivate('/api/mix/v1/plan/modifyPlanPreset', params);
  }

  /** Place Stop order */
  submitStopOrder(params: NewFuturesPlanStopOrder): Promise<APIResponse<any>> {
    return this.postPrivate('/api/mix/v1/plan/placeTPSL', params);
  }

  /** Place Position TPSL */
  submitPositionTPSL(
    params: NewFuturesPlanPositionTPSL
  ): Promise<APIResponse<any>> {
    return this.postPrivate('/api/mix/v1/plan/placePositionsTPSL', params);
  }

  /** Modify Stop Order */
  modifyStopOrder(
    params: ModifyFuturesPlanStopOrder
  ): Promise<APIResponse<any>> {
    return this.postPrivate('/api/mix/v1/plan/modifyTPSLPlan', params);
  }

  /** Cancel Plan Order TPSL */
  cancelPlanOrderTPSL(
    params: CancelFuturesPlanTPSL
  ): Promise<APIResponse<any>> {
    return this.postPrivate('/api/mix/v1/plan/cancelPlan', params);
  }

  /** Get Plan Order (TPSL) List */
  getPlanOrderTPSLs(
    symbol: string,
    isPlan?: string,
    productType?: FuturesProductType
  ): Promise<APIResponse<any>> {
    return this.getPrivate('/api/mix/v1/plan/currentPlan', {
      symbol,
      isPlan,
      productType,
    });
  }

  /** Get History Plan Orders (TPSL) */
  getHistoricPlanOrdersTPSL(
    params: HistoricPlanOrderTPSLRequest
  ): Promise<APIResponse<any>> {
    return this.getPrivate('/api/mix/v1/plan/historyPlan', params);
  }

  /**
   *
   * Trade Endpoints
   *
   */

  /** Get Trader Open order */
  getCopyTraderOpenOrder(
    symbol: string,
    productType: FuturesProductType,
    pageSize: number,
    pageNo: number
  ): Promise<APIResponse<any>> {
    return this.getPrivate('/api/mix/v1/trace/currentTrack', {
      symbol,
      productType,
      pageSize,
      pageNo,
    });
  }

  /** Get Followers Open Order */
  getCopyFollowersOpenOrder(
    symbol: string,
    productType: FuturesProductType,
    pageSize: number,
    pageNo: number
  ): Promise<APIResponse<any>> {
    return this.getPrivate('/api/mix/v1/trace/followerOrder', {
      symbol,
      productType,
      pageSize,
      pageNo,
    });
  }

  /** Trader Close Position */
  closeCopyTraderPosition(
    symbol: string,
    trackingNo: string
  ): Promise<APIResponse<any>> {
    return this.postPrivate('/api/mix/v1/trace/closeTrackOrder', {
      symbol,
      trackingNo,
    });
  }

  /** Trader Modify TPSL */
  modifyCopyTraderTPSL(
    symbol: string,
    trackingNo: string,
    changes?: {
      stopProfitPrice?: number;
      stopLossPrice?: number;
    }
  ): Promise<APIResponse<any>> {
    return this.postPrivate('/api/mix/v1/trace/modifyTPSL', {
      symbol,
      trackingNo,
      ...changes,
    });
  }

  /** Get Traders History Orders */
  getCopyTraderOrderHistory(
    startTime: string,
    endTime: string,
    pageSize: number,
    pageNo: number
  ): Promise<APIResponse<any>> {
    return this.getPrivate('/api/mix/v1/trace/historyTrack', {
      startTime,
      endTime,
      pageSize,
      pageNo,
    });
  }

  /** Get Trader Profit Summary */
  getCopyTraderProfitSummary(): Promise<APIResponse<any>> {
    return this.getPrivate('/api/mix/v1/trace/summary');
  }

  /** Get Trader History Profit Summary (according to settlement currency) */
  getCopyTraderHistoricProfitSummary(): Promise<APIResponse<any>> {
    return this.getPrivate('/api/mix/v1/trace/profitSettleTokenIdGroup');
  }

  /** Get Trader History Profit Summary (according to settlement currency and date) */
  getCopyTraderHistoricProfitSummaryByDate(
    marginCoin: string,
    dateMs: string,
    pageSize: number,
    pageNo: number
  ): Promise<APIResponse<any>> {
    return this.getPrivate('/api/mix/v1/trace/profitDateGroupList', {
      marginCoin,
      date: dateMs,
      pageSize,
      pageNo,
    });
  }

  /** Get Trader Histroy Profit Detail */
  getCopyTraderHistoricProfitDetail(
    marginCoin: string,
    dateMs: string,
    pageSize: number,
    pageNo: number
  ): Promise<APIResponse<any>> {
    return this.getPrivate('/api/mix/v1/trace/profitDateList', {
      marginCoin,
      date: dateMs,
      pageSize,
      pageNo,
    });
  }

  /** Get Trader Profits Details */
  getCopyTraderProfitDetails(
    pageSize: number,
    pageNo: number
  ): Promise<APIResponse<any>> {
    return this.getPrivate('/api/mix/v1/trace/waitProfitDateList', {
      pageSize,
      pageNo,
    });
  }

  /** Get CopyTrade Symbols */
  getCopyTraderSymbols(): Promise<APIResponse<any>> {
    return this.getPrivate('/api/mix/v1/trace/traderSymbols');
  }

  /** Trader Change CopyTrade symbol */
  setCopyTraderSymbols(
    symbol: string,
    operation: 'add' | 'delete'
  ): Promise<APIResponse<any>> {
    return this.postPrivate('/api/mix/v1/trace/setUpCopySymbols', {
      symbol,
      operation,
    });
  }
}
