import { ICommand } from '@nestjs/cqrs';

export class AddFavoriteCommand implements ICommand {
  constructor(
    public readonly userId: number,
    public readonly movieId: number,
  ) {}
}
