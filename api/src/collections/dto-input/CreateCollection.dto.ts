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
export class CreateCollectionDto {
  @ApiProperty({
    example: 'My Favorite Collection',
    description: 'Title of the collection',
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @Field()
  title: string;

  @ApiProperty({
    example: 'my-favorite-collection',
    description: 'Slug for the collection',
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @Field()
  slug: string;
}
