import { configureStore } from '@reduxjs/toolkit';
import baseApiSlice from './api/baseApi';

import authReducer from './auth/authSlice';
import movieReducer from './movie/movieSlice';

import themeReducer, { ThemeMode } from './theme/theme';

// import { moviesApi } from './api/movieApi';

const getInitialTheme = (): ThemeMode | undefined => {
    try {
        if (typeof window === 'undefined') return undefined;
        const saved = localStorage.getItem('theme');
        return saved === 'dark' || saved === 'light'
            ? (saved as ThemeMode)
            : undefined;
    } catch {
        return undefined;
    }
};

const preloadedTheme = getInitialTheme();

const preloadedState = preloadedTheme
    ? { theme: { mode: preloadedTheme } }
    : undefined;

const store = configureStore({
    reducer: {
        [baseApiSlice.reducerPath]: baseApiSlice.reducer,
        // baseQuery
        // feedback: feedbackReducer,
        auth: authReducer,
        theme: themeReducer,
        movies: movieReducer,
    },
    preloadedState,

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApiSlice.middleware),
    // .concat(moviesApi.middleware),
    devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
