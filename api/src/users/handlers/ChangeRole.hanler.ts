import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { ChangeRoleCommand } from '../commands/ChangeRole.command';
import { UsersRepository } from '../repository/Users.repository';

@CommandHandler(ChangeRoleCommand)
export class ChangeRoleHandler implements ICommandHandler<ChangeRoleCommand> {
  constructor(private readonly usersRepository: UsersRepository) {}

  async execute(command: ChangeRoleCommand) {
    const { id, changeUserRole } = command;

    const user = await this.usersRepository.findUnique(id);
  }
}
