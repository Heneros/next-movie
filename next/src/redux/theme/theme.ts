import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ThemeMode = 'dark' | 'light';

export type ThemeState = {
    mode: 'dark' | 'light';
};

const initialState: ThemeState = { mode: 'light' };

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme(state, action: PayloadAction<ThemeMode>) {
            state.mode = action.payload;
        },
        toggleTheme(state) {
            state.mode = state.mode === 'dark' ? 'light' : 'dark';
        },
    },
});

export const { setTheme, toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
