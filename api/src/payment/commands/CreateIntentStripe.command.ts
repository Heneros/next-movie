import { ICommand } from '@nestjs/cqrs';
import { CreateIntentDto } from '../dto/CreateIntent.dto';

export class CreateIntentCommand implements ICommand {
  constructor(
    public userId: number,
    public createIntentDto: CreateIntentDto,
  ) {}
}
