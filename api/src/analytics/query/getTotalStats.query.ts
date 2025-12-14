import { IQuery } from '@nestjs/cqrs';

export class GetTotalStatsQuery implements IQuery {
  constructor(public readonly userId: number) {}
}
