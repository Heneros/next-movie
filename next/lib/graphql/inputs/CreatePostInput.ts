import { InputType, Field } from "type-graphql";
import { IsEmail, MinLength, Min, Max } from "class-validator";

@InputType()
export class CreatePostInput {
    @Field()
    @MinLength(5)
    title!: string;

    @Field()
    content!: string;

    @Field()
    authorId!: string;
}
