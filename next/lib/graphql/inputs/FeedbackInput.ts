import { IsEmail, IsNotEmpty, MinLength } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
export class FeedbackInput {
    @Field(() => String, { nullable: false })
    @IsNotEmpty()
    @IsEmail()
    public email!: string;

    @Field(() => String, { nullable: false })
    @IsNotEmpty()
    @MinLength(3)
    username!: string;

    @Field(() => String, { nullable: false })
    @IsNotEmpty()
    @MinLength(3)
    message!: string;
}
