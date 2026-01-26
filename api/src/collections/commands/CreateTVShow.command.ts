import { ICommand } from '@nestjs/cqrs';
import { CreateTvShowDto } from '../dto-input/CreateTvShow.dto';

export class CreateTvShowCommand implements ICommand {
  constructor(
    public readonly userId: number,
    public readonly createTvShowDto: CreateTvShowDto,
  ) {}
}
