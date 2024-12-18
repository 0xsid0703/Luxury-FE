import { UserState } from "@/types/User";
import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiUrl } from "../apiConfig";

const initialState: UserState = {
  users: [],
  status: "idle",
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.status = "succeeded";
      state.users = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch users";
      });
  },
});

export const getUsers = createAsyncThunk(`api/user/all`, async () => {
  const response = await axios.get(`${apiUrl}/api/user`);
  return response.data;
});
export const { setUser } = userSlice.actions;
export default userSlice.reducer;
