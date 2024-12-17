import { EventSubGroupState } from "@/types/EventSubGroup";
import { createSlice } from "@reduxjs/toolkit";

const initialState: EventSubGroupState = {
  eventSubGroups: [],
  status: "idle",
  error: null,
};

export const subGroupSlice = createSlice({
  name: "subgroup",
  initialState,
  reducers: {
    setSubGroups: (state, action) => {
      state.status = "succeeded";
      state.eventSubGroups = action.payload;
    },
  },
});

export const { setSubGroups } = subGroupSlice.actions;
export default subGroupSlice.reducer;
