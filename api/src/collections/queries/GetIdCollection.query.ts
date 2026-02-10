import { IQuery } from '@nestjs/cqrs';
// import { FilterMovieDto } from '../dto-input/filter-movie.dto';

export class GetIdCollectionQuery implements IQuery {
  constructor(
    public readonly collectionId: number,
  ) {}
}
