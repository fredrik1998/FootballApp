import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchTeamSquad = createAsyncThunk(
    'TeamSquadSlice/fetchTeamSquadSlice',
    async (team_id) => {
        const response = await axios.get(`/api/team/${team_id}/`)
        return response.data
    }
)

const initialState = {
    data: {},
    status: 'idle',
    error: null,
}

export const TeamSquadSlice = createSlice({
    name: 'fetchTeamSquadSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchTeamSquad.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchTeamSquad.fulfilled, (state, action) => {
            state.status = 'succeded';
            state.data = action.payload;
        })
        .addCase(fetchTeamSquad, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message
        })
    }
})

export default TeamSquadSlice.reducer