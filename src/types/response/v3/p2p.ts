import type {
  P2pAdStatusV3,
  P2pMarketTypeV3,
  P2pOrderStatusV3,
  P2pPriceTypeV3,
  P2pSideV3,
} from '../../request/v3/p2p.js';

export interface P2pPayMethodInfoFieldV3 {
  name: string;
  type: 'file' | 'number' | 'txt';
  value: string;
}

export interface P2pPayMethodV3 {
  payMethodId: string;
  payMethodName: string;
  payMethodUserName: string;
  userPayMethodId: string;
  payMethodInfo: P2pPayMethodInfoFieldV3[];
}

export interface P2pTokenDetailV3 {
  token: string;
  precision: string;
}

export interface P2pFiatPayMethodV3 {
  payMethodName: string;
  iconUrl: string;
  payMethodId: string;
}

export interface P2pWithdrawalLimitV3 {
  withdrawLimitKey: string;
  withdrawLimitValue: string;
}

export interface P2pFiatDetailV3 {
  fiat: string;
  precision: string;
  floatRateMin: string;
  floatRateMax: string;
  fixedRateMin: string;
  fixedRateMax: string;
  adMinLimit: string;
  adMaxLimit: string;
  payMethods: P2pFiatPayMethodV3;
  withdrawalLimit: P2pWithdrawalLimitV3;
  payTimeLimit: number[];
}

export interface P2pCurrenciesV3 {
  tokenDetailList: P2pTokenDetailV3[];
  fiatDetailList: P2pFiatDetailV3[];
}

export interface P2pUserEquityDetailV3 {
  maxAdvSellNum: string;
  maxAdvSellLimit: string;
  maxAdvBuyNum: string;
  maxAdvBuyLimit: string;
  totalMaxPendingOrder: string;
  advMaxPendingOrder: string;
}

export interface P2pUserInfoV3 {
  uid: string;
  nickName: string;
  accountLevel: 'starter' | 'advanced' | 'master';
  completedOrderNum: string;
  positiveRate: string;
  completedOrderNum30D: string;
  completedRate30D: string;
  avgPayTime30D: string;
  avgReleaseTime30D: string;
  equityDetail: P2pUserEquityDetailV3;
  registerTime: string;
}

export interface P2pBalanceV3 {
  token: string;
  totalBalance: string;
  frozenBalance: string;
  availableBalance: string;
}

export interface P2pExchangeRateV3 {
  rate: string;
}

export interface P2pFeeSimulateV3 {
  feeToken: string;
  feeAmount: string;
  taxToken: string;
  taxAmount: string;
}

export interface P2pAdLimitV3 {
  buyMinTokenAmount: string;
  buyMaxTokenAmount: string;
  sellMinTokenAmount: string;
  sellMaxTokenAmount: string;
}

export interface P2pCreateAdResponseV3 {
  advId: string;
}

export interface P2pAdPayMethodRefV3 {
  payMethodId: string;
  userPayMethodId?: string;
}

export interface P2pAdInfoV3 {
  advId: string;
  side: P2pSideV3;
  priceType: P2pPriceTypeV3;
  token: string;
  fiat: string;
  price: string;
  amount: string;
  minAmount: string;
  maxAmount: string;
  payDuration: string;
  soldAmount: string;
  lastAmount: string;
  premium: string;
  turnover: string;
  remark: string;
  tradeTerm: string;
  payMethodIds: P2pAdPayMethodRefV3[];
  tokenPrecision: string;
  fiatPrecision: string;
  market: P2pMarketTypeV3;
  avgTime: string;
  createdTime: string;
  updatedTime: string;
}

export interface P2pPublicAdListItemV3 {
  advId: string;
  merchantId: string;
  merchantName: string;
  token: string;
  fiat: string;
  side: P2pSideV3;
  price: string;
  minAmount: string;
  maxAmount: string;
  quantity: string;
  payMethods: {
    payMethodId: string;
    payMethodName: string;
  }[];
  completedOrderNum: string;
  completedRate: string;
  avgReleaseTime: string;
  createdTime: string;
}

export interface P2pMyAdListItemV3 {
  advId: string;
  side: P2pSideV3;
  priceType: P2pPriceTypeV3;
  token: string;
  fiat: string;
  price: string;
  soldAmount: string;
  lastAmount: string;
  payMethods: { payMethodId: string }[];
  status: P2pAdStatusV3;
  createdTime: string;
  updatedTime: string;
}

export interface P2pCursorListV3<T> {
  items: T[];
  nextId?: string;
}

export interface P2pOrderListItemV3 {
  orderId: string;
  side: P2pSideV3;
  token: string;
  fiat: string;
  price: string;
  amount: string;
  quantity: string;
  fee: string;
  counterparty: string;
  status: P2pOrderStatusV3;
  createdTime: string;
  updatedTime: string;
}

export interface P2pOrderPayMethodDetailV3 {
  payMethodId: string;
  payMethodName: string;
  payMethodUserName: string;
  postscript: string;
  payMethodInfo: P2pPayMethodInfoFieldV3[];
}

export interface P2pOrderUserInfoV3 {
  nickName: string;
  realName: string;
}

export interface P2pOrderInfoV3 {
  orderId: string;
  side: P2pSideV3;
  token: string;
  fiat: string;
  price: string;
  quantity: string;
  amount: string;
  status: P2pOrderStatusV3;
  advId: string;
  remark: string;
  orderCancelCountdown: string;
  fee: string;
  verifyCapital: 'yes' | 'no';
  payMethodDetail?: P2pOrderPayMethodDetailV3;
  sellUserInfo: P2pOrderUserInfoV3;
  buyUserInfo: P2pOrderUserInfoV3;
  createdTime: string;
  updatedTime: string;
}
