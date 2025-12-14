import { gql, useMutation, useQuery } from "@apollo/client";

const LIKE_COUNT = gql`
    query LikesCount($movieId: Int!) {
        likesCount(movieId: $movieId)
    }
`;

const USER_LIKED = gql`
    query UserLiked($movieId: Int!) {
        userLiked(movieId: $movieId)
    }
`;

const TOGGLE_LIKE = gql`
    mutation ToggleLike($movieId: Int!) {
        toggleLike(movieId: $movieId)
    }
`;

export function LikeButton({ movieId }: { movieId: number }) {
    const { data: countData } = useQuery(LIKE_COUNT, {
        variables: { movieId },
    });
    const { data: userLikedData } = useQuery(USER_LIKED, {
        variables: { movieId },
    });

    const [toggleLike] = useMutation(TOGGLE_LIKE, {
        refetchQueries: [
            { query: LIKE_COUNT, variables: { movieId } },
            { query: USER_LIKED, variables: { movieId } },
        ],
        awaitRefetchQueries: true,
    });

    const liked = userLikedData?.userLiked;

    return (
        <>
            <button
                className={`flex items-center gap-2 px-3 py-2 rounded ${
                    liked
                        ? "bg-red-600 text-white"
                        : "bg-gray-100 dark:bg-gray-700"
                }`}
                onClick={() => toggleLike({ variables: { movieId } })}
            >
                <span>{liked ? "♥" : "♡"}</span>
                <span>{countData?.likesCount ?? 0}</span>
            </button>
        </>
    );
}
