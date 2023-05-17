import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSerieA = createAsyncThunk("SerieA/fetchSerieA", async () => {
  const response = await axios.get("/api/leagues/SA/");
  return response.data;
});

export const fetchSerieATopscorers = createAsyncThunk(
  "SerieATopscorers/fetchSerieATopscorers",
  async () => {
    const response = await axios.get("/api/leagues/SA/topscorer/");
    return response.data;
  }
);

export const fetchSerieATopAssists = createAsyncThunk(
  "SerieATopAssists/fetchSerieATopAssists",
  async () => {
    const response = await axios.get("/api/leagues/SA/topassists/");
    return response.data;
  }
);

export const fetchSerieAUpcommingMatches = createAsyncThunk(
  "SerieAUpcommingMatches/fetchSerieAUpcommingMatches",
  async () => {
    const response = await axios.get("/api/leagues/SA/upcommingmatches/");
    return response.data;
  }
);

export const fetchSerieALatestMatches = createAsyncThunk(
  "SerieALatestMatches/fetchSerieALatestMatches",
  async () => {
    const response = await axios.get("/api/leagues/SA/latestmatches/");
    return response.data;
  }
);

const initialState = {
  table: [],
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

export const SerieASlice = createSlice({
  name: "SerieA",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSerieA.pending, (state) => {
        state.tableStatus = "loading";
      })
      .addCase(fetchSerieA.fulfilled, (state, action) => {
        state.tableStatus = "succeded";
        state.table = action.payload;
      })
      .addCase(fetchSerieA.rejected, (state, action) => {
        state.tableStatus = "failed";
        state.tableError = action.error.message;
      })
      .addCase(fetchSerieATopscorers.pending, (state) => {
        state.topScorersStatus = "loading";
      })
      .addCase(fetchSerieATopscorers.fulfilled, (state, action) => {
        state.topScorersStatus = "succeded";
        state.topScorers = action.payload;
      })
      .addCase(fetchSerieATopscorers.rejected, (state, action) => {
        state.topScorersStatus = "failed";
        state.topScorersError = action.error.message;
      })
      .addCase(fetchSerieATopAssists.pending, (state, action) => {
        state.topAssistsStatus = "loading";
      })
      .addCase(fetchSerieATopAssists.fulfilled, (state, action) => {
        state.topAssistsStatus = "succeded";
        state.topAssists = action.payload;
      })
      .addCase(fetchSerieATopAssists.rejected, (state, action) => {
        state.topAssistsStatus = "failed";
        state.topAssistsError = action.error.message;
      })
      .addCase(fetchSerieAUpcommingMatches.pending, (state) => {
        state.upcomingMatchesStatus = "loading";
      })
      .addCase(fetchSerieAUpcommingMatches.fulfilled, (state, action) => {
        state.upcomingMatchesStatus = "succeded";
        state.upcomingMatches = action.payload;
      })
      .addCase(fetchSerieAUpcommingMatches.rejected, (state, action) => {
        state.upcomingMatchesStatus = "failed";
        state.upcomingMatchesError = action.error.message;
      })
      .addCase(fetchSerieALatestMatches.pending, (state) => {
        state.latestMatchesStatus = "loading";
      })
      .addCase(fetchSerieALatestMatches.fulfilled, (state, action) => {
        state.latestMatchesStatus = "succeded";
        state.latestMatches = action.payload;
      })
      .addCase(fetchSerieALatestMatches.rejected, (state, action) => {
        state.latestMatchesStatus = "failed";
        state.latestMatchesError = action.error.message;
      });
  },
});

export default SerieASlice.reducer;
