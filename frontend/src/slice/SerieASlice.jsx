import {createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchSerieA = createAsyncThunk(
    'SerieA/fetchSerieA', 
    async() => {
        const response = await axios.get('/api/leagues/SA/')
        return response.data
    }
)

const initialState = {
    data: [],
    status: 'idle',
    error: null,
}

export const SerieASlice = createSlice({
    name: 'SerieA',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchSerieA.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchSerieA.fulfilled, (state, action) => {
            state.status = 'succeded';
            state.data = action.payload;
        })
        .addCase(fetchSerieA.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
    }
})

export default SerieASlice.reducer