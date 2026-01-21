import { ApiProperty } from '@nestjs/swagger';
import { Movie } from '@prisma/client';
import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'Movie' })
export class MovieEntity implements Movie {
  @ApiProperty()
  @Field(() => Int)
  id: number;

  @ApiProperty()
  @Field(() => String, { nullable: false })
  title: string;

  @ApiProperty()
  @Field(() => String, { nullable: false })
  description: string | null;

  @ApiProperty()
  @Field(() => [String], { nullable: false })
  category: string[];

  @ApiProperty()
  @Field(() => String, { nullable: false })
  backdropUrl: string | null;

  @ApiProperty()
  @Field(() => String, { nullable: false })
  backdropPublicId: string | null;

  @ApiProperty()
  @Field(() => String, { nullable: false })
  posterUrl: string | null;

  @ApiProperty()
  @Field(() => String, { nullable: false })
  posterUrlId: string | null;

  @ApiProperty()
  @Field(() => Boolean, { nullable: true })
  published: boolean;

  @ApiProperty()
  @Field(() => Date, { nullable: true })
  createdAt: Date;

  @ApiProperty()
  @Field(() => Date, { nullable: true })
  updatedAt: Date;

  @ApiProperty({ required: false, nullable: true })
  @Field(() => Int, { nullable: true })
  authorId: number;

  @ApiProperty({ required: false, nullable: true })
  @Field(() => Int, { nullable: true })
  previewId: number;

  @ApiProperty()
  @Field(() => [String])
  actorsList: string[];

  @ApiProperty()
  @Field(() => Int, { nullable: true })
  movieId: number;

  @ApiProperty()
  @Field(() => Int, { nullable: true })
  userId: number;

  @ApiProperty()
  @Field(() => Int, { nullable: true })
  galleryId: number;

  @ApiProperty()
  @Field(() => Int, { nullable: true })
  slug: string;

  @ApiProperty()
  @Field(() => Float, { nullable: true })
  avgRating: number;

  @ApiProperty()
  @Field(() => Int, { nullable: true })
  year: number | null;

  @ApiProperty()
  @Field(() => Int, { nullable: true })
  posterId: number | null;

  @ApiProperty()
  @Field(() => String, { nullable: true })
  provider: string | null;

  @ApiProperty()
  @Field(() => [String], { nullable: true })
  tags: string[];

  constructor(data: Partial<MovieEntity> = {}) {
    Object.assign(this, data);
    // if (authorId) {
    //   this.authorId;
    // }
  }
}
