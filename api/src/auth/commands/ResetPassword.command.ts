import { ResetPasswordDto } from '../dto';
import { ICommand } from '@nestjs/cqrs';

export class ResetPasswordCommand implements ICommand {
  constructor(
    public userId: number,
    public resetPasswordDto: ResetPasswordDto,
  ) {}
}
