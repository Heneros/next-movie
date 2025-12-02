
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { ReviewRepository } from '../repository/Review.repository';
import { GetIdReviewQuery } from '../queries';
import { NotFoundException } from '@nestjs/common';

@QueryHandler(GetIdReviewQuery)
export class GetSingleReviewHandler
    implements IQueryHandler<GetIdReviewQuery>
{
    constructor(private readonly reviewRepository: ReviewRepository) {}
    async execute(command: GetIdReviewQuery) {
        const { reviewId } = command;

        try {
                    const reviews = await this.reviewRepository.findUnique(reviewId);
        return reviews;
        } catch (err) {
            console.error(err)
            throw new NotFoundException('Err', err)
        }

    }
}
