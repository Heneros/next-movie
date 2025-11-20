import { IQuery } from '@nestjs/cqrs';

export class FindAllMovieQuery implements IQuery {
  constructor(
    public readonly offset: number,

    public readonly limit: number,
    public readonly page: number,
  ) {}
}
