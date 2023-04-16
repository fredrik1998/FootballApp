import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchLigue1TopScorer = createAsyncThunk(
    'Ligue1TopScorer/fetchLigue1TopScorer',
    async () => {
        const response = await axios.get('/api/leagues/FL/topscorer/')
        return response.data;
    }
)

const initialState = {
    data : [],
    status: 'idle',
    error: null,
}

export const Ligue1TopScorerSlice = createSlice({
    name: 'Ligue1TopScorer',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchLigue1TopScorer.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchLigue1TopScorer.fulfilled, (state, action) => {
            state.status = 'succeded';
            state.data = action.payload;
        })
        .addCase(fetchLigue1TopScorer.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
    }
})

export default Ligue1TopScorerSlice.reducer