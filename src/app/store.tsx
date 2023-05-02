import { configureStore } from "@reduxjs/toolkit";

import searchBarReducer from "../components/SearchBar/searchBarSlice";
import trendingSideBarReducer from "../components/TrendingSidebar/trendingSideBarSlice";

const store =  configureStore({
    reducer: {
        searchBar: searchBarReducer,
        trendingSideBar: trendingSideBarReducer
    }
})

export type AppDispatch = typeof store.dispatch

export default store