import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchCLTopAssists = createAsyncThunk(
    'CLTopAssists/fetchCLTopAssists',
    async () => {
        const response = await axios.get('api/leageus/CL/topassits/')
        return response.data
    }
)

const initialState = {
    data: [],
    status: 'idle',
    error: null,
}

export const CLTopAssistsSlice = createSlice({
    name: 'CLTopAssists',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchCLTopAssists.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchCLTopAssists.fulfilled, (state, action) => {
            state.status = 'succeded';
            state.data = action.payload
        })
        .addCase(fetchCLTopAssists.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message
        })
    }
})
export default CLTopAssistsSlice.reducer