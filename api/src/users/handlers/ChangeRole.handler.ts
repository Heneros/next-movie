import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { ChangeRoleCommand } from '../commands/ChangeRole.command';
import { UsersRepository } from '../repository/Users.repository';
import { ForbiddenException } from '@nestjs/common';

@CommandHandler(ChangeRoleCommand)
export class ChangeRoleHandler implements ICommandHandler<ChangeRoleCommand> {
  constructor(private readonly usersRepository: UsersRepository) {}

  async execute(command: ChangeRoleCommand) {
    const { id, changeUserRole } = command;

    const user = await this.usersRepository.findUnique({ id });

    if (user.role?.includes('ADMIN')) {
      throw new ForbiddenException('Admin cannot change their own role');
    }

    // const updatedRoles = Array.from(new Set([...changeUserRole.role, 'USER']));

    const role = await this.usersRepository.update(
      { id },
      {
        role: changeUserRole.role,
      },
    );

    return role;
  }
}
