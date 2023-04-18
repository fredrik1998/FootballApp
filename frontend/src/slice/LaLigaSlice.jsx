import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchLaLiga = createAsyncThunk(
    'LaLiga/fetchLaLiga',
    async () => {
        const response = await axios.get('/api/leagues/PD/')
        return response.data;
    }
)

export const fetchLaLigaTopScorers = createAsyncThunk(
    'LaLigaTopScorers/fetchLaLigaTopScorers',
    async () => {
        const response = await axios.get('/api/leagues/PD/topscorer/')
        return response.data;
    }
)

export const fetchLaLigaTopAssists = createAsyncThunk(
    'LaLigaTopAssists/fetchLaLigaTopAssists',
    async () => {
        const response = await axios.get('/api/leagues/PD/topassists/')
        return response.data;
    }
)

export const fetchLaLigaUpcomingMatches = createAsyncThunk(
    'LaLigaUpcomingMatches/fetchLaLigaUpcomingMatches',
    async () => {
        const response = await axios.get('/api/leagues/PD/upcomingmatches/')
        return response.data;
    }
)

export const fetchLaLigaLatestMatches = createAsyncThunk(
    'LaLigaLatestMatches/fetchLaLigaLatestMatches',
    async () => {
        const response = await axios.get('/api/leagues/PD/latestmatches/')
        return response.data;
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
}

export const LaLigaSlice = createSlice({
    name: 'LaLiga',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchLaLiga.pending, (state) => {
            state.tableStatus = 'loading';
        })
        .addCase(fetchLaLiga.fulfilled, (state, action) => {
            state.tableStatus = 'succeded';
            state.table = action.payload;
        })
        .addCase(fetchLaLiga.rejected, (state, action) => {
            state.tableStatus = 'failed';
            state.tableError = action.error.message;
        })
        .addCase(fetchLaLigaTopScorers.pending, (state) => {
            state.topScorersStatus = 'loading';
        })
        .addCase(fetchLaLigaTopScorers.fulfilled, (state, action) => {
            state.topScorersStatus = 'succeded';
            state.topScorers = action.payload;
        })
        .addCase(fetchLaLigaTopScorers.rejected, (state, action) => {
            state.topScorersStatus = 'failed';
            state.topScorersError = action.error.message;
        })
        .addCase(fetchLaLigaTopAssists.pending, (state) => {
            state.topAssistsStatus = 'loading';
        })
        .addCase(fetchLaLigaTopAssists.fulfilled, (state, action) => {
            state.topAssistsStatus = 'succeded';
            state.topAssists = action.payload;
        })
        .addCase(fetchLaLigaTopAssists.rejected, (state, action) => {
            state.topAssistsStatus = 'failed';
            state.topAssistsError = action.error.message;
        })
        .addCase(fetchLaLigaUpcomingMatches.pending, (state) => {
            state.upcomingMatchesStatus = 'loading';
        })
        .addCase(fetchLaLigaUpcomingMatches.fulfilled, (state, action) => {
            state.upcomingMatchesStatus = 'succeded';
            state.upcomingMatches = action.payload;
        })
        .addCase(fetchLaLigaUpcomingMatches.rejected, (state, action) => {
            state.upcomingMatchesStatus = 'failed';
            state.upcomingMatchesError = action.error.message;
        })
        .addCase(fetchLaLigaLatestMatches.pending, (state) => {
            state.latestMatchesStatus = 'loading';
        })
        .addCase(fetchLaLigaLatestMatches.fulfilled, (state, action) => {
            state.latestMatchesStatus = 'succeded';
            state.latestMatches = action.payload;
        })
        .addCase(fetchLaLigaLatestMatches.rejected, (state, action) => {
            state.latestMatchesStatus = 'failed';
            state.latestMatchesError = action.error.message;
        })
    }
})

export default LaLigaSlice.reducer