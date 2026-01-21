import { ICommand } from '@nestjs/cqrs';
import { UpdateTvShowDto } from '../dto-input/UpdateTvShow.dto';

export class UpdateTvShowCommand implements ICommand {
  constructor(    public readonly tvShowId: number,
      public readonly updateTvShowDto: UpdateTvShowDto,) {}
}
