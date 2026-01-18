import { ICommand } from '@nestjs/cqrs';

export class DeleteFromFavoriteCommand implements ICommand {
  constructor(public readonly id: number) {}
}
