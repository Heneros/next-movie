import { ObjectType, Field, ID, Int } from "type-graphql";
import { IsEmail, MinLength } from "class-validator";
import { User } from "./User";

@ObjectType()
export class Post {
    @Field(() => ID)
    id!: string;

    @Field()
    @MinLength(5)
    title!: string;

    @Field()
    content!: string;

    @Field()
    authorId?: string;

    @Field(() => [User], { nullable: true })
    // @Field(() => [require("./User")], { nullable: true })
    author!: User;

    @Field()
    createdAt?: Date;
}
