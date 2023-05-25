import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTeamUpcomingMatches = createAsyncThunk(
  "TeamUpcomingMatches/fetchTeamUpcomingMatches",
  async (team_id) => {
    const response = await axios.get(`/api/team/upcomingmatches/${team_id}/`);
    return response.data;
  }
);

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

export const resetTeamUpcomingMatches = createAction("teamUpcomingMatches/reset")

export const TeamUpcomingMatchesSlice = createSlice({
  name: "TeamUpcomingMatches",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTeamUpcomingMatches.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTeamUpcomingMatches.fulfilled, (state, action) => {
        state.status = "succeded";
        state.data = action.payload;
      })
      .addCase(fetchTeamUpcomingMatches.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(resetTeamUpcomingMatches, (state) => {
        state.status = "idle";
        state.data = [];
        state.error = null;
      });
  },
});

export default TeamUpcomingMatchesSlice.reducer;
