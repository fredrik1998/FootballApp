import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchHead2Head = createAsyncThunk(
    'fetchHead2Head/Head2Head',
    async (match_id) => {
        const response = await axios.get(`/api/match/${match_id}/head2head/`)
        return response.data;
    }
)

const initialState = {
    data: [],
    status: 'idle',
    error: null
}

export const Head2HeadSlice = createSlice({
    name: 'Head2Head',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchHead2Head.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchHead2Head.fulfilled, (state, action) => {
            state.status = 'succeded';
            state.data = action.payload;
        })
        .addCase(fetchHead2Head.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
    }
})

export default Head2HeadSlice.reducer