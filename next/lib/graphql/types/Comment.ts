import { Field, ID, Int, ObjectType } from "type-graphql";
import { User } from "./User";

@ObjectType()
export class CommentGQL {
    @Field(() => Int)
    id!: number;

    @Field(() => User)
    user!: User;

    @Field(() => Int)
    userId!: number;

    @Field(() => Int)
    movieId!: number;

    @Field()
    body!: string;

    @Field()
    createdAt!: Date;

    @Field()
    updatedAt!: Date;
}

@ObjectType()
export class CommentsPage {
    @Field(() => [CommentGQL])
    items?: CommentGQL[];

    @Field(() => Int)
    total!: number;

    @Field(() => Int)
    page!: number;

    @Field(() => Int)
    limit!: number;
}
