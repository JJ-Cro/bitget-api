/**
 *
 *
 * Copy Trading | Futures (UTA)
 *
 *
 */

export interface CopyFuturesMarginDetailV3 {
  marginCoin: string;
  maxLongCount: string;
  remainingLongCount: string;
  maxShortCount: string;
  remainingShortCount: string;
}

export interface CopyFuturesTradingPairV3 {
  symbol: string;
  leverage: string;
  marginDetails: CopyFuturesMarginDetailV3[];
}

export interface CopyFuturesPositionSummaryV3 {
  unrealizedPnl: string;
  realizedPnl: string;
  holdSize: string;
  avgPrice: string;
  symbol: string;
  leverage: string;
  marginMode: string;
  liqPrice: string;
  margin: string;
  holdSide: string;
  roi: string;
  markPrice: string;
  positionValue: string;
}
