import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiUrl } from "../apiConfig";
import { CardArgs, CardState } from "@/types/Card";

const initialState: CardState = {
  cards: [],
  status: "idle",
  error: null,
};

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    setCard: (state, action) => {
      state.status = "succeeded";
      state.cards = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCards.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCards.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.cards = action.payload;
      })
      .addCase(getCards.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch cards";
      })
      .addCase(createCard.fulfilled, (state, action) => {
        state.cards.push(action.payload);
      })
      .addCase(updateCard.fulfilled, (state, action) => {
        state.cards = state.cards.map((item) =>
          item.id === action.payload.id ? action.payload : item
        );
      })
      .addCase(deleteCard.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.cards = state.cards.filter(
          (item) => item.id !== action.payload.id
        );
      });
  },
});

export const getCards = createAsyncThunk(`api/card/all`, async () => {
  const response = await axios.get(`${apiUrl}/api/card`);
  return response.data;
});

export const createCard = createAsyncThunk(
  `api/card/create`,
  async ({
    name,
    languageId,
    artistId,
    groupId,
    event_sub_groupId,
    typeId,
    scene,
    action,
    consequence_positive,
    consequence_negative,
    co2_level_number,
    nature_level_number,
    gdp_level_number,
    qrcode,
    image,
  }: CardArgs) => {
    const response = await axios.post(`${apiUrl}/api/card`, {
      name,
      languageId,
      artistId,
      groupId,
      event_sub_groupId,
      typeId,
      scene,
      action,
      consequence_positive,
      consequence_negative,
      co2_level_number,
      nature_level_number,
      gdp_level_number,
      qrcode,
      image,
    });
    return response.data;
  }
);
export const updateCard = createAsyncThunk(
  `api/card/update`,
  async ({ id, cardData }: { id: number; cardData: CardArgs }) => {
    const {
      name,
      languageId,
      artistId,
      groupId,
      event_sub_groupId,
      typeId,
      scene,
      action,
      consequence_positive,
      consequence_negative,
      co2_level_number,
      nature_level_number,
      gdp_level_number,
      qrcode,
      image,
    } = cardData;
    const response = await axios.put(`${apiUrl}/api/cardstack/${id}`, {
      name,
      languageId,
      artistId,
      groupId,
      event_sub_groupId,
      typeId,
      scene,
      action,
      consequence_positive,
      consequence_negative,
      co2_level_number,
      nature_level_number,
      gdp_level_number,
      qrcode,
      image,
    });
    return response.data;
  }
);
export const deleteCard = createAsyncThunk(
  `api/card/delete`,
  async (id: number) => {
    const response = await axios.delete(`${apiUrl}/api/card/${id}`);
    return response.data;
  }
);
export const { setCard } = cardSlice.actions;
export default cardSlice.reducer;
