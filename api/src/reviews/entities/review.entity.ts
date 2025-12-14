import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { CreateReviewDto, Recommended } from '../dto/create-review.dto';
@ObjectType()
export class ReviewEntity {
  @ApiProperty()
  @Field(() => ID, { nullable: false })
  id: number;

  @Field(() => Int, { nullable: false })
  @ApiProperty()
  userId: number;

  @Field(() => Int, { nullable: false })
  @ApiProperty()
  movieId: number;

  @Field(() => String, { nullable: false })
  @ApiProperty()
  text: string;

  @Field(() => String, { nullable: false })
  @ApiProperty({ enum: Recommended })
  feedback: string;

  @Field(() => Date, { nullable: true })
  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  @Field(() => Date, { nullable: false })
  updatedAt: Date;
}
