# Bitget API JavaScript Tutorial for Node.js and TypeScript

> [!TIP]
> This tutorial is available in a more readable format on our website: [Bitget JavaScript Tutorial](https://siebly.io/sdk/bitget/javascript/tutorial)

This guide shows how to connect to Bitget with our [`bitget-api`](https://www.npmjs.com/package/bitget-api) package - the Bitget Node.js, JavaScript, and TypeScript SDK by Siebly.io. You'll cover REST, WebSocket streams, and the WebSocket API.

The SDK handles signing, routing, reconnects, and resubscribes so you don't have to. Below: install, public and private REST, live streams, demo trading, WebSocket API orders, V2/Classic where you still need it, and a few production notes.

**Key links**

- Bitget JavaScript SDK by Siebly: [`bitget-api`](https://www.npmjs.com/package/bitget-api)
- GitHub Repository: [`tiagosiebler/bitget-api`](https://github.com/tiagosiebler/bitget-api)
- SDK function-endpoint map: [Bitget JavaScript Endpoint Reference](./endpointFunctionList.md)
- SDK examples: [Bitget SDK examples](../examples)
- Bitget UTA docs: [Unified Trading Account](https://www.bitget.com/api-doc/uta/intro)
- Bitget UTA quick start: [Quick Start](https://www.bitget.com/api-doc/uta/guide)
- Bitget Classic REST quick start: [Classic REST API](https://www.bitget.com/api-doc/classic/quickStart/intro)
- Bitget Classic WebSocket quick start: [Classic WebSocket API](https://www.bitget.com/api-doc/classic/quickStart/websocket-intro)
- More Node.js, JavaScript & TypeScript SDKs for CryptoCurrency Exchange REST APIs & WebSockets: [Siebly JavaScript SDKs for Crypto APIs](https://siebly.io)

---

## Why use the SDK

Bitget has several API surfaces, and they don't all work the same way:

- V3/UTA REST APIs for current Unified Trading Account market data, account reads, transfers, positions, and order management.
- V3 public WebSocket streams for live market data.
- V3 private WebSocket streams for account, position, fill, and order updates.
- V3 WebSocket API commands for order placement and cancellation over a persistent WebSocket connection.
- V2/Classic REST and WebSocket APIs for accounts and workflows that have not moved to UTA.
- Demo trading endpoints and separate demo API keys for safer order testing.

That adds up - auth, routing, WebSocket lifecycle, topic tracking, reconnects, typed request shapes. The SDK handles those parts. You focus on the work: pull market data, check balances, place orders, subscribe to updates, reconcile after reconnects.

The main SDK surfaces are:

| Use case                       | SDK surface          | Common usage                                                                                             |
| ------------------------------ | -------------------- | -------------------------------------------------------------------------------------------------------- |
| Current REST API               | `RestClientV3`       | V3/UTA public market data, account reads, transfers, positions, orders, fills, and other endpoint groups |
| Current WebSocket streams      | `WebsocketClientV3`  | V3/UTA public market streams and private account streams                                                 |
| Current WebSocket API commands | `WebsocketAPIClient` | Promise-driven V3 order placement, batch placement, cancellation, and batch cancellation over WebSocket  |
| Classic REST API               | `RestClientV2`       | V2/Classic public, private, and trading workflows                                                        |
| Classic WebSocket streams      | `WebsocketClientV2`  | V2/Classic public and private stream topics                                                              |

For new UTA work, start with `RestClientV3`, `WebsocketClientV3`, and `WebsocketAPIClient`. Reach for `RestClientV2` and `WebsocketClientV2` only when the account or workflow is still on Bitget Classic.

---

## Installation & API Keys

Install the SDK with npm:

```bash
npm install bitget-api
```

Or use another npm-compatible package manager:

```bash
pnpm install bitget-api
yarn add bitget-api
```

Public market data does not require API keys. Private REST API calls, private WebSocket streams, and WebSocket API order commands require three Bitget API credentials:

| SDK option  | Bitget credential                              |
| ----------- | ---------------------------------------------- |
| `apiKey`    | API key                                        |
| `apiSecret` | API secret                                     |
| `apiPass`   | API passphrase set when the API key is created |

`apiPass` is the Bitget API passphrase, not the account login password.

Use separate credentials for live and demo trading. Demo trading API calls need demo API keys plus `demoTrading: true` in the SDK options.

Our private examples use environment variables for convenience - use whatever secret store fits your setup.

When creating API keys, grant the minimum permissions you need. Dashboards usually only need read access. Trading needs read/write on orders. Withdrawal isn't required for anything here. Whitelist IPs if your server has fixed outbound addresses.

---

## Bitget concepts in this guide

Bitget has a few naming differences across their API:

| Surface                         | Product values shown in this guide                               |
| ------------------------------- | ---------------------------------------------------------------- |
| V3 REST `category`              | `SPOT`, `MARGIN`, `USDT-FUTURES`, `USDC-FUTURES`, `COIN-FUTURES` |
| V3 public WebSocket `instType`  | `spot`, `usdt-futures`, `usdc-futures`, `coin-futures`           |
| V3 private WebSocket `instType` | `UTA`                                                            |
| V3 WebSocket API category       | `spot`, `usdt-futures`, `usdc-futures`, `coin-futures`           |
| V2 WebSocket `instType`         | `SPOT`, `USDT-FUTURES`, `USDC-FUTURES`, `COIN-FUTURES`           |

REST, WebSocket streams, and the WebSocket API are separate integration flows:

| Flow                      | SDK surface                                                                          | Best for                                                                      | What the SDK handles                                                                 |
| ------------------------- | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| REST API                  | `RestClientV3` or `RestClientV2`                                                     | Request/response reads, writes, order reconciliation, broad endpoint coverage | Base URLs, timestamps, auth headers, signatures, response parsing                    |
| Public WebSocket streams  | `WebsocketClientV3.subscribe` or `WebsocketClientV2.subscribeTopic`                  | Live market data such as tickers and order books                              | Connection routing, subscribe requests, heartbeats, reconnects, resubscribe          |
| Private WebSocket streams | `WebsocketClientV3.subscribe` or `WebsocketClientV2.subscribeTopic` with credentials | Live account, order, fill, balance, and position updates                      | Authentication, private endpoint routing, reconnects, resubscribe                    |
| WebSocket API commands    | `WebsocketAPIClient`                                                                 | Awaitable order commands over a persistent V3 WebSocket connection            | Connection setup, authentication, request IDs, promise resolution, response matching |

Order option casing can differ by surface. V3 REST order requests use `reduceOnly: 'yes' | 'no'`. V3 WebSocket API and V2 futures request types use `reduceOnly: 'YES' | 'NO'`. When unsure, check the type definitions for the client you're using.

---

## Start building: first REST API calls

Want the quickest path to something working? Start here.

### 1. First public REST API request

Public REST calls work without credentials.

```typescript
import { RestClientV3 } from 'bitget-api';

const client = new RestClientV3();

async function main() {
  const serverTime = await client.getServerTime();
  const instruments = await client.getInstruments({
    category: 'SPOT',
    symbol: 'BTCUSDT',
  });
  const tickers = await client.getTickers({
    category: 'SPOT',
    symbol: 'BTCUSDT',
  });
  const orderBook = await client.getOrderBook({
    category: 'SPOT',
    symbol: 'BTCUSDT',
    limit: '5',
  });
  const candles = await client.getCandles({
    category: 'SPOT',
    symbol: 'BTCUSDT',
    interval: '1m',
    limit: '5',
  });

  console.log({
    serverTime: serverTime.data.serverTime,
    instrument: instruments.data[0]?.symbol,
    ticker: tickers.data[0],
    bestBid: orderBook.data.b[0],
    bestAsk: orderBook.data.a[0],
    candles: candles.data,
  });
}

main().catch(console.error);
```

If that prints data, public REST is working.

See also: [V3 public REST examples](../examples/V3%20-%20UTA/Rest)

### 2. First private REST API request

Private REST uses the same `RestClientV3` with credentials - the SDK signs requests for you.

```typescript
import { RestClientV3 } from 'bitget-api';

function readBitgetCredentials() {
  const apiKey = process.env.BITGET_API_KEY;
  const apiSecret = process.env.BITGET_API_SECRET;
  const apiPass = process.env.BITGET_API_PASS;

  if (!apiKey || !apiSecret || !apiPass) {
    throw new Error(
      'Set BITGET_API_KEY, BITGET_API_SECRET, and BITGET_API_PASS before running private examples.',
    );
  }

  return { apiKey, apiSecret, apiPass };
}

const client = new RestClientV3(readBitgetCredentials());

async function main() {
  const balances = await client.getBalances();
  const settings = await client.getAccountSettings();

  console.log({
    assetMode: settings.data.assetMode,
    holdMode: settings.data.holdMode,
    usdtEquity: balances.data.usdtEquity,
    assets: balances.data.assets.slice(0, 5),
  });
}

main().catch(console.error);
```

If you get balances back, auth is set up correctly.

See also: [V3 private REST examples](../examples/V3%20-%20UTA/Rest)

### 3. First public WebSocket stream

`WebsocketClientV3` handles V3/UTA streams. Public ones don't need credentials.

```typescript
import { WebsocketClientV3, WS_KEY_MAP } from 'bitget-api';

const ws = new WebsocketClientV3({});

ws.on('open', (data) => {
  console.log('connected', data.wsKey);
});

ws.on('response', (data) => {
  console.log('response', JSON.stringify(data));
});

ws.on('update', (data) => {
  console.log('market update', JSON.stringify(data));
});

ws.on('reconnect', ({ wsKey }) => {
  console.log('reconnecting', wsKey);
});

ws.on('reconnected', (data) => {
  console.log('reconnected', data?.wsKey);
});

ws.on('exception', console.error);

ws.subscribe(
  [
    {
      topic: 'ticker',
      payload: {
        instType: 'spot',
        symbol: 'BTCUSDT',
      },
    },
    {
      topic: 'books',
      payload: {
        instType: 'spot',
        symbol: 'BTCUSDT',
      },
    },
  ],
  WS_KEY_MAP.v3Public,
);
```

The SDK keeps the connection up, reconnects on drops, and resubscribes automatically.

See also: [V3 public WebSocket example](../examples/V3%20-%20UTA/Websocket/ws-public.ts)

### 4. First private account WebSocket stream

Private streams are where trading systems usually watch account and order changes instead of polling constantly.

```typescript
import { WebsocketClientV3, WS_KEY_MAP } from 'bitget-api';

function readBitgetCredentials() {
  const apiKey = process.env.BITGET_API_KEY;
  const apiSecret = process.env.BITGET_API_SECRET;
  const apiPass = process.env.BITGET_API_PASS;

  if (!apiKey || !apiSecret || !apiPass) {
    throw new Error(
      'Set BITGET_API_KEY, BITGET_API_SECRET, and BITGET_API_PASS before running private WebSocket examples.',
    );
  }

  return { apiKey, apiSecret, apiPass };
}

const ws = new WebsocketClientV3(readBitgetCredentials());

ws.on('authenticated', (data) => {
  console.log('authenticated', data.wsKey);
});

ws.on('update', (data) => {
  console.log('account update', JSON.stringify(data));
});

ws.on('response', (data) => {
  console.log('response', JSON.stringify(data));
});

ws.on('reconnect', ({ wsKey }) => {
  console.log('reconnecting', wsKey);
});

ws.on('reconnected', (data) => {
  console.log('reconnected', data?.wsKey);
  // After reconnect, use REST to reconcile balances, positions, open orders, or recent fills.
});

ws.on('exception', console.error);

ws.subscribe(
  [
    { topic: 'account', payload: { instType: 'UTA' } },
    { topic: 'position', payload: { instType: 'UTA' } },
    { topic: 'fill', payload: { instType: 'UTA' } },
    { topic: 'order', payload: { instType: 'UTA' } },
  ],
  WS_KEY_MAP.v3Private,
);
```

For V3 private account streams, use `instType: 'UTA'`.

See also: [V3 private WebSocket example](../examples/V3%20-%20UTA/Websocket/ws-private.ts)

### 5. First REST API order in demo trading

Test with demo keys before going live. Demo uses separate Bitget API keys.

The snippet below sets `demoTrading: true` - leave it on while testing. A successful response means Bitget accepted the order, not that it filled.

```typescript
import { RestClientV3 } from 'bitget-api';

function readBitgetCredentials() {
  const apiKey = process.env.BITGET_API_KEY;
  const apiSecret = process.env.BITGET_API_SECRET;
  const apiPass = process.env.BITGET_API_PASS;

  if (!apiKey || !apiSecret || !apiPass) {
    throw new Error(
      'Set BITGET_API_KEY, BITGET_API_SECRET, and BITGET_API_PASS with demo API credentials before placing demo orders.',
    );
  }

  return { apiKey, apiSecret, apiPass };
}

const credentials = readBitgetCredentials();

const client = new RestClientV3({
  apiKey: credentials.apiKey,
  apiSecret: credentials.apiSecret,
  apiPass: credentials.apiPass,
  demoTrading: true,
});

async function main() {
  const ticker = await client.getTickers({
    category: 'SPOT',
    symbol: 'BTCUSDT',
  });

  const lastPrice = ticker.data[0]?.lastPrice;

  if (!lastPrice) {
    throw new Error('No BTCUSDT ticker price returned.');
  }

  const orderRequest = {
    category: 'SPOT',
    symbol: 'BTCUSDT',
    side: 'buy',
    orderType: 'limit',
    price: lastPrice,
    qty: '0.001',
    timeInForce: 'gtc',
    clientOid: `demo-rest-${Date.now()}`,
  } as const;

  const result = await client.submitNewOrder(orderRequest);

  console.log(result);
}

main().catch(console.error);
```

Check order status via private streams or REST: `getOrderInfo`, `getUnfilledOrders`, `getHistoryOrders`, or `getTradeFills`.

See also: [V3 spot trading example](../examples/V3%20-%20UTA/Rest/rest-trade-UTA-spot.ts)

### 6. First WebSocket API order command

The WebSocket API sends order commands over a persistent connection and waits for a response. `WebsocketAPIClient` wraps that in promises - write orders like normal `async` calls.

This example uses `demoTrading: true` with demo API keys.

```typescript
import { WebsocketAPIClient } from 'bitget-api';

function readBitgetCredentials() {
  const apiKey = process.env.BITGET_API_KEY;
  const apiSecret = process.env.BITGET_API_SECRET;
  const apiPass = process.env.BITGET_API_PASS;

  if (!apiKey || !apiSecret || !apiPass) {
    throw new Error(
      'Set BITGET_API_KEY, BITGET_API_SECRET, and BITGET_API_PASS with demo API credentials before placing demo orders.',
    );
  }

  return { apiKey, apiSecret, apiPass };
}

const credentials = readBitgetCredentials();

const wsApi = new WebsocketAPIClient({
  apiKey: credentials.apiKey,
  apiSecret: credentials.apiSecret,
  apiPass: credentials.apiPass,
  demoTrading: true,
});

const ws = wsApi.getWSClient();

ws.on('open', (data) => console.log('ws open', data.wsKey));
ws.on('authenticated', (data) => console.log('authenticated', data.wsKey));
ws.on('exception', console.error);

async function main() {
  await ws.connectWSAPI();

  const clientOid = `demo-wsapi-${Date.now()}`;

  const placed = await wsApi.submitNewOrder('spot', {
    symbol: 'BTCUSDT',
    side: 'buy',
    orderType: 'limit',
    price: '10000',
    qty: '0.001',
    timeInForce: 'gtc',
    clientOid,
  });

  console.log('placed', placed);

  const cancelled = await wsApi.cancelOrder('spot', {
    clientOid,
  });

  console.log('cancelled', cancelled);
}

main().catch(console.error);
```

`connectWSAPI()` is optional - call it before your first command if you want the connection warm and ready.

See also: [V3 WebSocket API client example](../examples/V3%20-%20UTA/WS-API/ws-api-client-trade.ts)

---

## V3 REST API

`RestClientV3` is the client for current Bitget UTA REST endpoints.

### Create public and private clients

Public client:

```typescript
import { RestClientV3 } from 'bitget-api';

const publicClient = new RestClientV3();
```

Private client:

```typescript
import { RestClientV3 } from 'bitget-api';

const privateClient = new RestClientV3({
  apiKey: process.env.BITGET_API_KEY!,
  apiSecret: process.env.BITGET_API_SECRET!,
  apiPass: process.env.BITGET_API_PASS!,
});
```

Demo trading client:

```typescript
import { RestClientV3 } from 'bitget-api';

const demoClient = new RestClientV3({
  apiKey: process.env.BITGET_API_KEY!,
  apiSecret: process.env.BITGET_API_SECRET!,
  apiPass: process.env.BITGET_API_PASS!,
  demoTrading: true,
});
```

### Common public market data calls

```typescript
import { RestClientV3 } from 'bitget-api';

const client = new RestClientV3();

async function main() {
  const instruments = await client.getInstruments({
    category: 'SPOT',
    symbol: 'BTCUSDT',
  });

  const tickers = await client.getTickers({
    category: 'USDT-FUTURES',
    symbol: 'BTCUSDT',
  });

  const orderBook = await client.getOrderBook({
    category: 'SPOT',
    symbol: 'BTCUSDT',
    limit: '20',
  });

  const candles = await client.getCandles({
    category: 'SPOT',
    symbol: 'BTCUSDT',
    interval: '1m',
    limit: '20',
  });

  const openInterest = await client.getOpenInterest({
    category: 'USDT-FUTURES',
    symbol: 'BTCUSDT',
  });

  const fundingRate = await client.getCurrentFundingRate({
    symbol: 'BTCUSDT',
  });

  console.log({
    instrument: instruments.data[0],
    ticker: tickers.data[0],
    orderBook,
    candles: candles.data.length,
    openInterest,
    fundingRate,
  });
}

main().catch(console.error);
```

### Common private account calls

```typescript
import { RestClientV3 } from 'bitget-api';

const client = new RestClientV3({
  apiKey: process.env.BITGET_API_KEY!,
  apiSecret: process.env.BITGET_API_SECRET!,
  apiPass: process.env.BITGET_API_PASS!,
});

async function main() {
  const settings = await client.getAccountSettings();
  const balances = await client.getBalances();
  const positions = await client.getCurrentPosition({
    category: 'USDT-FUTURES',
    symbol: 'BTCUSDT',
  });
  const openOrders = await client.getUnfilledOrders({
    category: 'SPOT',
    symbol: 'BTCUSDT',
  });
  const recentFills = await client.getTradeFills({
    limit: '20',
  });

  console.log({
    settings: settings.data,
    balanceCount: balances.data.assets.length,
    positions: positions.data.list,
    openOrders: openOrders.data.list,
    recentFills: recentFills.data.list,
  });
}

main().catch(console.error);
```

### Common trading calls

```typescript
import { RestClientV3 } from 'bitget-api';

const client = new RestClientV3({
  apiKey: process.env.BITGET_API_KEY!,
  apiSecret: process.env.BITGET_API_SECRET!,
  apiPass: process.env.BITGET_API_PASS!,
  demoTrading: true,
});

async function main() {
  const clientOid = `rest-${Date.now()}`;

  const placed = await client.submitNewOrder({
    category: 'SPOT',
    symbol: 'BTCUSDT',
    side: 'buy',
    orderType: 'limit',
    price: '10000',
    qty: '0.001',
    timeInForce: 'gtc',
    clientOid,
  });

  const orderInfo = await client.getOrderInfo({
    clientOid,
  });

  const cancelled = await client.cancelOrder({
    clientOid,
  });

  console.log({ placed, orderInfo, cancelled });
}

main().catch(console.error);
```

For futures close-only orders, V3 REST uses lower-case `reduceOnly` values:

```typescript
await client.submitNewOrder({
  category: 'USDT-FUTURES',
  symbol: 'BTCUSDT',
  side: 'sell',
  orderType: 'limit',
  price: '100000',
  qty: '0.001',
  timeInForce: 'gtc',
  posSide: 'long',
  reduceOnly: 'yes',
});
```

---

## V3 WebSocket streams

For live market or account updates, use `WebsocketClientV3`.

### Common events

```typescript
import { WebsocketClientV3 } from 'bitget-api';

const ws = new WebsocketClientV3({});

ws.on('open', (data) => console.log('open', data.wsKey));
ws.on('response', (data) => console.log('response', JSON.stringify(data)));
ws.on('update', (data) => console.log('update', JSON.stringify(data)));
ws.on('reconnect', (data) => console.log('reconnect', data.wsKey));
ws.on('reconnected', (data) => console.log('reconnected', data?.wsKey));
ws.on('authenticated', (data) => console.log('authenticated', data.wsKey));
ws.on('exception', console.error);
```

`response` events are subscribe/control acks. `update` events carry stream data.

### Public topics

```typescript
import { WebsocketClientV3, WS_KEY_MAP } from 'bitget-api';

const ws = new WebsocketClientV3({});

ws.on('update', (data) => {
  console.log('public update', JSON.stringify(data));
});

ws.subscribe(
  [
    {
      topic: 'ticker',
      payload: {
        instType: 'spot',
        symbol: 'BTCUSDT',
      },
    },
    {
      topic: 'books',
      payload: {
        instType: 'usdt-futures',
        symbol: 'BTCUSDT',
      },
    },
  ],
  WS_KEY_MAP.v3Public,
);
```

V3 public `instType` values are lower-case: `spot`, `usdt-futures`, `usdc-futures`, and `coin-futures`.

### Private topics

```typescript
import { WebsocketClientV3, WS_KEY_MAP } from 'bitget-api';

const ws = new WebsocketClientV3({
  apiKey: process.env.BITGET_API_KEY!,
  apiSecret: process.env.BITGET_API_SECRET!,
  apiPass: process.env.BITGET_API_PASS!,
});

ws.on('update', (data) => {
  console.log('private update', JSON.stringify(data));
});

ws.subscribe(
  [
    { topic: 'account', payload: { instType: 'UTA' } },
    { topic: 'position', payload: { instType: 'UTA' } },
    { topic: 'fill', payload: { instType: 'UTA' } },
    { topic: 'order', payload: { instType: 'UTA' } },
  ],
  WS_KEY_MAP.v3Private,
);
```

V3 private account topics use `instType: 'UTA'`.

### Unsubscribe

```typescript
ws.unsubscribe(
  {
    topic: 'ticker',
    payload: {
      instType: 'spot',
      symbol: 'BTCUSDT',
    },
  },
  WS_KEY_MAP.v3Public,
);
```

The SDK remembers subscriptions per connection and resubscribes after reconnects.

---

## V3 WebSocket API

`WebsocketAPIClient` sends V3 order commands over WebSocket and returns a promise for each response.

```typescript
import { WebsocketAPIClient } from 'bitget-api';

const wsApi = new WebsocketAPIClient({
  apiKey: process.env.BITGET_API_KEY!,
  apiSecret: process.env.BITGET_API_SECRET!,
  apiPass: process.env.BITGET_API_PASS!,
  demoTrading: true,
});

async function main() {
  await wsApi.getWSClient().connectWSAPI();

  const clientOid = `wsapi-${Date.now()}`;

  const placed = await wsApi.submitNewOrder('spot', {
    symbol: 'BTCUSDT',
    side: 'buy',
    orderType: 'limit',
    price: '10000',
    qty: '0.001',
    timeInForce: 'gtc',
    clientOid,
  });

  const cancelled = await wsApi.cancelOrder('spot', {
    clientOid,
  });

  console.log({ placed, cancelled });
}

main().catch(console.error);
```

The helper methods are:

| Method                                   | WebSocket API operation |
| ---------------------------------------- | ----------------------- |
| `submitNewOrder(category, orderRequest)` | `place-order`           |
| `placeBatchOrders(category, orders)`     | `batch-place`           |
| `cancelOrder(category, cancelRequest)`   | `cancel-order`          |
| `cancelBatchOrders(category, cancels)`   | `batch-cancel`          |

For batch operations, check each item in the returned `args` array - one batch can mix accepted and rejected orders.

For futures close-only orders over the WebSocket API, use upper-case `reduceOnly` values:

```typescript
await wsApi.submitNewOrder('usdt-futures', {
  symbol: 'BTCUSDT',
  side: 'sell',
  orderType: 'limit',
  price: '100000',
  qty: '0.001',
  timeInForce: 'gtc',
  posSide: 'long',
  reduceOnly: 'YES',
});
```

---

## V2/Classic APIs

Reach for V2/Classic clients only when the account or workflow still uses Classic APIs. Don't mix V2 and V3 assumptions - category names, topics, request fields, and account modes all differ.

### Classic public REST

```typescript
import { RestClientV2 } from 'bitget-api';

const client = new RestClientV2();

async function main() {
  const spotCandles = await client.getSpotCandles({
    symbol: 'BTCUSDT',
    granularity: '1min',
    limit: '100',
  });

  const futuresCandles = await client.getFuturesCandles({
    symbol: 'BTCUSDT',
    productType: 'USDT-FUTURES',
    granularity: '1m',
    limit: '100',
  });

  console.log({
    spotCandles: spotCandles.data.length,
    futuresCandles: futuresCandles.data.length,
  });
}

main().catch(console.error);
```

See also: [V2 public REST examples](../examples/V2%20-%20Classic/Rest)

### Classic WebSocket streams

```typescript
import { WebsocketClientV2 } from 'bitget-api';

const ws = new WebsocketClientV2({});

ws.on('update', (data) => {
  console.log('classic update', JSON.stringify(data));
});

ws.on('response', (data) => {
  console.log('classic response', JSON.stringify(data));
});

ws.on('exception', console.error);

ws.subscribeTopic('SPOT', 'ticker', 'BTCUSDT');
```

V2 WebSocket `instType` values are upper-case, such as `SPOT`, `USDT-FUTURES`, `USDC-FUTURES`, and `COIN-FUTURES`.

See also: [V2 WebSocket examples](../examples/V2%20-%20Classic/Websocket)

---

## Production notes

### 1. Roll out in layers

Public REST first, then private read-only REST, then public streams, private streams, demo trading, and finally small live tests. None of the examples here need withdrawal permissions.

### 2. Use client-generated order IDs

Set `clientOid` on every order and store it before you send. You'll need it to match state after retries, reconnects, or restarts.

### 3. Reconcile after reconnects

Reconnects happen. After a private stream comes back, hit REST for balances, positions, open orders, history, and recent fills before trusting local state.

### 4. Check exchange acceptance

A resolved promise means the SDK got a response - not that the trade worked. Check Bitget's `code`, per-item batch `code` values, and order status. Accepted ≠ filled.

### 5. Keep clocks healthy

Private requests are timestamp-sensitive. Keep the host clock synced. Only touch `recvWindow` if you know you have clock skew.

### 6. Keep credentials scoped

Separate live and demo keys. Read-only keys for dashboards. Trading permissions only where you actually submit orders. Never put private keys in frontend code.

### 7. Log carefully

`BITGETTRACE=true` is handy for local debugging - it logs raw requests and responses. Don't turn it on where logs might leak account data.

---

## FAQ

### Do I need API keys for public market data?

No. Public REST market data and public WebSocket streams can be used without API keys.

### What is the Bitget API passphrase?

The API passphrase is the passphrase set when creating the Bitget API key. In the SDK constructor it is passed as `apiPass`.

### Which client should I use for a new project?

Start with `RestClientV3`, `WebsocketClientV3`, and `WebsocketAPIClient` for current V3/UTA workflows.

### When should I use V2/Classic clients?

Use `RestClientV2` and `WebsocketClientV2` when the account or endpoint is still on Bitget Classic. Do not mix V2 and V3 request assumptions in the same snippet.

### Why do category names have different casing?

Bitget isn't consistent. V3 REST uses upper-case categories. V3 public WebSocket uses lower-case `instType`. Private account streams use `UTA`. V2 WebSocket uses upper-case `instType`.

### What is the difference between WebSocket streams and the WebSocket API?

Streams push updates - market data, account changes, fills. The WebSocket API is for sending commands (place/cancel orders) and getting a direct response. Watch state on streams; send orders on the WebSocket API.

### Can I use this SDK from plain JavaScript?

Yes. The SDK works in JavaScript and TypeScript. TypeScript users also get request and response types from the package.

### Does the SDK support RSA keys?

Yes. Pass your RSA private key as `apiSecret`; the SDK auto-detects RSA vs HMAC signing. See the [GitHub repository](https://github.com/tiagosiebler/bitget-api).

### What should I do after a WebSocket reconnect?

Normal - let the SDK reconnect and resubscribe. Then reconcile balances, orders, and fills over REST before acting on cached state.

### Where can I find more examples?

More in the repo:

- [V3/UTA examples](../examples/V3%20-%20UTA)
- [V2/Classic examples](../examples/V2%20-%20Classic)
- [Auth examples](../examples/auth)
- [Bitget JavaScript Endpoint Reference](./endpointFunctionList.md)

---

## Next steps

- [Bitget JavaScript SDK page](https://siebly.io/sdk/bitget/javascript)
- [`bitget-api` on npm](https://www.npmjs.com/package/bitget-api)
- [GitHub repo](https://github.com/tiagosiebler/bitget-api)
- [Endpoint reference](./endpointFunctionList.md)
- Bitget docs: [UTA](https://www.bitget.com/api-doc/uta/intro) · [Classic](https://www.bitget.com/api-doc/classic/quickStart/intro)
- [More exchange SDKs on Siebly.io](https://siebly.io)
