import { IQuery } from '@nestjs/cqrs';

export class GetByIdTvShowQuery implements IQuery {
  constructor(
    public readonly tvShowId: number,
  ) {}
}
