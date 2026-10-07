# Changelog

## 3.2.5

- Add optional `marginMode` (`isolated` | `crossed`) on `PlaceStrategyOrderRequestV3` for `POST /api/v3/trade/place-strategy-order`. Defaults to crossed. Required for isolated positions: isolated TP/SL fails with 31008 if omitted. Confirmed by Bitget staff; public docs do not list the field yet.
