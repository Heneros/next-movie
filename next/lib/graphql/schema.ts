import "reflect-metadata";

import { buildSchema } from "type-graphql";
import { UserResolver } from "./resolvers/UserResolver";
import { PostResolver } from "./resolvers/PostResolver";
import { FeedbackResolver } from "./resolvers/FeedbackResolver";
import { CommentsResolver } from "./resolvers/CommentsResolver";
import { LikeResolver } from "./resolvers/LikeResolver";

export async function createSchema() {
    const schema = await buildSchema({
        resolvers: [
            UserResolver,
            PostResolver,
            FeedbackResolver,
            CommentsResolver,
            LikeResolver,
        ],
        validate: true,
    });

    return schema;
}
