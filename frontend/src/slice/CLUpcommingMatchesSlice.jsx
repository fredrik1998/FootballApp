import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchCLUpcommingMatches = createAsyncThunk(
    'upcommingMatchesCL/fetchCLUpcommingMatchesCL',
    async () => {
        const response = await axios.get('api/leagues/CL/upcommingmatches/')
        return response.data
    }
)

const initialState = {
    data: [],
    status: 'idle',
    error: null,
}

export const CLUpcommingMatchesSlice = createSlice({
    name: 'CLUpcommingMatches',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchCLUpcommingMatches.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchCLUpcommingMatches.fulfilled, (state, action) => {
            state.status = 'succeded';
            state.data = action.payload;
        })
        .addCase(fetchCLUpcommingMatches.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
    }

})

export default CLUpcommingMatchesSlice.reducer