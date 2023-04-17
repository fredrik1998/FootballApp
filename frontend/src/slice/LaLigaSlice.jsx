import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchLaLiga = createAsyncThunk(
    'LaLiga/fetchLaLiga',
    async () => {
        const response = await axios.get('/api/leagues/PD/')
        return response.data;
    }
)

const initialState = {
    data: {},
    status: 'idle',
    error: null
}

export const LaLigaSlice = createSlice({
    name: 'LaLiga',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchLaLiga.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchLaLiga.fulfilled, (state, action) => {
            state.status = 'succeded';
            state.data = action.payload;
        })
        .addCase(fetchLaLiga.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
    }
})

export default LaLigaSlice.reducer