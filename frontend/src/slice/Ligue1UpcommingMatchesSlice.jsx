import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchLigue1UpcommingMatches = createAsyncThunk(
    'Ligue1UpcommingMatches/fetchLigue1UpcommingMatches',
    async () => {
        const response = await axios.get('/api/leagues/FL/upcommingmatches/')
        return response.data;
    }
)

const initialState = {
    data: [],
    status: 'idle',
    error: null,
}

export const Ligue1UpcommingMatchesSlice = createSlice({
name : 'Ligue1UpcommingMatches',
initialState,
reducers: {},
extraReducers: (builder) => {
    builder
    .addCase(fetchLigue1UpcommingMatches.pending, (state) => {
        state.status = 'loading';
    })
    .addCase(fetchLigue1UpcommingMatches.fulfilled, (state, action) => {
        state.status = 'succeded';
        state.data = action.payload;
    })
    .addCase(fetchLigue1UpcommingMatches.rejected, (state, action) => {
        state.status = 'failed';
        state.data = action.error.message;
    })
}
})

export default Ligue1UpcommingMatchesSlice.reducer