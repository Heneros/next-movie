import { CommandHandler, IQueryHandler } from '@nestjs/cqrs';
import { AddFavoriteCommand } from '../commands';

@CommandHandler(AddFavoriteCommand)
export class AddFavoriteHandler implements IQueryHandler<AddFavoriteCommand> {
  constructor() {}

  async execute(command: AddFavoriteCommand) {}
}
