import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
export const fetchSerieALatestMatches = createAsyncThunk(
    'SerieALatestMatches/fetchSerieALatestMatches',
    async () => {
        const response = await axios.get('/api/leagues/SA/latestmatches/')
        return response.data
    }
)

const initialState = {
    data: [],
    status: 'idle',
    error: null,
}

export const SerieALatestMatchesSlice = createSlice({
    name: 'SerieALatestMatches',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchSerieALatestMatches.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchSerieALatestMatches.fulfilled, (state, action) => {
            state.status = 'succeded';
            state.data = action.payload;
        })
        .addCase(fetchSerieALatestMatches.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
    }
})
export default SerieALatestMatchesSlice.reducer