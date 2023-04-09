import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchPLTopAssists = createAsyncThunk(
    'PLTopAssisits/fetchPLTopAssists',
    async () => {
        const response = await axios .get ('/api/leagues/PL/topassits/')
        return response.data
    }
)

const initialState = {
    data: [],
    status: 'idle',
    error: null,
}

export const PLTopAssistSlice = createSlice({
    name: 'PLTopAssists',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchPLTopAssists.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(fetchPLTopAssists.fulfilled, (state, action) => {
            state.status = 'succeded'
            state.data = action.payload
        })
        .addCase(fetchPLTopAssists.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
    }
})

export default PLTopAssistSlice.reducer