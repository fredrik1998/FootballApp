import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchLigue1 = createAsyncThunk(
    'fetchLigue1/Ligue1',
    async () => {
        const response = await axios.get('/api/leagues/FL/')
        return response.data;
    }
)

const initialState = {
    data : [],
    status: 'idle',
    error: null,
}

export const Ligue1Slice = createSlice({
    name: 'Ligue1',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchLigue1.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchLigue1.fulfilled, (state, action) => {
            state.status = 'succeded';
            state.data = action.payload;
        })
        .addCase(fetchLigue1.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
    }
})

export default Ligue1Slice.reducer