import { ICommand } from '@nestjs/cqrs';
import { AddMovieToCollectionDto } from '../dto-input/MovieId.dto';

export class RemoveMovieCollectionCommand implements ICommand {
  constructor(
    public readonly collectionId: number,
    public readonly movieId: number,
  ) {}
}
