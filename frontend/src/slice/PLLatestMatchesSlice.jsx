import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchPLLatestMatches = createAsyncThunk(
    'PLLatestMatches/fetchPLLatestMatches',
    async () => {
        const response = await axios.get('/api/leagues/PL/latestmatches/')
        return response.data
    }
)

const initialState = {
    data: [],
    status: 'idle',
    error: null,
}

export const PLLatestMatchesSlice = createSlice({
    name: 'PLLatestMatches',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchPLLatestMatches.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchPLLatestMatches.fulfilled, (state, action ) => {
            state.status = 'succeded';
            state.data = action.payload;
        })
        .addCase(fetchPLLatestMatches.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
    }
})

export default PLLatestMatchesSlice.reducer