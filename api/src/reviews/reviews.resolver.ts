import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { Mutation, Resolver, Query, Args } from '@nestjs/graphql';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { ParseIntPipe, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '@/guards/jwt-auth.guard';

import { CheckMovieExistPipe } from '@/pipe/CheckMovieExist.pipe';
import { CheckUserExistPipe } from '@/pipe/CheckUserExistPipe.pipe';
import {
  CreateReviewCommand,
  DeleteReviewCommand,
  UpdateReviewCommand,
} from './commands';
import { CreateReviewDto } from './dto/create-review.dto';
import { ReviewEntity } from './entities/review.entity';
import { GetIdReviewQuery } from './queries';

@ApiTags('Reviews')
@Resolver((of) => ReviewEntity)
export class ReviewsResolver {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Query(() => ReviewEntity, {
    nullable: false,
    description: 'Get review by id',
  })
  @ApiResponse({ status: 401, description: 'Review not found' })
  async getReview(@Args('id', ParseIntPipe) id: number) {
    const createReview = await this.queryBus.execute(new GetIdReviewQuery(id));
    return createReview;
  }

  // @UseGuards(JwtAuthGuard)//Change later on
  @Mutation(() => ReviewEntity, {
    description: 'Create review to movie',
  })
  @ApiResponse({ status: 201, description: 'Review Created' })
  async createReview(
    @Args('movieId', CheckMovieExistPipe) movieId: number, ///Change later on @User
    @Args('userId', CheckUserExistPipe) userId: number,
    @Args('input') content: CreateReviewDto,
  ) {
    const createReview = await this.commandBus.execute(
      new CreateReviewCommand(movieId, userId, content),
    );
    return createReview;
  }

  @Mutation(() => ReviewEntity, {
    nullable: false,
    description: 'Delete review to movie',
  })
  @ApiResponse({ status: 201, description: 'Review Created' })
  async deleteReview(
    @Args('id') id: number, ///Change later on @User
  ) {
    const createReview = await this.commandBus.execute(
      new DeleteReviewCommand(id),
    );
    return createReview;
  }

  @Mutation(() => ReviewEntity, {
    // nullable: false,
    description: 'Update review to movie',
  })
  @ApiResponse({ status: 201, description: 'Review Created' })
  async updateReview(
    @Args('id') id: number, ///Change later on @User
    @Args('input') content: CreateReviewDto,
  ) {
    const createReview = await this.commandBus.execute(
      new UpdateReviewCommand(id, content),
    );
    return createReview;
  }
}
