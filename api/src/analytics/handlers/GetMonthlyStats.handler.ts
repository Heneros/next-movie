import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { AnalyticsRepository } from '../repositories/analytics.repository';
import { GetMonthlyStatsQuery } from '../query';

@QueryHandler(GetMonthlyStatsQuery)
export class GetMonthlyStatsHandler
  implements IQueryHandler<GetMonthlyStatsQuery>
{
  constructor(private analyticsRepository: AnalyticsRepository) {}

  async execute(query: GetMonthlyStatsQuery) {
    const { userId, monthsBack } = query;

    const now = new Date();

    const startDate = new Date(
      now.getFullYear(),
      now.getMonth() - monthsBack + 1,
      1,
    );

    const stats = await this.analyticsRepository.findMany({
      where: {
        userId,
        OR: [
          {
            year: { gte: startDate.getFullYear() },
            month: { gte: startDate.getMonth() + 1 },
          },
          {
            year: { gt: startDate.getFullYear() },
          },
        ],
      },
      orderBy: [{ year: 'asc' }, { month: 'asc' }],
    });

    const result = this.fillMissingMonths(stats, monthsBack);

    const viewCounts = result.map((r) => r.views);
    const maxViews = Math.max(...viewCounts);
    const minViews = Math.min(...viewCounts);

    return {
      data: result,
      peak: {
        views: maxViews,
        month: result.find((r) => r.views === maxViews),
      },
      minimum: {
        views: minViews,
        month: result.find((r) => r.views === minViews),
      },
      total: viewCounts.reduce((sum, v) => sum + v, 0),
    };
  }

  private fillMissingMonths(
    stats: { year: number; month: number; viewCount: number }[],
    monthsBack: number,
  ) {
    const result = [];
    const now = new Date();

    for (let i = monthsBack - 1; i >= 0; i--) {
      const date = new Date(now.getFullYear(), now.getMonth() - i, 1);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;

      const existing = stats.find((s) => s.year === year && s.month === month);

      const monthName = date.toLocaleString('en', {
        month: 'long',
        year: 'numeric',
      });
      result.push({
        year,
        month,
        monthName,
        views: existing?.viewCount || 0,
      });
    }
    return result;
  }
}
