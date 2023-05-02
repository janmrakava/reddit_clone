import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { base_url } from '../../app/api'

export const fetchPopular = createAsyncThunk(
    '/home/todayPopular',
    async () => {
        try {
            const response = await fetch(`${base_url}subreddits/popular/.json?limit=10`)
            console.log(response)
            const data = response.json()
            console.log(data)
            return data
        }
        catch (err){
            console.log(err)
        }
    }
)


const trendingSidebarSlice = createSlice({
    name: 'trendingSidebar',
    initialState: {
        trendingSubReddits: {},
        isPopularLoading: false,
        isPopularError: false

    },
    reducers: {},
    extraReducers:(builder) => {
        builder
            .addCase(fetchPopular.pending, (state) => {
                state.isPopularLoading = true
                state.isPopularError = false
            })
            .addCase(fetchPopular.rejected, (state) => {
                state.isPopularError = true
                state.isPopularLoading = false
            })
            .addCase(fetchPopular.fulfilled, (state, action) => {
                state.isPopularLoading = false
                state.isPopularError = false
                state.trendingSubReddits = action.payload.data
            })

    }
})

export const selectTrendingSidebar = (state: { trendingSideBar: any }) => state.trendingSideBar
export default trendingSidebarSlice.reducer