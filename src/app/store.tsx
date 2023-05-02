import { configureStore } from "@reduxjs/toolkit";

import searchBarReducer from "../components/SearchBar/searchBarSlice";

const store =  configureStore({
    reducer: {
        searchBar: searchBarReducer
    }
})

export default store