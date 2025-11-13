import { GetMonthlyStatsQuery, GetTotalStatsQuery } from '@/analytics/query';
import { GetMonthlyStatsHandler } from '../GetMonthlyStats.handler';
import { GetTotalStatsHandler } from '../GetTotalStats.handler';
import { IncrementViewCommand } from '@/analytics/commands';
import { IncrementViewHandler } from '../IncrementView.handler';

describe('Increase Views Stats', () => {
  let handler: IncrementViewHandler;

  let analyticsRepository: {
    increaseStat: jest.Mock;
  };

  beforeEach(() => {
    analyticsRepository = {
      increaseStat: jest.fn(),
    };

    handler = new IncrementViewHandler(analyticsRepository as any);
  });

  it('Increase Stats', async () => {
    const userId = 7;
    const fakeReturn = { id: 2, userId, year: 2023, month: 2, viewCount: 5 };
    analyticsRepository.increaseStat.mockResolvedValue(fakeReturn);

    const res = await handler.execute(new IncrementViewCommand(userId));

    expect(analyticsRepository.increaseStat).toHaveBeenCalledTimes(1);
    expect(res).toBe(fakeReturn);
  });

  it('propagates error when repository throws', async () => {
    const userId = 99;
    const error = new Error('DB failure');

    analyticsRepository.increaseStat.mockRejectedValue(error);

    await expect(
      handler.execute(new IncrementViewCommand(userId)),
    ).rejects.toThrow('DB failure');

    expect(analyticsRepository.increaseStat).toHaveBeenCalledTimes(1);
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
});
