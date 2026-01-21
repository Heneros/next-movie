import { IQuery } from '@nestjs/cqrs';
import { FilterTvShows } from '../dto-input/Filter-tvShows.dto';
// import { FilterMovieDto } from '../dto-input/filter-movie.dto';

export class GetAllTvShowQuery implements IQuery {
  constructor(
    public readonly offset: number,
    public readonly limit: number,
    public readonly page: number,
    public readonly filters: FilterTvShows,
  ) {}
}
