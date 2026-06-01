export type StrategyOrderTypeV3 = 'tpsl' | 'trigger';

export type StrategyOrderStatusV3 =
  | 'pending'
  | 'success'
  | 'failed'
  | 'cancelled'
  | 'submitting';

export type StrategyTriggerByV3 = 'market' | 'mark';

export type StrategyTriggerOrderTypeV3 = 'limit' | 'market';

export interface PlaceStrategyOrderRequestV3 {
  category: 'USDT-FUTURES' | 'COIN-FUTURES' | 'USDC-FUTURES';
  symbol: string;
  clientOid?: string;
  type?: StrategyOrderTypeV3;
  tpslMode?: 'full' | 'partial';
  /** Required when tpslMode=partial or for trigger orders */
  qty?: string;
  side?: 'buy' | 'sell';
  posSide?: 'long' | 'short';
  reduceOnly?: 'yes' | 'no';
  tpTriggerBy?: StrategyTriggerByV3;
  slTriggerBy?: StrategyTriggerByV3;
  takeProfit?: string;
  stopLoss?: string;
  tpOrderType?: StrategyTriggerOrderTypeV3;
  slOrderType?: StrategyTriggerOrderTypeV3;
  tpLimitPrice?: string;
  slLimitPrice?: string;
  triggerBy?: StrategyTriggerByV3;
  triggerPrice?: string;
  triggerOrderType?: StrategyTriggerOrderTypeV3;
  triggerOrderPrice?: string;
}

export interface ModifyStrategyOrderRequestV3 {
  orderId?: string;
  clientOid?: string;
  qty: string;
  tpTriggerBy?: StrategyTriggerByV3;
  slTriggerBy?: StrategyTriggerByV3;
  takeProfit?: string;
  stopLoss?: string;
  tpOrderType?: StrategyTriggerOrderTypeV3;
  slOrderType?: StrategyTriggerOrderTypeV3;
  tpLimitPrice?: string;
  slLimitPrice?: string;
  triggerBy?: StrategyTriggerByV3;
  triggerPrice?: string;
  triggerOrderType?: StrategyTriggerOrderTypeV3;
  triggerOrderPrice?: string;
}

export interface CancelStrategyOrderRequestV3 {
  orderId?: string;
  clientOid?: string;
}

export interface GetUnfilledStrategyOrdersRequestV3 {
  category: 'USDT-FUTURES' | 'COIN-FUTURES' | 'USDC-FUTURES';
  type?: StrategyOrderTypeV3;
}

export interface GetHistoryStrategyOrdersRequestV3 {
  category: 'USDT-FUTURES' | 'COIN-FUTURES' | 'USDC-FUTURES';
  type?: StrategyOrderTypeV3;
  startTime?: string;
  endTime?: string;
  limit?: string;
  cursor?: string;
}
