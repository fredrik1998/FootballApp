import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPremierLeague = createAsyncThunk(
  'premierLeague/fetchPremierLeague',
  async () => {
    const response = await axios.get('/api/leagues/PL/');
    return response.data;
  }
);

const initialState = {
  data: [],
  status: 'idle',
  error: null,
};

export const premierLeagueSlice = createSlice({
  name: 'premierLeague',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPremierLeague.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPremierLeague.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchPremierLeague.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default premierLeagueSlice.reducer;
