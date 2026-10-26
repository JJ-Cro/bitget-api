import { RestClientV3 } from '../../src/rest-client-v3';
import { sucessEmptyResponseObject } from '../response.util';

describe('Bitget Public REST API V3 Endpoints', () => {
  const api = new RestClientV3();

  describe('public endpoints', () => {
    it('should succeed making a GET request without params', async () => {
      const res = await api.getDiscountRate();
      expect(res).toMatchObject(sucessEmptyResponseObject());
    });

    it('should succeed making a GET request with params', async () => {
      const res = await api.getTickers({
        category: 'SPOT',
        symbol: 'BTCUSDT',
      });
      expect(res).toMatchObject(sucessEmptyResponseObject());
    });

    it('should return orderbook data', async () => {
      const res = await api.getOrderBook({
        category: 'SPOT',
        symbol: 'BTCUSDT',
        limit: '20',
      });
      expect(res).toMatchObject(sucessEmptyResponseObject());
    });

    it('should return candles data', async () => {
      const res = await api.getCandles({
        category: 'SPOT',
        symbol: 'BTCUSDT',
        interval: '1m',
        limit: '100',
      });
      expect(res).toMatchObject(sucessEmptyResponseObject());
    });

    it('should return recent fills', async () => {
      const res = await api.getFills({
        category: 'SPOT',
        symbol: 'BTCUSDT',
        limit: '20',
      });
      expect(res).toMatchObject(sucessEmptyResponseObject());
    });

    it('should return historic candles', async () => {
      const res = await api.getHistoryCandles({
        category: 'SPOT',
        symbol: 'BTCUSDT',
        interval: '1m',
        limit: '20',
      });
      expect(res).toMatchObject(sucessEmptyResponseObject());
    });

    it('should return funding rate data', async () => {
      const res = await api.getCurrentFundingRate({
        symbol: 'BTCUSDT',
      });
      expect(res).toMatchObject(sucessEmptyResponseObject());
      expect(res.data[0]).toMatchObject({
        symbol: 'BTCUSDT',
        lastFundingRate: expect.any(String),
        nextFundingRate: expect.any(String),
        baselnterestRate: expect.any(String),
        impactMarginNotional: expect.any(String),
      });
    });

    it('should return open interest data', async () => {
      const res = await api.getOpenInterest({
        category: 'USDT-FUTURES',
        symbol: 'BTCUSDT',
      });
      expect(res).toMatchObject(sucessEmptyResponseObject());
    });

    it('should return instruments config', async () => {
      const res = await api.getInstruments({
        category: 'SPOT',
        symbol: 'BTCUSDT',
      });
      expect(res).toMatchObject(sucessEmptyResponseObject());
      expect(res.data[0]).toMatchObject({
        symbol: 'BTCUSDT',
        fullName: expect.any(String),
        instrumentType: 'crypto',
      });
    });

    it('should return server time in ms and microseconds', async () => {
      const res = await api.getServerTime();
      expect(res).toMatchObject(sucessEmptyResponseObject());
      expect(res.data.serverTime).toEqual(expect.any(String));
      expect(res.data.serverTimeMicros.length).toBeGreaterThan(
        res.data.serverTime.length,
      );
    });

    it('should return announcements', async () => {
      const res = await api.getAnnouncements({
        language: 'en_US',
        limit: '1',
      });
      expect(res).toMatchObject(sucessEmptyResponseObject());
      expect(res.data[0].annId).toEqual(expect.any(String));
      expect(res.data[0].cTime ?? res.data[0].createdTime).toEqual(
        expect.any(String),
      );
    });

    it('should return coin info', async () => {
      const res = await api.getCoins({ coin: 'BTC' });
      expect(res).toMatchObject(sucessEmptyResponseObject());
      expect(res.data[0].coin).toBe('BTC');
      expect(res.data[0].chains[0].withdrawMinScale).toEqual(
        expect.any(String),
      );
    });

    it('should return open interest history', async () => {
      const res = await api.getOpenInterestHistory({
        symbol: 'BTCUSDT',
        period: '5m',
      });
      expect(res).toMatchObject(sucessEmptyResponseObject());
      expect(res.data.list[0]).toMatchObject({
        symbol: 'BTCUSDT',
        openInterest: expect.any(String),
        oneSideOpenInterest: expect.any(String),
        timestamp: expect.any(String),
      });
    });

    it('should return margin loans for one coin and for all coins', async () => {
      const one = await api.getMarginLoansAll({ coin: 'BTC' });
      expect(one).toMatchObject(sucessEmptyResponseObject());
      expect(one.data[0]).toMatchObject({
        coin: 'BTC',
        dailyInterest: expect.any(String),
        annualInterest: expect.any(String),
        limit: expect.any(String),
      });

      const all = await api.getMarginLoansAll();
      expect(all).toMatchObject(sucessEmptyResponseObject());
      expect(all.data.length).toBeGreaterThan(1);
    });

    it('should return open interest limit ratios', async () => {
      const res = await api.getContractsOi({
        category: 'USDT-FUTURES',
        symbol: 'BTCUSDT',
      });
      expect(res).toMatchObject(sucessEmptyResponseObject());
      expect(res.data[0]).toMatchObject({
        symbol: 'BTCUSDT',
        singlePositionRatio: expect.any(String),
        totalPositionRatio: expect.any(String),
      });
    });

    it('should return interest rate history for a VIP level', async () => {
      const res = await api.getInterestRateHistory({
        coin: 'USDT',
        level: 'vip0',
        limit: '2',
      });
      expect(res).toMatchObject(sucessEmptyResponseObject());
      expect(res.data.list).toHaveLength(2);
      expect(res.data.list[0]).toMatchObject({
        coin: 'USDT',
        dailyInterestRate: expect.any(String),
        annualInterestRate: expect.any(String),
      });
      expect(res.data.cursor).toEqual(expect.any(String));
    });
  });
});
