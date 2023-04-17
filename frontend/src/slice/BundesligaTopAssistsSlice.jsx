import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBundesligaTopAssists = createAsyncThunk(
    'BundesligaTopAssists/fetchBundesligaTopAssists',
    async () => {
        const response = await axios.get('/api/leagues/BL/topassists/')
        return response.data;
    }
)

const initialState = {
    data: [],
    status : 'idle',
    error: null,
}

export const BundesligaTopAssistsSlice = createSlice({
    name: 'BundesligaTopAssists',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchBundesligaTopAssists.pending, (state, action) => {
            state.status = 'loading';
        })
        .addCase(fetchBundesligaTopAssists.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.data = action.payload;
        })        
        .addCase(fetchBundesligaTopAssists.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
    }
})

export default BundesligaTopAssistsSlice.reducer
