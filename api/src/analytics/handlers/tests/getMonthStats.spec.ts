import { GetMonthlyStatsQuery } from '@/analytics/query';
import { GetMonthlyStatsHandler } from '../GetMonthlyStats.handler';

describe('Get Views by Month', () => {
  let handler: GetMonthlyStatsHandler;

  let analyticsRepository: {
    findMany: jest.Mock;
  };

  beforeEach(() => {
    analyticsRepository = {
      findMany: jest.fn(),
    };

    handler = new GetMonthlyStatsHandler(analyticsRepository as any);
  });

  it('Get All Stats by Months', async () => {
    const mockStats = [
      { year: 2025, month: 9, viewCount: 10 },
      { year: 2025, month: 10, viewCount: 5 },
    ];

    analyticsRepository.findMany.mockResolvedValue(mockStats);

    const result = await handler.execute(new GetMonthlyStatsQuery(2, 2));
    expect(analyticsRepository.findMany).toHaveBeenCalledTimes(1);
    expect(result).toBeInstanceOf(Array);
    expect(result).toBeGreaterThanOrEqual(0);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
