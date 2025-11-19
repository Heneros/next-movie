import { IQuery } from '@nestjs/cqrs';

export class FindAllMovieQuery implements IQuery {
  constructor(public readonly page: number = 0) {}
}
