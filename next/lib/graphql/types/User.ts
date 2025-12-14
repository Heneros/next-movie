// import { UserRole } from '@prisma/client';
import { ObjectType, Field, ID, Int, registerEnumType } from 'type-graphql';

// registerEnumType(UserRole, {
//     name: 'UserRole',
// });

@ObjectType()
export class User {
    @Field(() => ID)
    id!: number;

    @Field()
    email!: string;

    @Field()
    username!: string;

    @Field()
    role!: any; //change lat

    @Field(() => Date, { nullable: true })
    phoneVerified?: Date | null;

    @Field(() => Date)
    createdAt!: Date;

    @Field()
    payment?: string | null;
}
