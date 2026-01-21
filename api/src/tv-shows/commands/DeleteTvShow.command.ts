import { ICommand } from '@nestjs/cqrs';

export class DeleteTvShowCommand implements ICommand {
  constructor(public readonly tvShowId: number) {}
}
