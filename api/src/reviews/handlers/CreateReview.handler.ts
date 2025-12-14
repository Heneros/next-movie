import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateReviewCommand } from '../commands';
import { ReviewRepository } from '../repository/Review.repository';
import { BadRequestException, ForbiddenException } from '@nestjs/common';

@CommandHandler(CreateReviewCommand)
export class CreateReviewHandler
  implements ICommandHandler<CreateReviewCommand>
{
  constructor(
  private  readonly reviewRepository: ReviewRepository
  ) {}

  async execute(command: CreateReviewCommand): Promise<any> {
    const {userId, movieId, content} = command


    try {
          const review = await this.reviewRepository.findUnique({movieId, userId})

       if (review) {
            throw new ForbiddenException('You already reviewed this movie.');
        }

        const newReview = await this.reviewRepository.create({movieId, userId, text: content.text, feedback: content.feedback,  }) 
        return newReview  
    } catch (err) {
        console.error(err)
        throw new BadRequestException('Review err', err)
    }

    
  }
}
