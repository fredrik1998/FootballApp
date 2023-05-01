import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchBundesliga = createAsyncThunk(
    'Bundesliga/fetchBundesliga',
    async () => {
        const response = await axios.get('/api/leagues/BL/')
        return response.data
    }
)

export const fetchBundesligaTopScorer = createAsyncThunk(
    'BundesligaTopScorer/fetchBundesligaTopScorer',
    async () => {
        const response = await axios.get('/api/leagues/BL/topscorer/')
        return response.data
    }
)

export const fetchBundesligaTopAssists = createAsyncThunk(
    'BundesligaTopAssists/fetchBundesligaTopAssists',
    async () => {
        const response = await axios.get('/api/leagues/BL/topassists/')
        return response.data;
    }
)

export const fetchBundesligaUpcommingMatches = createAsyncThunk(
    'BundesligaUpcommingMatches/fetchBundesligaUpcommingMatches',
    async () => {
        const response = await axios.get('/api/leagues/BL/upcommingmatches/')
        return response.data;
    }
)

export const fetchBundesligaLatestMatches = createAsyncThunk(
    'fetchBundesligaLatestMatches/BundesligaLatestMatches',
    async () => {
        const response = await axios.get('/api/leagues/BL/latestmatches/')
        return response.data;
    } 
)

const initialState = {
    table: [],
    topScorers: [],
    topAssists: [],
    upcomingMatches: [],
    latestMatches: [],
    tableStatus: 'idle',
    tableError: null,
    topScorersStatus: 'idle',
    topScorersError: null,
    topAssistsStatus: 'idle',
    topAssistsError: null,
    upcomingMatchesStatus: 'idle',
    upcomingMatchesError: null,
    latestMatchesStatus: 'idle',
    latestMatchesError: null,
}

export const BundesligaSlice = createSlice({
    name: 'Bundesliga',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchBundesliga.pending, (state) => {
            state.tableStatus = 'loading';
        })
        .addCase(fetchBundesliga.fulfilled, (state, action) => {
            state.tableStatus = 'succeded';
            state.table = action.payload;
        })
        .addCase(fetchBundesliga.rejected, (state, action) => {
            state.tableStatus = 'failed';
            state.tableError = action.error.message;
        })
        .addCase(fetchBundesligaTopScorer.pending, (state) => {
            state.topScorersStatus = 'loading';
        })
        .addCase(fetchBundesligaTopScorer.fulfilled, (state, action) => {
            state.topScorersStatus = 'succeded';
            state.topScorers = action.payload;
        })
        .addCase(fetchBundesligaTopScorer.rejected, (state, action) => {
            state.topScorersStatus = 'failed';
            state.topScorersError= action.error.message;
        })
        .addCase(fetchBundesligaTopAssists.pending, (state, action) => {
            state.topAssistsStatus = 'loading';
        })
        .addCase(fetchBundesligaTopAssists.fulfilled, (state, action) => {
            state.topAssistsStatus = 'succeeded';
            state.topAssists = action.payload;
        })        
        .addCase(fetchBundesligaTopAssists.rejected, (state, action) => {
            state.topAssistsStatus = 'failed';
            state.topAssistsError = action.error.message;
        })
        .addCase(fetchBundesligaUpcommingMatches.pending, (state) => {
            state.upcomingMatchesStatus = 'loading';
        })
        .addCase(fetchBundesligaUpcommingMatches.fulfilled, (state, action) => {
            state.upcomingMatchesStatus = 'succeded';
            state.upcomingMatches = action.payload;
        })
        .addCase(fetchBundesligaUpcommingMatches.rejected, (state, action) => {
            state.upcomingMatchesStatus = 'failed';
            state.upcomingMatchesError = action.error.message;
        })
        .addCase(fetchBundesligaLatestMatches.pending, (state) => {
            state.latestMatchesStatus = 'loading';
        })
        .addCase(fetchBundesligaLatestMatches.fulfilled, (state, action) => {
            state.latestMatchesStatus = 'succeded';
            state.latestMatches = action.payload;
        })
        .addCase(fetchBundesligaLatestMatches.rejected, (state, action) => {
            state.latestMatchesStatus = 'failed';
            state.latestMatchesError = action.error.message;
        })
    }
})
export default BundesligaSlice.reducer