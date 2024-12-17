import { LanguageState } from "@/types/Language";
import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiUrl } from "../apiConfig";

const initialState: LanguageState = {
  languages: [],
  status: "idle",
  error: null,
};

export const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.status = "succeeded";
      state.languages = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getLanguages.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getLanguages.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.languages = action.payload;
      })
      .addCase(getLanguages.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch languages";
      })
      .addCase(deleteLanguage.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.languages = state.languages.filter(
          (item) => item.id !== action.payload.id
        );
      })
      .addCase(createLanguage.fulfilled, (state, action) => {
        state.languages.push(action.payload);
      });
  },
});

export const getLanguages = createAsyncThunk(`api/language/all`, async () => {
  const response = await axios.get(`${apiUrl}/api/language`);
  return response.data;
});

export const createLanguage = createAsyncThunk(
  `api/language/create`,
  async (language: string) => {
    const response = await axios.post(`${apiUrl}/api/language`, {
      language,
    });
    return response.data;
  }
);
export const deleteLanguage = createAsyncThunk(
  `api/language/delete`,
  async (id: number) => {
    const response = await axios.delete(`${apiUrl}/api/language/${id}`);
    return response.data;
  }
);

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
