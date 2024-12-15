import {
  CardStackArgs,
  CardStackState,
  UpdateCardStackArgs,
} from "@/types/CardStack";
import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiUrl } from "../apiConfig";

const initialState: CardStackState = {
  cardstack: [],
  status: "idle",
  error: null,
};

export const cardstackSlice = createSlice({
  name: "cardstack",
  initialState,
  reducers: {
    setCardStack: (state, action) => {
      state.status = "succeeded";
      state.cardstack = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCardStacks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCardStacks.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.cardstack = action.payload;
      })
      .addCase(getCardStacks.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch cardstack";
      })
      .addCase(deleteCardStack.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.cardstack = state.cardstack.filter(
          (item) => item.id !== action.payload.id
        );
      })
      .addCase(createCardStack.fulfilled, (state, action) => {
        state.cardstack.push(action.payload);
      })
      .addCase(updateCardStack.fulfilled, (state, action) => {
        state.cardstack = state.cardstack.map((item) =>
          item.id === action.payload.id ? action.payload : item
        );
      });
  },
});

export const getCardStacks = createAsyncThunk(`api/cardstack/all`, async () => {
  const response = await axios.get(`${apiUrl}/api/cardstack`);
  return response.data;
});

export const createCardStack = createAsyncThunk(
  `api/cardstack/create`,
  async ({ name, languageId, artistId }: CardStackArgs) => {
    const response = await axios.post(`${apiUrl}/api/cardstack`, {
      name,
      languageId,
      artistId,
    });
    return response.data;
  }
);
export const updateCardStack = createAsyncThunk(
  `api/cardstack/update`,
  async ({ id, name, languageId, artistId }: UpdateCardStackArgs) => {
    const response = await axios.put(`${apiUrl}/api/cardstack/${id}`, {
      name,
      languageId,
      artistId,
    });
    return response.data;
  }
);
export const deleteCardStack = createAsyncThunk(
  `api/cardstack/delete`,
  async (id: number) => {
    const response = await axios.delete(`${apiUrl}/api/cardstack/${id}`);
    return response.data;
  }
);

export const { setCardStack } = cardstackSlice.actions;
export default cardstackSlice.reducer;
