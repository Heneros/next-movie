import { User } from './user';

export interface AuthSlice {
    user: User | null;
    isAuthenticated: boolean;
    token: string;
    googleToken: string | null;
    githubToken: string | null;
}
