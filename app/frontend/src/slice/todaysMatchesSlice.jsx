import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTodaysMatches = createAsyncThunk(
  "fetchTodaysMatches/TodaysMatches",
  async () => {
    const response = await axios.get("/api/match/todaysmatches/");
    return response.data;
  }
);

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

export const TodaysMatchesSlice = createSlice({
  name: "todaysmatches",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodaysMatches.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTodaysMatches.fulfilled, (state, action) => {
        state.status = "succeded";
        state.data = action.payload;
      })
      .addCase(fetchTodaysMatches.rejected, (state, action) => {
        state.status = "failed";
        state.data = action.error.message;
      });
  },
});

export default TodaysMatchesSlice.reducer;
