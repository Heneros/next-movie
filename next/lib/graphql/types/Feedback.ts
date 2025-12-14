import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class FeedbackType {
    @Field(() => ID)
    id!: string;

    @Field(() => String, { nullable: false })
    public email!: string;

    @Field(() => String, { nullable: false })
    username!: string;

    @Field(() => String, { nullable: false })
    message!: string;
}
