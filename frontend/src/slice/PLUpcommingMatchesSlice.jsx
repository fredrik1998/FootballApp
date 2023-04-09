import {createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchPLUpcommingMatches = createAsyncThunk(
    'PLUpcommingmatches/fetchPLUpcommingMatches',
    async () => {
        const response = await axios.get('api/leagues/PL/nextmatches/')
        return response.data
    }
)

const initialState = {
    data: [],
    status: 'idle',
    error: null,
}

export const PLUpcommingMatchesSlice = createSlice({
    name: 'PLUpcommingMatches',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchPLUpcommingMatches.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchPLUpcommingMatches.fulfilled, (state, action) => {
            state.status = 'succeded';
            state.data = action.payload;
        })
        .addCase(fetchPLUpcommingMatches.rejected, (state, action) => {
            state.error = action.error.message;
        })
    }
})

export default PLUpcommingMatchesSlice.reducer