import { CommandHandler, ICommandHandler, IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { CreateTvShowCommand } from '../commands';

@QueryHandler(CreateTvShowCommand)
export class GetAllTvShowHandler implements IQueryHandler<CreateTvShowCommand> {
  constructor() {}

  async execute(query: CreateTvShowCommand) {}
}
