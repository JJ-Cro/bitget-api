import type {
  StrategyOrderStatusV3,
  StrategyTriggerByV3,
  StrategyTriggerOrderTypeV3,
} from '../../request/v3/strategy.js';

export interface PlaceStrategyOrderResponseV3 {
  orderId: string;
  clientOid: string;
}

export interface ModifyStrategyOrderResponseV3 {
  orderId: string;
  clientOid: string;
}

export interface StrategyOrderV3 {
  orderId: string;
  clientOid: string;
  category: 'USDT-FUTURES' | 'COIN-FUTURES' | 'USDC-FUTURES';
  symbol: string;
  qty: string;
  posSide: 'long' | 'short';
  status: StrategyOrderStatusV3;
  triggerType?: 'takeProfit' | 'stopLoss';
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
  createdTime: string;
  updatedTime: string;
}
