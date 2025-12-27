import { ICommand } from '@nestjs/cqrs';

export class RemoveFromFavoriteCommand implements ICommand {
  constructor(
    public readonly userId: number,
    public readonly movieId: number,
  ) {}
}
