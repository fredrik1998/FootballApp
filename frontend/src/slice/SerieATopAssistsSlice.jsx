import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchSerieATopAssists = createAsyncThunk(
    'SerieATopAssists/fetchSerieATopAssists',
    async () => {
        const response = await axios.get('/api/leagues/SA/topassists/')
        return response.data
    }
)

const initialState = {
    data: [],
    status: 'idle',
    error: null,
}

export const SerieATopAssistsSlice = createSlice({
    name: 'SerieATopAssists',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchSerieATopAssists.pending, (state, action) => {
            state.status = 'loading';
        })
        .addCase(fetchSerieATopAssists.fulfilled, (state, action) => {
            state.status = 'succeded';
            state.data = action.payload;
        })
        .addCase(fetchSerieATopAssists.rejected, (state, action) => {
            state.status = 'failed';
            state.data = action.error.message;
        })
    }
})

export default SerieATopAssistsSlice.reducer