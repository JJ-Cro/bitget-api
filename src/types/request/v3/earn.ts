/**
 *
 *
 * Earn | On-Chain Elite (UTA)
 *
 *
 */

export interface GetEarnEliteRecordsRequestV3 {
  type: 'subscribe' | 'redeem' | 'interest';
  startTime?: string;
  endTime?: string;
  limit?: string;
  cursor?: string;
}

export interface GetEarnEliteSubscribeInfoRequestV3 {
  productId: string;
}

export interface EarnEliteSubscribeRequestV3 {
  productSubId: string;
  amount: string;
  coin?: string;
  paymentAccount?: 'spot' | 'unified';
}

export interface GetEarnEliteSubscribeResultRequestV3 {
  orderId: string;
}

export interface GetEarnEliteRedeemInfoRequestV3 {
  productId: string;
}

export interface RedeemEarnEliteRequestV3 {
  productId: string;
  productSubId: string;
  redeemType: 'fast' | 'standard';
  amount: string;
  receiveAccount: 'spot' | 'unified';
  advancedSettle?: 'yes' | 'no';
  coin?: string;
}
