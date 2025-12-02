import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { Mutation, Resolver, Query, Args } from '@nestjs/graphql';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '@/guards/jwt-auth.guard';

import { CheckMovieExistPipe } from '@/pipe/CheckMovieExist.pipe';
import { CheckUserExistPipe } from '@/pipe/CheckUserExistPipe.pipe';
import { CreateReviewCommand } from './commands';
import { CreateReviewDto } from './dto/create-review.dto';
import { ReviewEntity } from './entities/review.entity';

@ApiTags('Reviews')
@Resolver((of) => ReviewEntity)
export class ReviewsResolver {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Query(() => [ReviewEntity], {
    description: 'Get all reviews',
  })
  async getReview() {
    // const createReview = await this.commandBus.execute(
    //   new CreateReviewCommand(movieId, userId),
    // );
    // return createReview;
  }

  // @UseGuards(JwtAuthGuard)
  @Mutation(() => ReviewEntity, {
    description: 'Create review to movie',
  })
  @ApiResponse({ status: 201, description: 'Review Created' })
  async createReview(
    @Args('movieId', CheckMovieExistPipe) movieId: number,///Change later on @User
    @Args('userId', CheckUserExistPipe) userId: number,
    @Args('input') content: CreateReviewDto,
  ) {
    const createReview = await this.commandBus.execute(
      new CreateReviewCommand(movieId, userId, content),
    );
    return createReview;
  }
}
