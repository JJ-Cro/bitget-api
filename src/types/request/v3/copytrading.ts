export interface GetCopyFuturesMaxTransferableRequestV3 {
  coin: string;
}

export interface CopyFuturesTransferRequestV3 {
  type: 'in' | 'out';
  coin: string;
  amount: string;
}

export interface GetCopyFuturesTransferRecordRequestV3 {
  startTime?: string;
  endTime?: string;
  limit?: string;
  /** Pass transferId from the previous page to paginate forward */
  cursor?: string;
}
