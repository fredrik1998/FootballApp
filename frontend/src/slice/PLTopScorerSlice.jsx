import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchTopScorerPL = createAsyncThunk(
    'topscorerPL/fetchTopScorerPL',
    async () => {
        const response = await axios.get('/api/leagues/topscorer/')
        return response.data
    }
)

const initialState = {
    data: [],
    status : 'idle',
    error: null,
}

export const PLTopScorerSlice = createSlice({
    name: 'PLTopScorer',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchTopScorerPL.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(fetchTopScorerPL.fulfilled, (state, action) => {
            state.status = 'succeded';
            state.data = action.payload
        })
        .addCase(fetchTopScorerPL.rejected, (state, action) => {
            state.status = 'failed'
            state.data = action.error.message
        })
    }
})

export default PLTopScorerSlice.reducer