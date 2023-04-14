import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchBundesliga = createAsyncThunk(
    'Bundesliga/fetchBundesliga',
    async () => {
        const response = await axios.get('/api/leagues/BL/')
        return response.data
    }
)

const initialState = {
    data: [],
    status: 'idle',
    error: null,
}

export const BundesligaSlice = createSlice({
    name: 'Bundesliga',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchBundesliga.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchBundesliga.fulfilled, (state, action) => {
            state.status = 'succeded';
            state.data = action.payload;
        })
        .addCase(fetchBundesliga.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
    }
})
export default BundesligaSlice.reducer