import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPremierLeague = createAsyncThunk(
  'premierLeague/fetchPremierLeague',
  async () => {
    const response = await axios.get('/api/leagues/PL/');
    return response.data;
  }
);

export const fetchTopScorerPL = createAsyncThunk(
  'topscorerPL/fetchTopScorerPL',
  async () => {
      const response = await axios.get('/api/leagues/PL/topscorer/')
      return response.data
  }
)

export const fetchPLTopAssists = createAsyncThunk(
  'PLTopAssisits/fetchPLTopAssists',
  async () => {
      const response = await axios .get ('/api/leagues/PL/topassits/')
      return response.data
  }
)

export const fetchPLUpcommingMatches = createAsyncThunk(
  'PLUpcommingmatches/fetchPLUpcommingMatches',
  async () => {
      const response = await axios.get('api/leagues/PL/nextmatches/')
      return response.data
  }
)

export const fetchPLLatestMatches = createAsyncThunk(
  'PLLatestMatches/fetchPLLatestMatches',
  async () => {
      const response = await axios.get('/api/leagues/PL/latestmatches/')
      return response.data
  }
)

const initialState = {
  table: [],
  tableStatus: 'idle',
  tableError: null,
  topScorers: [],
  topScorersStatus: 'idle',
  topScorersError: null,
  topAssists: [],
  topAssistsStatus: 'idle',
  topAssistsError: null,
  upcomingMatches: [],
  upcomingMatchesStatus: 'idle',
  upcomingMatchesError: null,
  latestMatches: [],
  latestMatchesStatus: 'idle',
  latestMatchesError: null,
};

export const premierLeagueSlice = createSlice({
  name: 'premierLeague',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPremierLeague.pending, (state) => {
        state.tableStatus = 'loading';
      })
      .addCase(fetchPremierLeague.fulfilled, (state, action) => {
        state.tableStatus = 'succeeded';
        state.table = action.payload;
      })
      .addCase(fetchPremierLeague.rejected, (state, action) => {
        state.tableStatus = 'failed';
        state.tableError = action.error.message;
      })
      .addCase(fetchTopScorerPL.pending, (state) => {
        state.topScorersStatus = 'loading'
      })
      .addCase(fetchTopScorerPL.fulfilled, (state, action) => {
        state.topScorersStatus = 'succeded';
        state.topScorers = action.payload
      })
      .addCase(fetchTopScorerPL.rejected, (state, action) => {
        state.topScorersStatus = 'failed'
        state.topScorersError = action.error.message
      })
      .addCase(fetchPLTopAssists.pending, (state) => {
        state.topAssistsStatus = 'loading'
      })
      .addCase(fetchPLTopAssists.fulfilled, (state, action) => {
        state.topAssistsStatus = 'succeded'
        state.topAssists = action.payload
      })
      .addCase(fetchPLTopAssists.rejected, (state, action) => {
        state.topAssistsStatus = 'failed'
        state.topAssistsError = action.error.message
      })
      .addCase(fetchPLUpcommingMatches.pending, (state) => {
        state.upcomingMatchesStatus = 'loading';
      })
      .addCase(fetchPLUpcommingMatches.fulfilled, (state, action) => {
        state.upcomingMatchesStatus = 'succeded';
        state.upcomingMatches = action.payload;
      })
     .addCase(fetchPLUpcommingMatches.rejected, (state, action) => {
        state.upcomingMatchesStatus = 'failed';
        state.upcomingMatchesError = action.error.message;
      })
      .addCase(fetchPLLatestMatches.pending, (state) => {
        state.latestMatchesStatus = 'loading';
      })
      .addCase(fetchPLLatestMatches.fulfilled, (state, action ) => {
        state.latestMatchesStatus = 'succeded';
        state.latestMatches = action.payload;
      })
      .addCase(fetchPLLatestMatches.rejected, (state, action) => {
        state.latestMatchesStatus = 'failed';
        state.latestMatchesError = action.error.message;
      })
  },
});

export default premierLeagueSlice.reducer;
