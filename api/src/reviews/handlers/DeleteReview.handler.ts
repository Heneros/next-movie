import { BadRequestException, NotFoundException } from '@nestjs/common';
import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { DeleteReviewCommand } from '../commands';
import { ReviewRepository } from '../repository/Review.repository';

@CommandHandler(DeleteReviewCommand)
export class DeleteMReviewHandler implements ICommandHandler<DeleteReviewCommand> {
  constructor(private readonly reviewRepository: ReviewRepository) {}

  async execute(command: DeleteReviewCommand) {
    const { id } = command;

    try {
      const review = await this.reviewRepository.findUnique({ id });
      // console.log(review);

      if (!review) {
        throw new NotFoundException('Review not exist');
      }

      const res = await this.reviewRepository.delete({ id: review.id });

      return res;
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
    }
  }
}
