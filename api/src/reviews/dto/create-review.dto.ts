import { Field, InputType, registerEnumType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsString, Length } from 'class-validator';

export enum Recommended {
  GOOD = 'Good',
  NEUTRALITY = 'Neutrality',
  NEGATIVE = 'Negative',
}
registerEnumType(Recommended, {
  name: 'Recommended',
});
@InputType()
export class CreateReviewDto {
  @IsString()
  @IsNotEmpty()
  @Length(3, 350)
  @Field(() => String, { nullable: false, description: 'Text of review' })
  @ApiProperty({
    description: 'Text of review',
    example: 'I love this movie...',
  })
  public text: string;

  @IsEnum(Recommended)
  @Field(() => Recommended, {
    nullable: false,
    description: 'Feedback recommendation',
  })
  @ApiProperty({
    description: 'Feedback recommendation',
    enum: Recommended,
    example: Recommended.GOOD,
  })
  public feedback: Recommended.NEGATIVE;
}
