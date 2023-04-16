import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchBundesligaTopScorer = createAsyncThunk(
    'BundesligaTopScorer/fetchBundesligaTopScorer',
    async () => {
        const response = await axios.get('/api/leagues/BL/topscorer/')
        return response.data
    }
)

const initialState = {
    data: [],
    status: 'idle',
    error: null,
}

export const BundesligaTopScorerSlice = createSlice({
    name : 'BundesligaTopScorer',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchBundesligaTopScorer.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchBundesligaTopScorer.fulfilled, (state, action) => {
            state.status = 'succeded';
            state.data = action.payload;
        })
        .addCase(fetchBundesligaTopScorer.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
    }
})

export default BundesligaTopScorerSlice.reducer