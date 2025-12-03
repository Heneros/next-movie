import { BadRequestException, NotFoundException } from '@nestjs/common';
import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { UpdateReviewCommand } from '../commands';
import { ReviewRepository } from '../repository/Review.repository';
import { differenceInMinutes } from 'date-fns';

@CommandHandler(UpdateReviewCommand)
export class UpdateMReviewHandler implements ICommandHandler<UpdateReviewCommand> {
  constructor(private readonly reviewRepository: ReviewRepository) {}

  async execute(command: UpdateReviewCommand) {
    const { id, createMovieReviewDto } = command;

    try {
      const review = await this.reviewRepository.findUnique({ id: id });
      // console.log(review);

      if (!review) {
        throw new NotFoundException('Review not exist');
      }
      const now = new Date();
      const reviewCreatedAt = new Date(review.createdAt);
      const minutesPassed = differenceInMinutes(now, reviewCreatedAt);

      if (minutesPassed > 15) {
        throw new BadRequestException(
          'You can only edit the review within 15 minutes of creation.',
        );
      }

      const res = await this.reviewRepository.update(
        { id },
        {
          text: createMovieReviewDto.text,
          feedback: createMovieReviewDto.feedback,
        },
      );
      return res;
    } catch (error) {
      console.error(error);
      if (error instanceof NotFoundException || BadRequestException) {
        throw error;
      }
    }
  }
}
