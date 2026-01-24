

import { readLocalStorageItem, writeLocalStorageItem } from '@/utils/functions';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type MoviesFilterState = {
    selectedCategories: string[];
}


function getInitialState() {
    const raw = readLocalStorageItem('filterTvShow');
    if (raw) {
        try {
            return JSON.parse(raw) 
        } catch {}
    }
    return {
         selectedTvCategories: [],
    };
}

const initialState = getInitialState();

const tvShowsSlice = createSlice({
    name: 'tvShows',
    initialState,
    reducers:{
        toggleCatTv:(state, action) =>{
            const cat = action.payload;
            const index = state.selectedTvCategories.indexOf(cat);

            if(index !== -1){
                state.selectedTvCategories.splice(index, 1)
            }else{
                 if (state.selectedTvCategories.length > 0) {
                         state.selectedTvCategories.push(cat);
                 } else {
                    state.selectedTvCategories.shift();
                    state.selectedTvCategories.push(cat);
                }
            }
                        writeLocalStorageItem('filterTv', state);
            
        }
    }
})

export const {
    toggleCatTv
} = tvShowsSlice.actions

export default tvShowsSlice.reducer;
