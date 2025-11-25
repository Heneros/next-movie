import { ICommand } from '@nestjs/cqrs';
import { UpdateUserDto } from '../dto/update-user.dto';

export class UpdateProfileCommand implements ICommand {
  constructor(
    public id: number,
    public updateUserDto: UpdateUserDto,
  ) {}
}
