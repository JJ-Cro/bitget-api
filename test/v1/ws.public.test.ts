import {
  WebsocketClientLegacyV1,
  WS_KEY_MAP,
  WSClientConfigurableOptions,
} from '../../src/index.js';
import {
  getSilentLogger,
  logAllEvents,
  waitForSocketEvent,
} from '../ws.util.js';

describe('Public Spot Websocket Client', () => {
  let wsClient: WebsocketClientLegacyV1;

  const wsClientOptions: WSClientConfigurableOptions = {};

  beforeAll(() => {
    wsClient = new WebsocketClientLegacyV1(
      wsClientOptions,
      getSilentLogger('expectSuccess'),
    );
    wsClient.connectAll();
    logAllEvents(wsClient);
  });

  afterAll(() => {
    wsClient.closeAll();
  });

  it('should open a public ws connection', async () => {
    const wsOpenPromise = waitForSocketEvent(wsClient, 'open');

    try {
      expect(await wsOpenPromise).toMatchObject({
        wsKey: expect.any(String),
      });
    } catch (e) {
      expect(e).toBeFalsy();
    }
  });

  it('should subscribe to public orderbook events and get a snapshot', async () => {
    const wsResponsePromise = waitForSocketEvent(wsClient, 'response');
    const wsUpdatePromise = waitForSocketEvent(wsClient, 'update');

    const symbol = 'BTCUSDT';

    wsClient.subscribeTopic('SP', 'books', symbol);

    try {
      expect(await wsResponsePromise).toMatchObject({
        arg: { channel: 'books', instId: symbol, instType: expect.any(String) },
        event: 'subscribe',
        wsKey: WS_KEY_MAP.spotv1,
      });
    } catch (e) {
      console.error('Wait for "books" subscription response exception: ', e);
      expect(e).toBeFalsy();
    }

    try {
      expect(await wsUpdatePromise).toMatchObject({
        action: 'snapshot',
        arg: { channel: 'books', instId: 'BTCUSDT', instType: 'sp' },
        data: [
          {
            asks: expect.any(Array),
            bids: expect.any(Array),
          },
        ],
        wsKey: 'spotv1',
      });
    } catch (e) {
      console.error('Wait for "books" event exception: ', e);
      expect(e).toBeFalsy();
    }
  });
});
