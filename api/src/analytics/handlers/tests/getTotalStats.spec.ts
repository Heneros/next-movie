import { GetMonthlyStatsQuery, GetTotalStatsQuery } from '@/analytics/query';
import { GetMonthlyStatsHandler } from '../GetMonthlyStats.handler';
import { GetTotalStatsHandler } from '../GetTotalStats.handler';

describe('Get Total Stats', () => {
  let handler: GetTotalStatsHandler;

  let analyticsRepository: {
    getTotalStats: jest.Mock;
  };

  beforeEach(() => {
    analyticsRepository = {
      getTotalStats: jest.fn(),
    };

    handler = new GetTotalStatsHandler(analyticsRepository as any);
  });

  it('Get Total Stats', async () => {
    const userId = 2;
    analyticsRepository.getTotalStats.mockResolvedValue({
      _sum: { viewCount: 42 },
    });

    const result = await handler.execute(new GetTotalStatsQuery(userId));

    expect(analyticsRepository.getTotalStats).toHaveBeenCalledTimes(1);
    expect(analyticsRepository.getTotalStats).toHaveBeenCalledWith(userId);
    expect(result).toEqual({ totalViews: 42 });
  });
  it('returns 0 when repository returns null sum (no rows)', async () => {
    const userId = 5;
    analyticsRepository.getTotalStats.mockResolvedValue({
      _sum: { viewCount: null },
    });
    const result = await handler.execute(new GetTotalStatsQuery(userId));
    expect(analyticsRepository.getTotalStats).toHaveBeenCalledTimes(1);
    expect(analyticsRepository.getTotalStats).toHaveBeenCalledWith(userId);
    expect(result).toEqual({ totalViews: 0 });
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
});
