type SpotKlineIntervalV2 =
  | '1min'
  | '5min'
  | '15min'
  | '30min'
  | '1h'
  | '4h'
  | '6h'
  | '12h'
  | '1day'
  | '3day'
  | '1week'
  | '1M'
  | '6Hutc'
  | '12Hutc'
  | '1Dutc'
  | '3Dutc'
  | '1Wutc'
  | '1Mutc';

export interface SpotCandlesRequestV2 {
  symbol: string;
  granularity: SpotKlineIntervalV2;
  startTime?: string;
  endTime?: string;
  limit?: string;
}

export interface SpotHistoricCandlesRequestV2 {
  symbol: string;
  granularity: SpotKlineIntervalV2;
  endTime?: string;
  limit?: string;
}

export interface SpotHistoricTradesRequestV2 {
  symbol: string;
  limit?: string;
  idLessThan?: string;
  startTime?: string;
  endTime?: string;
}

/**
 *
 * * Spot | Trade
 *
 */

export type SpotOrderSide = 'buy' | 'sell';

export type SpotOrderType = 'limit' | 'market';

export type SpotOrderForce = 'gtc' | 'post_only' | 'fok' | 'ioc';

export type SpotTPSLType = 'normal' | 'tpsl';

export type SpotSTPMode =
  | 'none'
  | 'cancel_taker'
  | 'cancel_maker'
  | 'cancel_both';

export type SpotBatchMode = 'single' | 'multiple';

export interface SpotOrderRequestV2 {
  symbol: string;
  side: SpotOrderSide;
  orderType: SpotOrderType;
  force: SpotOrderForce;
  price?: string;
  size: string;
  clientOid?: string;
  triggerPrice?: string;
  tpslType?: SpotTPSLType;
  requestTime?: string;
  receiveWindow?: string;
  stpMode?: SpotSTPMode;
  presetTakeProfitPrice?: string;
  executeTakeProfitPrice?: string;
  presetStopLossPrice?: string;
  executeStopLossPrice?: string;
}

export interface SpotCancelandSubmitOrderRequestV2 {
  symbol: string;
  price: string;
  size: string;
  orderId?: string;
  clientOid?: string;
  newClientOid?: string;
  presetTakeProfitPrice?: string;
  executeTakeProfitPrice?: string;
  presetStopLossPrice?: string;
  executeStopLossPrice?: string;
}

export interface SpotCancelOrderRequestV2 {
  symbol: string;
  tpslType?: SpotTPSLType;
  orderId?: string;
  clientOid?: string;
}

export interface SpotBatchOrderRequestItemV2 {
  symbol?: string;
  side: SpotOrderSide;
  orderType: SpotOrderType;
  force: SpotOrderForce;
  price?: string;
  size: string;
  clientOid?: string;
  stpMode?: SpotSTPMode;
  presetTakeProfitPrice?: string;
  executeTakeProfitPrice?: string;
  presetStopLossPrice?: string;
  executeStopLossPrice?: string;
}

export interface SpotBatchOrderRequestV2 {
  symbol?: string;
  batchMode?: SpotBatchMode;
  orderList: SpotBatchOrderRequestItemV2[];
}

export interface SpotBatchCancelOrderRequestV2 {
  symbol?: string;
  batchMode?: SpotBatchMode;
  orderList: {
    symbol?: string;
    orderId?: string;
    clientOid?: string;
  }[];
}

export interface GetSpotOrderInfoRequestV2 {
  orderId?: string;
  clientOid?: string;
  requestTime?: string;
  receiveWindow?: string;
}

export interface GetSpotOpenOrdersRequestV2 {
  symbol?: string;
  startTime?: string;
  endTime?: string;
  idLessThan?: string;
  limit?: string;
  orderId?: string;
  tpslType?: SpotTPSLType;
  requestTime?: string;
  receiveWindow?: string;
}

export interface GetSpotHistoryOrdersRequestV2 {
  symbol?: string;
  startTime?: string;
  endTime?: string;
  idLessThan?: string;
  limit?: string;
  orderId?: string;
  tpslType?: SpotTPSLType;
  requestTime?: string;
  receiveWindow?: string;
}

