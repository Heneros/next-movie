import { Field, Float, Int, ObjectType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { TvShow } from '@prisma/client';

@ObjectType({ description: 'TvShow' })
export class TvShowEntity implements TvShow {
  @ApiProperty()
  @Field(() => Int)
  id: number;

  @ApiProperty()
  @Field(() => String, { nullable: false })
  title: string;

  @ApiProperty()
  @Field(() => String, { nullable: false })
  slug: string;

  @ApiProperty()
  @Field(() => String, { nullable: false })
  description: string | null;

  @ApiProperty()
  @Field(() => Float, { nullable: true })
  avgRating: number;

  @ApiProperty()
  @Field(() => Int, { nullable: true })
  year: number | null;

  @ApiProperty()
  @Field(() => [String], { nullable: false })
  category: string[];

  @ApiProperty()
  @Field(() => [String], { nullable: true })
  tags: string[];

  @ApiProperty()
  @Field(() => String, { nullable: true })
  provider: string | null;

  @ApiProperty()
  @Field(() => Boolean, { nullable: true })
  published: boolean;

  @ApiProperty()
  @Field(() => Date, { nullable: true })
  createdAt: Date;

  @ApiProperty()
  @Field(() => Date, { nullable: true })
  updatedAt: Date;

  @ApiProperty()
  @Field(() => Int)
  authorId: number;

  @ApiProperty()
  @Field(() => String, { nullable: false })
  backdropUrl: string;

  @ApiProperty()
  @Field(() => String, { nullable: false })
  backdropPublicId: string;

  @ApiProperty()
  @Field(() => String, { nullable: false })
  posterUrl: string;

  @ApiProperty()
  @Field(() => String, { nullable: false })
  posterUrlId: string;

  constructor(data: Partial<TvShowEntity> = {}) {
    Object.assign(this, data);
    // if (authorId) {
    //   this.authorId;
    // }
  }
}
