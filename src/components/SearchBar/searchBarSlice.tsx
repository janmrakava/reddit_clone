import { createSlice } from "@reduxjs/toolkit";

const searchBarSlice = createSlice({
    name: 'search',
    initialState: {
        term: ''
    },
    reducers: {
        setTerm(state, action) {
            state.term = action.payload
        }
    }
})

export const {setTerm} = searchBarSlice.actions
export const selectSearch = (state: any) => state.searchBar

export default searchBarSlice.reducer