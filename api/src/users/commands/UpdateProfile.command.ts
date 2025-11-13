import { ICommand } from '@nestjs/cqrs';
import { UpdateUserDto } from '../dto/update-profile';

export class UpdateProfileCommand implements ICommand {
  constructor(
    public id: number,
    public updateUserDto: UpdateUserDto,
  ) {}
}
