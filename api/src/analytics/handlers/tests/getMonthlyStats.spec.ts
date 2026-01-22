import { GetMonthlyStatsQuery } from '@/analytics/query';
import { GetMonthlyStatsHandler } from '../GetMonthlyStats.handler';

describe('Get Views by Month', () => {
  let handler: GetMonthlyStatsHandler;

  let analyticsRepository: {
    getMonthlyStats: jest.Mock;
  };

  beforeEach(() => {
    analyticsRepository = {
      getMonthlyStats: jest.fn(),
    };

    handler = new GetMonthlyStatsHandler(analyticsRepository as any);
  });

  it('Get All Stats by Months', async () => {
    const mockStats = [
  { year: 2025, month: 9, count: 10, label: 'Sep 2025' },
    { year: 2025, month: 10, count: 5, label: 'Oct 2025' },
    ];

    analyticsRepository.getMonthlyStats.mockResolvedValue(mockStats);

    const result = await handler.execute(new GetMonthlyStatsQuery(2, 2));
    expect(analyticsRepository.getMonthlyStats).toHaveBeenCalledTimes(1);
    expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBeGreaterThan(0);

  expect(result[0]).toEqual(
    expect.objectContaining({
      year: expect.any(Number),
      month: expect.any(Number),
      count: expect.any(Number),
      label: expect.any(String),
    }),
  );


  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
