import {
    Resolver,
    Query,
    Mutation,
    Arg,
    ID,
    FieldResolver,
    Root,
} from "type-graphql";
import { User } from "../types/User";
import { CreateUserInput, UpdateUserInput } from "../inputs/UserInput";

const users: User[] = [];
const posts: any[] = [];

@Resolver(() => User)
export class UserResolver {
    // @Query(() => User, { nullable: true })
    // async user(@Arg("id", () => ID) id: string): Promise<User | null> {
    //   return users.find((user) => user.id === id) || null;
    // }
    // @Mutation(() => User)
    // async createUser(@Arg("data") data: CreateUserInput): Promise<User> {
    //   const user: User = {
    //     id: Date.now().toString(),
    //     ...data,
    //     createdAt: new Date(),
    //   };
    //   users.push(user);
    //   return user;
    // }
    // @Mutation(() => User, { nullable: true })
    // async updateUser(
    //   @Arg("id", () => ID) id: string,
    //   @Arg("data") data: UpdateUserInput
    // ): Promise<User | null> {
    //   const userIndex = users.findIndex((user) => user.id === id);
    //   if (userIndex === -1) {
    //     return null;
    //   }
    //   users[userIndex] = { ...users[userIndex], ...data };
    //   return users[userIndex];
    // }
    // @Mutation(() => Boolean)
    // async deleteUser(@Arg("id", () => ID) id: string): Promise<boolean> {
    //   const userIndex = users.findIndex((user) => user.id === id);
    //   if (userIndex === -1) {
    //     return false;
    //   }
    //   users.splice(userIndex, 1);
    //   return true;
    // }
    // @FieldResolver()
    // async posts(@Root() user: User) {
    //   return posts.filter((post) => post.authorId === user.id);
    // }
}
