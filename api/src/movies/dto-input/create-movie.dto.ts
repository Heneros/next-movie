import { Field, InputType, Int } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
  IsNumber,
  Length,
} from 'class-validator';

@InputType()
export class CreateMovieDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @Field(() => String, { nullable: false, description: 'Title movie' })
  @Length(2, 30, { message: 'Name must be between 2 and 30 characters' })
  @ApiProperty({ required: true, description: 'Title Movie' })
  public readonly title: string;

  @IsString()
  @Field(() => String, {
    nullable: false,
    description: 'Description about movie',
  })
  @IsNotEmpty()
  @Length(10, 350, {
    message: 'Description must be between 10 and 350 characters',
  })
  @ApiProperty({
    required: true,
    description: 'Movie Description',
    example: 'Inception',
  })
  public readonly description?: string;

  @Field(() => String, { nullable: false, description: 'Movie category' })
  @IsNotEmpty()
  @ApiProperty({
    required: true,
    description: 'Movie category',
    example: 'Science Fiction',
  })
  public readonly category: string[];

  @Field(() => Int, { nullable: true, description: 'Year' })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  @ApiProperty({ required: false })
  year?: number;

  @Field(() => Int, { nullable: true, description: 'id' })
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  @ApiProperty({ required: false })
  id?: number;

  @Field(() => String, { nullable: false, description: 'slug' })
  @IsString()
  @ApiProperty({
    required: true,
    description: 'Slug of movie',
    example: ['james', 'jose'],
  })
  public readonly slug: string;

  @Field(() => Boolean, {
    nullable: true,
    defaultValue: false,
    description: 'Published status',
  })
  @IsBoolean()
  @IsOptional()
  @ApiProperty({
    required: false,
    default: false,
    description: 'Movie publication status',
  })
  published?: boolean = false;
}
