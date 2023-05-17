import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchChampionsLeague = createAsyncThunk(
  "championsLeague/fetchChampionsLeague",
  async () => {
    const response = await axios.get("/api/leagues/CL/");
    return response.data;
  }
);

export const fetchTopScorerCL = createAsyncThunk(
  "topscorerCL/fetchTopScorerCL",
  async () => {
    const response = await axios.get("api/leagues/CL/topscorer/");
    return response.data;
  }
);

export const fetchCLTopAssists = createAsyncThunk(
  "CLTopAssists/fetchCLTopAssists",
  async () => {
    const response = await axios.get("api/leageus/CL/topassits/");
    return response.data;
  }
);

export const fetchCLUpcommingMatches = createAsyncThunk(
  "upcommingMatchesCL/fetchCLUpcommingMatchesCL",
  async () => {
    const response = await axios.get("api/leagues/CL/upcommingmatches/");
    return response.data;
  }
);

export const fetchCLLatestMatches = createAsyncThunk(
  "CLLatestMatches/fetchCLLatestMatches",
  async () => {
    const response = await axios.get("/api/leagues/CL/latestmatches/");
    return response.data;
  }
);

const initialState = {
  table: {},
  tableStatus: "idle",
  tableError: null,
  topScorers: [],
  topScorersStatus: "idle",
  topScorersError: null,
  topAssists: [],
  topAssistsStatus: "idle",
  topAssistsError: null,
  upcomingMatches: [],
  upcomingMatchesStatus: "idle",
  upcomingMatchesError: null,
  latestMatches: [],
  latestMatchesStatus: "idle",
  latestMatchesError: null,
};

export const championsLeagueSlice = createSlice({
  name: "championsLeague",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchChampionsLeague.pending, (state) => {
        state.tableStatus = "loading";
      })
      .addCase(fetchChampionsLeague.fulfilled, (state, action) => {
        state.tableStatus = "succeeded";
        state.table = action.payload;
      })
      .addCase(fetchChampionsLeague.rejected, (state, action) => {
        state.tableStatus = "failed";
        state.tableError = action.error.message;
      })
      .addCase(fetchTopScorerCL.pending, (state) => {
        state.topScorersStatus = "loading";
      })
      .addCase(fetchTopScorerCL.fulfilled, (state, action) => {
        state.topScorersStatus = "succeded";
        state.topScorers = action.payload;
      })
      .addCase(fetchTopScorerCL.rejected, (state, action) => {
        state.topScorersStatus = "failed";
        state.topScorersError = action.error.message;
      })
      .addCase(fetchCLTopAssists.pending, (state) => {
        state.topAssistsStatus = "loading";
      })
      .addCase(fetchCLTopAssists.fulfilled, (state, action) => {
        state.topAssistsStatus = "succeded";
        state.topAssists = action.payload;
      })
      .addCase(fetchCLTopAssists.rejected, (state, action) => {
        state.topAssistsStatus = "failed";
        state.topAssistsError = action.error.message;
      })
      .addCase(fetchCLUpcommingMatches.pending, (state) => {
        state.upcomingMatchesStatus = "loading";
      })
      .addCase(fetchCLUpcommingMatches.fulfilled, (state, action) => {
        state.upcomingMatchesStatus = "succeded";
        state.upcomingMatches = action.payload;
      })
      .addCase(fetchCLUpcommingMatches.rejected, (state, action) => {
        state.upcomingMatchesStatus = "failed";
        state.upcomingMatchesError = action.error.message;
      })
      .addCase(fetchCLLatestMatches.pending, (state) => {
        state.latestMatchesStatus = "loading";
      })
      .addCase(fetchCLLatestMatches.fulfilled, (state, action) => {
        state.latestMatchesStatus = "succeded";
        state.latestMatches = action.payload;
      })
      .addCase(fetchCLLatestMatches.rejected, (state, action) => {
        state.latestMatchesStatus = "failed";
        state.latestMatchesError = action.error.message;
      });
  },
});

export default championsLeagueSlice.reducer;
