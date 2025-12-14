import { ICommand } from '@nestjs/cqrs';
import { CreateReviewDto } from '../dto/create-review.dto';

export class CreateReviewCommand implements ICommand {
  constructor(
    public readonly userId: number,
    public readonly movieId: number,
    public readonly content: CreateReviewDto,
  ) {}
}
