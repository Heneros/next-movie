import { ICommand } from '@nestjs/cqrs';
import { CreateReviewDto } from '../dto/create-review.dto';

export class UpdateReviewCommand implements ICommand {
    constructor(
        public readonly reviewId: number,
        public readonly userId: number,
        public readonly createMovieReviewDto: CreateReviewDto ,
    ) {}
}
