import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { Review } from './entities/review.entity';
import { Mutation, Resolver, Args } from "@nestjs/graphql";
import { CommandBus, QueryBus } from "@nestjs/cqrs";
import { UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "@/guards/jwt-auth.guard";

import { CheckMovieExistPipe } from "@/pipe/CheckMovieExist.pipe";
import { CheckUserExistPipe } from "@/pipe/CheckUserExistPipe.pipe";

@ApiTags('Reviews')
@Resolver((of) => Review)
export class ReviewsResolver{
    constructor(
                private readonly commandBus: CommandBus,
        private readonly queryBus: QueryBus,
    ){}

    @UseGuards(JwtAuthGuard)
    @Mutation(() => Review, {
        description: 'Create review to movie'
    })
    @ApiResponse({status: 201, description:  'Review Created'})
    async createReview(
        @Args('movieId', CheckMovieExistPipe) movieId: number, 
    @Args('userId', CheckUserExistPipe) userId: number, 
){

    }

}