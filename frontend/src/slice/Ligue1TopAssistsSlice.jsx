import {createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchLigue1TopAssists = createAsyncThunk(
    'Ligue1TopAssists/fetchLigue1Topassists',
    async () => {
        const response = await axios.get('/api/leagues/FL/topassists/')
        return response.data;
    }
)

const initialState = {
    data : [],
    status : 'idle',
    error: null
}

export const Ligue1TopAssistsSlice = createSlice({
    name: 'Ligue1TopAssists',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchLigue1TopAssists.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchLigue1TopAssists.fulfilled, (state, action) => {
            state.status = 'succeded';
            state.data = action.payload;
        })
        .addCase(fetchLigue1TopAssists.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
    }
})

export default Ligue1TopAssistsSlice.reducer