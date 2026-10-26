import { CHANNEL_API_CODE } from '../../src/util/requestUtils';
import { WebsocketAPIClient } from '../../src/websocket-api-client';

describe('UTA WS place-order broker code', () => {
  const order = {
    symbol: 'BTCUSDT',
    orderType: 'limit' as const,
    qty: '0.1',
    price: '100',
    side: 'buy' as const,
  };

  function clientWithSendSpy() {
    const client = new WebsocketAPIClient({ attachEventListeners: false });
    const ws = client.getWSClient();
    jest.spyOn(ws, 'assertIsConnected').mockResolvedValue(undefined);
    jest.spyOn(ws, 'assertIsAuthenticated').mockResolvedValue(undefined);
    const send = jest
      .spyOn(ws, 'tryWsSend')
      .mockImplementation(() => undefined);
    return { client, send };
  }

  async function sentPayload(
    pending: Promise<unknown>,
    send: jest.SpyInstance,
  ): Promise<Record<string, unknown>> {
    for (let i = 0; i < 5 && send.mock.calls.length === 0; i++) {
      await Promise.resolve();
    }
    expect(send).toHaveBeenCalled();
    void pending;
    return JSON.parse(send.mock.calls.at(-1)[1] as string);
  }

  it('sends the SDK broker code on place-order', async () => {
    const { client, send } = clientWithSendSpy();
    const payload = await sentPayload(
      client.submitNewOrder('spot', { ...order }),
      send,
    );

    expect(payload.topic).toBe('place-order');
    expect(payload.apiCode).toBe(CHANNEL_API_CODE);
    expect(payload.apiCode).toBe('hbnni');
    expect(payload.args).toEqual([order]);
  });

  it('keeps a caller apiCode and does not put it inside args', async () => {
    const { client, send } = clientWithSendSpy();
    const params = { ...order, apiCode: 'custom-code' };
    const payload = await sentPayload(
      client.submitNewOrder('spot', params),
      send,
    );

    expect(payload.apiCode).toBe('custom-code');
    expect(payload.args).toEqual([order]);
    expect(params.apiCode).toBe('custom-code');
  });

  it('sends the SDK broker code on batch-place', async () => {
    const { client, send } = clientWithSendSpy();
    const second = { ...order, clientOid: 'b' };
    const payload = await sentPayload(
      client.placeBatchOrders('spot', [{ ...order, clientOid: 'a' }, second]),
      send,
    );

    expect(payload.topic).toBe('batch-place');
    expect(payload.apiCode).toBe(CHANNEL_API_CODE);
    expect(payload.args).toEqual([{ ...order, clientOid: 'a' }, second]);
  });

  it('uses the first caller apiCode for a batch', async () => {
    const { client, send } = clientWithSendSpy();
    const payload = await sentPayload(
      client.placeBatchOrders('spot', [
        { ...order, clientOid: 'a', apiCode: 'from-caller' },
        { ...order, clientOid: 'b', apiCode: 'ignored' },
      ]),
      send,
    );

    expect(payload.apiCode).toBe('from-caller');
    expect(payload.args).toEqual([
      { ...order, clientOid: 'a' },
      { ...order, clientOid: 'b' },
    ]);
  });

  it('does not add apiCode to cancel-order', async () => {
    const { client, send } = clientWithSendSpy();
    const payload = await sentPayload(
      client.cancelOrder('spot', { orderId: '1' }),
      send,
    );

    expect(payload.topic).toBe('cancel-order');
    expect(payload.apiCode).toBeUndefined();
  });
});
