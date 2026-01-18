import { ICommand } from '@nestjs/cqrs';
import { RateMovieDto } from '../dto-input/rate-movie.dto';

export class RateMovieCommand implements ICommand {
  constructor(
    public readonly movieId: number,
    public readonly userId: number,
    public readonly value: number,
  ) {}
}
