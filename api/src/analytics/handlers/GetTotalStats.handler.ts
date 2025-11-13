import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { AnalyticsRepository } from '../repositories/analytics.repository';
import { GetTotalStatsQuery } from '../query';

@QueryHandler(GetTotalStatsQuery)
export class GetTotalStatsHandler implements IQueryHandler<GetTotalStatsQuery> {
  constructor(private analyticsRepository: AnalyticsRepository) {}

  async execute(query: GetTotalStatsQuery) {
    const { userId } = query;

    const total = await this.analyticsRepository.getTotalStats(userId);

    return {
      totalViews: total._sum.viewCount || 0,
    };
  }
}
