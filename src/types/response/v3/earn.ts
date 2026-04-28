/**
 *
 *
 * Earn | On-Chain Elite (UTA)
 *
 *
 */

export interface EarnEliteSubscriptionCoinV3 {
  subscriptionCoin: string;
  precision: string;
  feeRate: string;
  exchangeRate: string;
  remainQuota?: string;
  minAmount?: string;
}

export interface EarnEliteProductV3 {
  productId: string;
  coin: string;
  minApr: string;
  maxApr: string;
  subscriptionCoinList: EarnEliteSubscriptionCoinV3[];
  sellOut: 'YES' | 'NO' | string;
}

export interface EarnEliteAssetProjectV3 {
  projectName: string;
}

export interface EarnEliteAssetV3 {
  productId: string;
  productCoin: string;
  holdingAmount: string;
  usdtHoldingAmount: string;
  exchangeRate: string;
  apr: string;
  minApy?: string;
  maxApy?: string;
  subscriptionCoin: string;
  exchangeAmount: string;
  projectList?: EarnEliteAssetProjectV3[];
  unsettledBGPoints: string;
  interestCoin: string;
  totalProfit: string;
}

export interface EarnEliteAssetsV3 {
  resultList: EarnEliteAssetV3[];
}

export interface EarnEliteRecordV3 {
  recordId: string;
  productId: string;
  coin: string;
  status: string;
  exchangeRate: string;
  receivedCoin: string;
  receivedAmount: string;
  investAmount: string;
  feeRate: string;
  redeemType?: string | string[];
  receivingAccount: string;
  actualReceivingAccount: string;
  paymentAccount?: string[];
  settlePoints: string;
  fee: string;
}

export interface EarnEliteRecordsV3 {
  recordList: EarnEliteRecordV3[];
  endId: string;
}

export interface EarnEliteSubscribeInfoV3 {
  productSubId: string;
  minAmount: string;
  remainQuota: string;
  exchangeRate: string;
  productCoin: string;
  interestTime: string;
  settleTime: string;
  precision: string;
  feeRate: string;
  subscriptionCoinList?: EarnEliteSubscriptionCoinV3[];
}

export interface EarnEliteSubscribeResultV3 {
  orderId: string;
}

export interface EarnEliteSubscribeStatusV3 {
  result: 'settled' | 'pending' | 'rejected' | string;
}

export interface EarnEliteRedeemInfoBgusdReceiveCoinV3 {
  bgusdReceiveCoin: string;
  bgusdExchangeRate: string;
}

export interface EarnEliteRedeemModeV3 {
  redeemFeeRate: string;
  remainQuota: string;
  redeemType: 'fast' | 'standard' | string;
  redeemScale: string;
  redeemDelayDate: string;
  minRedeemAmount: string;
  redeemTime: string;
}

export interface EarnEliteRedeemInfoV3 {
  productId: string;
  productSubId: string;
  productCoin: string;
  subscriptionCoin: string;
  profitCoin: string;
  exchangeRate: string;
  totalUnPayInterestAmount: string;
  preSettleApr: string;
  receivedCoin: string;
  unsettledPoints: string;
  bgusdReceiveCoinList: EarnEliteRedeemInfoBgusdReceiveCoinV3[];
  redeemModeList: EarnEliteRedeemModeV3[];
}

export interface RedeemEarnEliteResultV3 {
  orderId: string;
}
