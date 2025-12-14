import { ICommand, ICommandHandler } from '@nestjs/cqrs';

export class IncrementViewCommand implements ICommand {
  constructor(public userId: number) {}
}
