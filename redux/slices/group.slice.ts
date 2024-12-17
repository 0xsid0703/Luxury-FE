import { GroupState } from "@/types/Group";
import { createSlice } from "@reduxjs/toolkit";

const initialState: GroupState = {
  groups: [],
  status: "idle",
  error: null,
};

export const groupSlice = createSlice({
  name: "group",
  initialState,
  reducers: {
    setGroups: (state, action) => {
      state.status = "succeeded";
      state.groups = action.payload;
    },
  },
});

export const { setGroups } = groupSlice.actions;
export default groupSlice.reducer;
