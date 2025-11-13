import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

export const apolloClient = new ApolloClient({
    ssrMode: typeof window === "undefined",
    cache: new InMemoryCache(),
    link: new HttpLink({
        uri: `${process.env.NEXT_PUBLIC_BASE_URL || ""}/api/graphql`,
        credentials: "include",
        fetch,
    }),
});
