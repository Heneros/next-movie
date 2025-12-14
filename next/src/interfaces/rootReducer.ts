export interface RootState {
    auth: {
        user?: {
            accessToken: string;
        };
        googleToken: string;
        discordToken: string;
        githubToken: string;
    };
}