export interface GetSpotFillsRequestV2 {
  symbol: string;
  orderId?: string;
  startTime?: string;
  endTime?: string;
  limit?: string;
  idLessThan?: string;
}

/**
 *
 * * Spot | Trigger Orders
 *
 */

export type SpotPlanType = 'amount' | 'total';

export type SpotTriggerType = 'fill_price' | 'mark_price';

export interface SpotPlanOrderRequestV2 {
  symbol: string;
  side: SpotOrderSide;
  triggerPrice: string;
  orderType: SpotOrderType;
  executePrice?: string;
  planType?: SpotPlanType;
  size: string;
  triggerType: SpotTriggerType;
  clientOid?: string;
  force?: SpotOrderForce;
  stpMode?: SpotSTPMode;
}

export interface SpotModifyPlanOrderRequestV2 {
  orderId?: string;
  clientOid?: string;
  triggerPrice: string;
  orderType: SpotOrderType;
  executePrice?: string;
  size: string;
}

export interface GetSpotCurrentPlanOrdersRequestV2 {
  symbol: string;
  limit?: string;
  idLessThan?: string;
  startTime?: string;
  endTime?: string;
}

export interface GetSpotHistoryPlanOrdersRequestV2 {
  symbol: string;
  startTime: string;
  endTime: string;
  limit?: string;
}

/**
 *
 * * Spot | Account
 *
 */

export type SpotBillGroupType =
  | 'deposit'
  | 'withdraw'
  | 'transaction'
  | 'transfer'
  | 'other';

export type SpotBusinessType =
  | 'deposit'
  | 'withdraw'
  | 'buy'
  | 'sell'
  | 'deduction of handling fee'
  | 'transfer-in'
  | 'transfer-out'
  | 'rebate rewards'
  | 'airdrop rewards'
  | 'USDT contract rewards'
  | 'mix contract rewards'
  | 'system lock'
  | 'user lock';

export type SpotAccountType =
  | 'spot'
  | 'p2p'
  | 'coin_futures'
  | 'usdt_futures'
  | 'usdc_futures'
  | 'crossed_margin'
  | 'isolated_margin';

export interface GetSpotAccountBillsRequestV2 {
  coin?: string;
  groupType?: SpotBillGroupType;
  businessType?: SpotBusinessType;
  startTime?: string;
  endTime?: string;
  limit?: string;
  idLessThan?: string;
}

export interface SpotTransferRequestV2 {
  fromType: SpotAccountType;
  toType: SpotAccountType;
  amount: string;
  coin: string;
  symbol: string;
  clientOid?: string;
}

export interface SpotSubAccountTransferRequestV2 {
  fromType: SpotAccountType;
  toType: SpotAccountType;
  amount: string;
  coin: string;
  symbol?: string;
  clientOid?: string;
  fromUserId: string;
  toUserId: string;
}

export interface SpotWithdrawalRequestV2 {
  coin: string;
  transferType: 'on_chain' | 'internal_transfer';
  address: string;
  chain?: string;
  innerToType?: 'email' | 'mobile' | 'uid';
  areaCode?: string;
  tag?: string;
  size: string;
  remark?: string;
  clientOid?: string;
}

export interface SpotMainSubTransferRecordRequestV2 {
  coin?: string;
  role?: 'initiator' | 'receiver';
  subUid?: string;
  startTime?: string;
  endTime?: string;
  clientOid?: string;
  limit?: string;
  idLessThan?: string;
}

export interface GetSpotTransferRecordRequestV2 {
  coin: string;
  fromType: SpotAccountType;
  startTime?: string;
  endTime?: string;
  clientOid?: string;
  limit?: string;
  idLessThan?: string;
}

export interface GetSpotSubAccountDepositRecordRequestV2 {
  subUid: string;
  coin?: string;
  startTime?: string;
  endTime?: string;
  idLessThan?: string;
  limit?: string;
}

export interface GetSpotWithdrawalRecordRequestV2 {
  coin?: string;
  clientOid?: string;
  startTime: string;
  endTime: string;
  idLessThan?: string;
  orderId?: string;
  limit?: string;
}

export interface GetSpotDepositRecordRequestV2 {
  coin?: string;
  orderId?: string;
  startTime: string;
  endTime: string;
  idLessThan?: string;
  limit?: string;
}
