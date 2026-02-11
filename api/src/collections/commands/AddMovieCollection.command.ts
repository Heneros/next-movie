import { ICommand } from '@nestjs/cqrs';

export class AddMovieCollectionCommand implements ICommand {
  constructor(
    public readonly collectionId: number,
    public readonly movieId: number,
  ) {}
}
