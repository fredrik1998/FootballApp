import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchChampionsLeague = createAsyncThunk(
    'championsLeague/fetchChampionsLeague',
    async () => {
        const response = await axios.get('/api/leagues/CL/');
        return response.data
    }
);

const initialState = {
    data: {},
    status: 'idle',
    error: null
};

export const championsLeagueSlice = createSlice({
    name: 'championsLeague',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchChampionsLeague.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchChampionsLeague.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.data = action.payload
        })
        .addCase(fetchChampionsLeague.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
    }
})

export default championsLeagueSlice.reducer
