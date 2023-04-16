import {createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchBundesligaLatestMatches = createAsyncThunk(
    'fetchBundesligaLatestMatches/BundesligaLatestMatches',
    async () => {
        const response = await axios.get('/api/leagues/BL/latestmatches/')
        return response.data;
    } 
)

const initialState = {
    data: [],
    status: 'idle',
    error: null,
}

export const BundesligaLatestMatchesSlice = createSlice({
    name: 'BundesligaLatestMatches',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchBundesligaLatestMatches.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchBundesligaLatestMatches.fulfilled, (state, action) => {
            state.status = 'succeded';
            state.data = action.payload;
        })
        .addCase(fetchBundesligaLatestMatches.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
    }
})

export default BundesligaLatestMatchesSlice.reducer