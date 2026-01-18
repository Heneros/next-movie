import { IQuery } from '@nestjs/cqrs';

export class GetIdMovieQuery implements IQuery {
  constructor(public readonly movieId: number) {}
}
