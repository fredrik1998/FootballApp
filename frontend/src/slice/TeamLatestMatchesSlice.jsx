import {createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchTeamLatestMatches = createAsyncThunk(
    'TeamLatestMatches/fetchTeamLatestMatches',
    async (team_id) => {
        const response = await axios.get(`/api/team/latestmatches/${team_id}/`)
        return response.data;
    }
)

const initialState = {
    data: [],
    status: 'idle',
    error: null,
}

export const TeamLatestMatchesSlice = createSlice({
    name: 'TeamLatestMatches',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchTeamLatestMatches.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchTeamLatestMatches.fulfilled, (state, action) => {
            state.status = 'succeded';
            state.data = action.payload;
        })
        .addCase(fetchTeamLatestMatches.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
    }
})

export default TeamLatestMatchesSlice.reducer


