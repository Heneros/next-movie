import { Field, ID, Int } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";

export class Review {
    @ApiProperty()
    @Field(() => ID, { nullable: false })
    id: number;

    @Field(() => Int, {nullable: false})
    @ApiProperty()
    userId: number

    @Field(() => Int, {nullable: false})
    @ApiProperty()
    movieId: number

    
    @Field(() => String, {nullable: false})
    @ApiProperty()
    review: String

    @Field(() => Date, {nullable: true})
    @ApiProperty()
    createdAt: Date

    @ApiProperty()
    @Field(() => Date, { nullable: false })
    updatedAt: Date;

}
