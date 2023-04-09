import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTopScorerCL = createAsyncThunk(
    'topscorerCL/fetchTopScorerCL',
    async () => {
        const response = await axios.get('api/leagues/CL/topscorer/')
        return response.data
    }
)

const initialState = {
    data: [],
    status: 'idle',
    error: null
}

export const CLTopScorerSlice = createSlice({
    name: 'CLTopScorer',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchTopScorerCL.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchTopScorerCL.fulfilled, (state, action) => {
            state.status = 'succeded';
            state.data = action.payload
        })
        .addCase(fetchTopScorerCL.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
    }
})

export default CLTopScorerSlice.reducer