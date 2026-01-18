import { ICommand } from '@nestjs/cqrs';
import { ChangeUserRole } from '../dto/change-user-role.dto';

export class ChangeRoleCommand implements ICommand {
  constructor(
    public id: number,
    public changeUserRole: ChangeUserRole,
  ) {}
}
