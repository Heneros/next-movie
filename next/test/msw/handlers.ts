import { graphql } from "msw";

export const handlers = [
    graphql.query("LikesCount", ({ query, variables }) => {
        return new Response(
            JSON.stringify({
                data: {
                    likesCount: 5,
                },
            }),
        );
    }),

    graphql.query("UserLiked", ({ query, variables }) => {
        return new Response(
            JSON.stringify({
                data: {
                    userLiked: true,
                },
            }),
        );
    }),

    graphql.mutation("ToggleLike", ({ query, variables }) => {
        return new Response(
            JSON.stringify({
                data: {
                    toggleLike: true,
                },
            }),
        );
    }),
];
