import { IQuery } from '@nestjs/cqrs';
import { FilterMovieDto } from '../dto-input/filter-movie.dto';

export class FindAllMovieQuery implements IQuery {
  constructor(
    public readonly offset: number,

    public readonly limit: number,
    public readonly page: number,
    public readonly filters: FilterMovieDto,
  ) {}
}
