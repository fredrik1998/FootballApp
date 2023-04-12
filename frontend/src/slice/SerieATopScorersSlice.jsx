import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchSerieATopscorers = createAsyncThunk(
    'SerieATopscorers/fetchSerieATopscorers',
    async () => {
        const response = await axios.get('/api/leagues/SA/topscorer/')
        return response.data
    }
)

const initialState = {
    data: [],
    status: 'idle',
    error: null,
}

export const SerieATopscorersSlice = createSlice({
    name: 'SerieATopscorers',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchSerieATopscorers.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchSerieATopscorers.fulfilled, (state, action) => {
            state.status = 'succeded';
            state.data = action.payload;
        })
        .addCase(fetchSerieATopscorers.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
    }
})

export default SerieATopscorersSlice.reducer