import { User } from '@/interfaces';
import { readLocalStorageItem } from '@/utils/functions';
// import { AuthSlice } from '@/interfaces/AuthSlice.interface';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { isExpired } from 'react-jwt';

type AuthState = {
    user: User | null;
    userToken: string;
    googleToken?: string | null;
    githubToken?: string | null;
};

function parseUser(token: string | null): User | null {
    if (!token) return null;
    try {
        return JSON.parse(token) as User;
    } catch (error) {
        return null;
    }
}

function hasValidJwt(token: string | null) {
    return !!token && !isExpired(token) && token.trim() !== '';
}

function getInitialState() {
    const userToken = readLocalStorageItem('user');
    const googleToken = readLocalStorageItem('googleToken');
    const githubToken = readLocalStorageItem('githubToken');
    // let token;

    const parsedUser = parseUser(userToken);

    const isAuthenticated =
        hasValidJwt(userToken) ||
        hasValidJwt(googleToken) ||
        hasValidJwt(githubToken);

    return {
        isAuthenticated,
        userToken,
        user: parsedUser,
        googleToken: googleToken ?? null,
        githubToken: githubToken ?? null,
    };
}

const initialState = getInitialState();

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logIn: (state, action: PayloadAction<AuthState>) => {
            state.user = action.payload.user;
            state.userToken = action.payload.userToken;

            state.googleToken = action.payload.googleToken ?? null;
            state.githubToken = action.payload.githubToken ?? null;

            localStorage.setItem('user', JSON.stringify(action.payload));
        },
        // setAuthFed: (state, action) => {
        //     state.user = action.payload;
        // },
        logOut: (state) => {
            state.user = null;
            state.isAuthenticated = false;
            state.googleToken = null;
            state.githubToken = null;
            localStorage.removeItem('user');
            localStorage.removeItem('googleToken');
            localStorage.removeItem('isAuthenticated');
            localStorage.removeItem('githubToken');
        },
        updateGoogleToken: (state, action: PayloadAction<string>) => {
            state.googleToken = action.payload;
            localStorage.setItem('googleToken', action.payload);
        },
        updateGithubToken: (state, action: PayloadAction<string>) => {
            state.githubToken = action.payload;
            localStorage.setItem('githubToken', action.payload);
        },
    },
});
export const { logIn, logOut, updateGoogleToken, updateGithubToken } =
    authSlice.actions;
export default authSlice.reducer;
