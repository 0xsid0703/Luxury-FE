import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ImageState } from "@/types/ImageType";
import axios from "axios";
import { apiUrl } from "../apiConfig";

const initialState: ImageState = {
  images: [],
  status: "idle",
  error: null,
};

export const imagesSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    setImages: (state, action) => {
      state.status = "succeeded";
      state.images = action.payload;
    },
    addImages: (state, action) => {
      state.images.push(action.payload);
    },
    updateImages: (state, action) => {
      state.images = state.images.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(deleteImage.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.images = state.images.filter(
        (item) => item.id !== action.payload.id
      );
    });
  },
});
export const deleteImage = createAsyncThunk(
  `api/image/delete`,
  async (id: number) => {
    const response = await axios.delete(`${apiUrl}/api/image/${id}`);
    return response.data;
  }
);
export const { setImages, addImages, updateImages } = imagesSlice.actions;
export default imagesSlice.reducer;
