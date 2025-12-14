import { InputType, Field } from "type-graphql";
import { IsEmail, MinLength, Min, Max } from "class-validator";

@InputType()
export class CreateUserInput {
    @Field()
    @IsEmail()
    email!: string;

    @Field()
    @MinLength(2)
    name!: string;

    @Field()
    @Min(1)
    @Max(120)
    age!: number;
}

@InputType()
export class UpdateUserInput {
    @Field({ nullable: true })
    @MinLength(2)
    name?: string;

    @Field({ nullable: true })
    @Min(1)
    @Max(120)
    age?: number;
}

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
