import { ICommand } from '@nestjs/cqrs';

export class CreateCollectionCommand implements ICommand {
  constructor(
    public readonly createCollectionDt: number,
  ) {}
}
