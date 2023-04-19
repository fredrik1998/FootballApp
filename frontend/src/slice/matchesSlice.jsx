import {createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchMatchData = createAsyncThunk(
    'fetchMatchData/matchData',
    async (match_id) => {
        const response = await axios.get(`/api/match/${match_id}/`)
        return response.data;
    }
)

const initialState = {
    data: [],
    status: 'idle',
    error: null,
}

export const matchSlice = createSlice({
    name: 'matches',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchMatchData.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchMatchData.fulfilled, (state, action) => {
            state.status = 'succeded';
            state.data = action.payload;
        })
        .addCase(fetchMatchData.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
    }
})

export default matchSlice.reducer;