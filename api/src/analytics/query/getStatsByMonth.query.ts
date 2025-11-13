import { IQuery } from '@nestjs/cqrs';

export class GetMonthlyStatsQuery implements IQuery {
  constructor(
    public readonly userId: number,
    public readonly monthsBack: number = 12,
  ) {}
}
