import { readLocalStorageItem, writeLocalStorageItem } from '@/utils/functions';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type MoviesFilterState = {
    selectedCategories: string[];
};

function getInitialState(): MoviesFilterState {
    const raw = readLocalStorageItem('filterMovies');
    if (raw) {
        try {
            return JSON.parse(raw) as MoviesFilterState;
        } catch {}
    }
    return {
        selectedCategories: [],
    };
}

const initialState = getInitialState();

const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        toggleCategory: (state, action: PayloadAction<string>) => {
            const cat = action.payload;
            const index = state.selectedCategories.indexOf(cat);

            if (index !== -1) {
                state.selectedCategories.splice(index, 1);
            } else {
                if (state.selectedCategories.length < 3) {
                    state.selectedCategories.push(cat);
                } else {
                    state.selectedCategories.shift();
                    state.selectedCategories.push(cat);
                }
            }
            writeLocalStorageItem('filterMovies', state);
        },
        clearCategories: (state) => {
            state.selectedCategories = [];
            writeLocalStorageItem('filterMovies', state);
        },
        setFilters: (state, action: PayloadAction<MoviesFilterState>) => {
            state.selectedCategories = action.payload.selectedCategories;

            writeLocalStorageItem('filterMovies', state);
        },
        filterCategory: (state, action) => {
            state.selectedCategories = action.payload.selectedCategories;

            localStorage.setItem(
                'filterMovies',
                JSON.stringify(action.payload),
            );
        },
    },
});
export const {
    filterCategory,
    toggleCategory,
    clearCategories,

    setFilters,
} = moviesSlice.actions;
export default moviesSlice.reducer;
