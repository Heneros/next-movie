import {
    Resolver,
    Query,
    Mutation,
    Arg,
    ID,
    FieldResolver,
    Root,
} from 'type-graphql';
import { Post } from '../types/Post';

@Resolver(() => Post)
export class PostResolver {
    @Query(() => [Post])
    posts(): Post[] {
        const author: any = { id: '1', name: 'Alice', age: 25 };

        return [
            {
                id: '101',
                title: 'Hello World',
                content: 'This is a GraphQL post.',
                author,
            },
        ];
    }
    // @Query(() => [Post])
    // async posts(): Promise<Post[]> {
    //   return posts;
    // }

    // @Query(() => Post, { nullable: true })
    // async post(@Arg("id", () => ID) id: string): Promise<Post | null> {
    //   return posts.find((post) => post.id === id) || null;
    // }

    // @Mutation(() => Post)
    // async createPost(@Arg("data") data: CreatePostInput): Promise<Post> {
    //   const post: Post = {
    //     id: Date.now().toString(),
    //     ...data,
    //     createdAt: new Date(),
    //   } as Post;

    //   posts.push(post);
    //   return post;
    // }

    // @Mutation(() => Boolean)
    // async deletePost(@Arg("id", () => ID) id: string): Promise<boolean> {
    //   const postIndex = posts.findIndex((post) => post.id === id);

    //   if (postIndex === -1) {
    //     return false;
    //   }

    //   posts.splice(postIndex, 1);
    //   return true;
    // }

    // @FieldResolver()
    // async author(@Root() post: Post) {
    //   return users.find((user) => user.id === post.authorId);
    // }
}
