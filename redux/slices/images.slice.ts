import { createSlice } from "@reduxjs/toolkit";
import { ImageState } from "@/types/ImageType";

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
  },
});

export const { setImages, addImages } = imagesSlice.actions;
export default imagesSlice.reducer;
