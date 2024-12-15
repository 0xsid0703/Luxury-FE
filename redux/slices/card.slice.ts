import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiUrl } from "../apiConfig";
import { CardState } from "@/types/Card";

const initialState: CardState = {
  card: [],
  status: "idle",
  error: null,
};

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    setCard: (state, action) => {
      state.status = "succeeded";
      state.card = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCards.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCards.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.card = action.payload;
      })
      .addCase(getCards.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch cards";
      });
  },
});

export const getCards = createAsyncThunk(`api/card/all`, async () => {
  const response = await axios.get(`${apiUrl}/api/card`);
  return response.data;
});

export const { setCard } = cardSlice.actions;
export default cardSlice.reducer;
