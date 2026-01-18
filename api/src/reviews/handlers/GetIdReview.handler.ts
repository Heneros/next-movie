import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { ReviewRepository } from '../repository/Review.repository';
import { GetIdReviewQuery } from '../queries';
import { NotFoundException } from '@nestjs/common';

@QueryHandler(GetIdReviewQuery)
export class GetSingleReviewHandler implements IQueryHandler<GetIdReviewQuery> {
  constructor(private readonly reviewRepository: ReviewRepository) {}
  async execute(query: GetIdReviewQuery) {
    const { id } = query;

    try {
      const reviews = await this.reviewRepository.findUnique({ id: id });
      if (!reviews) {
        throw new NotFoundException('Not found review');
      }
      return reviews;
    } catch (err) {
      //   console.error(err);
      if (err instanceof NotFoundException) {
        throw err;
      }
    }
  }
}
