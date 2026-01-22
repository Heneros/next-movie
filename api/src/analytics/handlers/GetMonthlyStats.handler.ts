import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { AnalyticsRepository } from '../repositories/analytics.repository';
import { GetMonthlyStatsQuery } from '../query';

@QueryHandler(GetMonthlyStatsQuery)
export class GetMonthlyStatsHandler implements IQueryHandler<GetMonthlyStatsQuery> {
  constructor(private analyticsRepository: AnalyticsRepository) {}

  async execute(query: GetMonthlyStatsQuery) {
    const { userId } = query;
    const result = await this.analyticsRepository.getMonthlyStats(userId);
    return result;
  }
}
