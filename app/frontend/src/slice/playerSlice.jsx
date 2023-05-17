import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPlayerData = createAsyncThunk(
  "fetchPlayerData/playerData",
  async (player_id) => {
    const response = await axios.get(`/api/player/${player_id}/`);
    return response.data;
  }
);

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

export const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlayerData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPlayerData.fulfilled, (state, action) => {
        state.status = "succeded";
        state.data = action.payload;
      })
      .addCase(fetchPlayerData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default playerSlice.reducer;
