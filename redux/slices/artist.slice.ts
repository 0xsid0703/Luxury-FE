import { ArtistArgs, ArtistState } from "@/types/Artist";
import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiUrl } from "../apiConfig";

const initialState: ArtistState = {
  artists: [],
  status: "idle",
  error: null,
};

export const artistSlice = createSlice({
  name: "artist",
  initialState,
  reducers: {
    setArtist: (state, action) => {
      state.status = "succeeded";
      state.artists = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getArtists.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getArtists.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.artists = action.payload;
      })
      .addCase(getArtists.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch artists";
      })
      .addCase(createArtist.fulfilled, (state, action) => {
        state.artists.push(action.payload);
      });
  },
});

export const getArtists = createAsyncThunk(`api/artist/all`, async () => {
  const response = await axios.get(`${apiUrl}/api/artist`);
  return response.data;
});

export const createArtist = createAsyncThunk(
  `api/cardstack/create`,
  async ({ name, link }: ArtistArgs) => {
    const response = await axios.post(`${apiUrl}/api/artist`, {
      name,
      link,
    });
    return response.data;
  }
);
export const { setArtist } = artistSlice.actions;
export default artistSlice.reducer;
