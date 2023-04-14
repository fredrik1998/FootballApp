import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchCLLatestMatches = createAsyncThunk(
    'CLLatestMatches/fetchCLLatestMatches',
    async () => {
        const response = await axios.get('/api/leagues/CL/latestmatches/')
        return response.data
    }
)

const initialState = {
    data: [],
    status: 'idle',
    error: null,
}

export const CLLatestMatchesSlice = createSlice({
    name: 'CLLatestMatches',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchCLLatestMatches.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchCLLatestMatches.fulfilled, (state, action) => {
            state.status = 'succeded';
            state.data = action.payload;
        })
        .addCase(fetchCLLatestMatches.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
    }
})

export default CLLatestMatchesSlice.reducer