import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchSerieAUpcommingMatches = createAsyncThunk(
    'SerieAUpcommingMatches/fetchSerieAUpcommingMatches',
    async () => {
        const response = await axios.get('/api/leagues/SA/upcommingmatches/')
        return response.data
    }
)

const initialState = {
    data: [],
    status: 'idle',
    error: null,
}

export const SerieAUpcommingMatchesSlice = createSlice({
    name: 'SerieAUpcommingMatches',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchSerieAUpcommingMatches.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchSerieAUpcommingMatches.fulfilled, (state, action) => {
            state.status = 'succeded';
            state.data = action.payload;
        })
        .addCase(fetchSerieAUpcommingMatches.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
    }
})

export default SerieAUpcommingMatchesSlice.reducer