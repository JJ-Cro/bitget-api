export type P2pSideV3 = 'buy' | 'sell';

export type P2pPriceTypeV3 = 'fixed' | 'floating';

export type P2pMarketTypeV3 = 'public' | 'private';

export type P2pAdStatusV3 = 'publish' | 'delist' | 'remove';

export type P2pAdOperationV3 = 'publish' | 'delist' | 'remove';

export type P2pOrderStatusV3 =
  | 'pending_payment'
  | 'pending_release'
  | 'completed'
  | 'cancelled'
  | 'in_appeal';

export interface P2pPayMethodIdRefV3 {
  payMethodId: string;
  userPayMethodId?: string;
}

export interface GetP2pAdListRequestV3 {
  token: string;
  fiat: string;
  side: P2pSideV3;
  amount?: string;
  pageNum: string;
  limit: string;
}

export interface GetP2pExchangeRateRequestV3 {
  token: string;
  fiat: string;
}

export interface P2pFeeSimulateRequestV3 {
  token: string;
  fiat: string;
  side: P2pSideV3;
  marketType: P2pMarketTypeV3;
  amount: string;
}

export interface GetP2pAdLimitRequestV3 {
  token: string;
  fiat: string;
  side: P2pSideV3;
}

export interface CreateP2pAdRequestV3 {
  token: string;
  fiat: string;
  side: P2pSideV3;
  priceType: P2pPriceTypeV3;
  price?: string;
  premium?: string;
  minAmount: string;
  maxAmount: string;
  quantity: string;
  payMethodIds: P2pPayMethodIdRefV3[];
  remark?: string;
  tradeTerms?: string;
  payTimeLimit: string;
}

export interface UpdateP2pAdRequestV3 {
  advId: string;
  priceType?: P2pPriceTypeV3;
  price?: string;
  premium?: string;
  minAmount?: string;
  maxAmount?: string;
  quantity?: string;
  payMethodIds?: P2pPayMethodIdRefV3[];
  payTimeLimit?: string;
  remark?: string;
  tradeTerms?: string;
}

export interface OperateP2pAdRequestV3 {
  advId: string;
  operation: P2pAdOperationV3;
}

export interface GetP2pAdInfoRequestV3 {
  advId: string;
}

export interface GetP2pMyAdsRequestV3 {
  startTime?: string;
  endTime?: string;
  limit?: string;
  cursor?: string;
  advId?: string;
  token?: string;
  fiat?: string;
  status?: P2pAdStatusV3;
}

export interface GetP2pPendingOrdersRequestV3 {
  orderId?: string;
  side?: P2pSideV3;
  startTime?: string;
  endTime?: string;
  cursor?: string;
  limit?: string;
}

export interface GetP2pAllOrdersRequestV3 {
  startTime?: string;
  endTime?: string;
  limit?: string;
  cursor?: string;
  orderId?: string;
  side?: P2pSideV3;
  status?: P2pOrderStatusV3;
}

export interface GetP2pOrderInfoRequestV3 {
  orderId: string;
}

export interface P2pOrderActionRequestV3 {
  orderId: string;
}

export interface GetP2pBalanceRequestV3 {
  token: string;
}
