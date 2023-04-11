import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchLeagues = createAsyncThunk(
    'Leagues/fetchLeagues',
    async () => {
      const response = await axios.get('/api/leagues/');
      const leagues = response.data.competitions || []; 
      return leagues;
    }
  );
  
const initialState = {
    data: [],
    status: 'idle',
    error: null,
}

export const LeaguesSlice = createSlice({
    name: 'Leagues',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchLeagues.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchLeagues.fulfilled, (state, action) => {
            state.status = 'succeded';
            state.data = action.payload;
        })
        .addCase(fetchLeagues.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
    }
})

export default LeaguesSlice.reducer