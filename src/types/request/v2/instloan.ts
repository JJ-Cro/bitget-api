export interface GetInstLoanProductInfoRequestV2 {
  productId: string;
}

export interface GetInstLoanSymbolsRequestV2 {
  productId: string;
}

export interface GetInstLoanRepaidHistoryRequestV2 {
  startTime?: string;
  endTime?: string;
  limit?: string;
}

export interface GetInstLoanOrderRequestV2 {
  orderId?: string;
  startTime?: string;
  endTime?: string;
}

export interface GetInstLoanLTVConvertRequestV2 {
  riskUnitId?: string;
}

export interface GetInstLoanMarginCoinInfoRequestV2 {
  productId: string;
}
