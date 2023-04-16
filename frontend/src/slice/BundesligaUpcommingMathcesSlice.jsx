import {createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchBundesligaUpcommingMatches = createAsyncThunk(
    'BundesligaUpcommingMatches/fetchBundesligaUpcommingMatches',
    async () => {
        const response = await axios.get('/api/leagues/BL/upcommingmatches/')
        return response.data;
    }
)

const initialState = {
    data: [],
    status: 'idle',
    error: null,
}

export const BundesligaUpcommingMatchesSlice = createSlice({
    name: 'BundesligaUpcommingMatches',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchBundesligaUpcommingMatches.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchBundesligaUpcommingMatches.fulfilled, (state, action) => {
            state.status = 'succeded';
            state.data = action.payload;
        })
        .addCase(fetchBundesligaUpcommingMatches.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
    }
})

export default BundesligaUpcommingMatchesSlice.reducer