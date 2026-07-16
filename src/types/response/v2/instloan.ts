export interface InstLoanProductInfoV2 {
  productId: string;
  leverage: string;
  transferLine: string;
  spotBuyLine: string;
  liquidationLine: string;
  stopLiquidationLine: string;
}

export interface InstLoanSymbolsV2 {
  productId: string;
  spotSymbols: string[];
}

export interface InstLoanRepaidHistoryItemV2 {
  repayOrderId: string;
  businessType: string;
  repayType: string;
  repaidTime: string;
  coin: string;
  repaidAmount: string;
  repaidInterest: string;
}

export interface InstLoanOrderV2 {
  orderId: string;
  orderProductId: string;
  uid: string;
  loanTime: string;
  loanCoin: string;
  loanAmount: string;
  unpaidAmount: string;
  unpaidInterest: string;
  repaidAmount: string;
  repaidInterest: string;
  status: string;
}

export interface InstLoanCoinInfoV2 {
  coin: string;
  convertRatio: string;
  maxConvertValue: string;
}

export interface InstLoanLTVConvertV2 {
  ltv: string;
  subAccountUids: string[];
  unpaidUsdtAmount: string;
  usdtBalance: string;
  unpaidInfo: {
    coin: string;
    unpaidQty: string;
    unpaidInterest: string;
  }[];
  balanceInfo: {
    coin: string;
    price: string;
    amount: string;
    convertedUsdtAmount: string;
  }[];
}
