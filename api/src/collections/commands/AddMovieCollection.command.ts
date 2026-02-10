import { ICommand } from '@nestjs/cqrs';

export class AddMovieCollectionCommand implements ICommand {
  constructor(
public readonly movieId: number,
public readonly idCollection: number
  ) {}
}
