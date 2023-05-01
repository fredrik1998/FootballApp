import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchLigue1 = createAsyncThunk(
    'fetchLigue1/Ligue1',
    async () => {
        const response = await axios.get('/api/leagues/FL/')
        return response.data;
    }
)

export const fetchLigue1TopScorer = createAsyncThunk(
    'Ligue1TopScorer/fetchLigue1TopScorer',
    async () => {
        const response = await axios.get('/api/leagues/FL/topscorer/')
        return response.data;
    }
)

export const fetchLigue1TopAssists = createAsyncThunk(
    'Ligue1TopAssists/fetchLigue1Topassists',
    async () => {
        const response = await axios.get('/api/leagues/FL/topassists/')
        return response.data;
    }
)

export const fetchLigue1UpcommingMatches = createAsyncThunk(
    'Ligue1UpcommingMatches/fetchLigue1UpcommingMatches',
    async () => {
        const response = await axios.get('/api/leagues/FL/upcommingmatches/')
        return response.data;
    }
)

export const fetchLigue1LatestMatches = createAsyncThunk(
    'Ligue1LatestMatches/fetchLigue1LatestMatches',
    async () => {
        const response = await axios.get('/api/leagues/FL/latestmatches/')
        return response.data;
    }
)

const initialState = {
    table : [],
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
}

export const Ligue1Slice = createSlice({
    name: 'Ligue1',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchLigue1.pending, (state) => {
            state.tableStatus = 'loading';
        })
        .addCase(fetchLigue1.fulfilled, (state, action) => {
            state.tableStatus = 'succeded';
            state.table = action.payload;
        })
        .addCase(fetchLigue1.rejected, (state, action) => {
            state.tableStatus = 'failed';
            state.tableError = action.error.message;
        })
        .addCase(fetchLigue1TopScorer.pending, (state) => {
            state.topScorersStatus = 'loading';
        })
        .addCase(fetchLigue1TopScorer.fulfilled, (state, action) => {
            state.topScorersStatus = 'succeded';
            state.topScorers = action.payload;
        })
        .addCase(fetchLigue1TopScorer.rejected, (state, action) => {
            state.topScorersStatus = 'failed';
            state.topScorersError = action.error.message;
        })
        .addCase(fetchLigue1TopAssists.pending, (state) => {
            state.topAssistsStatus = 'loading';
        })
        .addCase(fetchLigue1TopAssists.fulfilled, (state, action) => {
            state.topAssistsStatus = 'succeded';
            state.topAssists = action.payload;
        })
        .addCase(fetchLigue1TopAssists.rejected, (state, action) => {
            state.topAssistsStatus = 'failed';
            state.topAssistsError = action.error.message;
        })
        .addCase(fetchLigue1UpcommingMatches.pending, (state) => {
            state.upcomingMatchesStatus = 'loading';
        })
        .addCase(fetchLigue1UpcommingMatches.fulfilled, (state, action) => {
            state.upcomingMatchesStatus = 'succeded';
            state.upcomingMatches = action.payload;
        })
        .addCase(fetchLigue1UpcommingMatches.rejected, (state, action) => {
            state.upcomingMatchesStatus = 'failed';
            state.upcomingMatchesError = action.error.message;
        })
        .addCase(fetchLigue1LatestMatches.pending, (state) => {
            state.latestMatchesStatus = 'loading';
        })
        .addCase(fetchLigue1LatestMatches.fulfilled, (state, action) => {
            state.latestMatchesStatus = 'succeded';
            state.latestMatches = action.payload;
        })
        .addCase(fetchLigue1LatestMatches.rejected, (state, action) => {
            state.latestMatchesStatus = 'failed';
            state.latestMatchesError = action.error.message;
        })
    }
})

export default Ligue1Slice.reducer