import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchLigue1LatestMatches = createAsyncThunk(
    'Ligue1LatestMatches/fetchLigue1LatestMatches',
    async () => {
        const response = await axios.get('/api/leagues/FL/latestmatches/')
        return response.data;
    }
)

const initialState = {
    data: [],
    status: 'idle',
    error: null,
}

export const Ligue1LatestMatchesSlice = createSlice({
    name: 'Ligue1LatestMatches',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchLigue1LatestMatches.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchLigue1LatestMatches.fulfilled, (state, action) => {
            state.status = 'succeded';
            state.data = action.payload;
        })
        .addCase(fetchLigue1LatestMatches.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
    } 
})

export default Ligue1LatestMatchesSlice.reducer