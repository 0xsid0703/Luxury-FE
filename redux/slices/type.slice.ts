import { TypeState } from "@/types/Type";
import { createSlice } from "@reduxjs/toolkit";

const initialState: TypeState = {
  types: [],
  status: "idle",
  error: null,
};

export const typeSlice = createSlice({
  name: "type",
  initialState,
  reducers: {
    setTypes: (state, action) => {
      state.status = "succeeded";
      state.types = action.payload;
    },
  },
});

export const { setTypes } = typeSlice.actions;
export default typeSlice.reducer;
