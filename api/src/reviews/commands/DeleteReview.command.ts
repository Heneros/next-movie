import { ICommand } from '@nestjs/cqrs';

export class DeleteReviewCommand implements ICommand {
    constructor(
        public readonly reviewId: number,
        public readonly userId: number,
    ) {}
}
