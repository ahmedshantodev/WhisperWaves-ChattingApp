import { createSlice } from "@reduxjs/toolkit";

export const userSlices = createSlice({
  name: "user",
  initialState: {
    information: localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null,
  },
  reducers: {
    activeUser: (state, actions) => {
      state.information = actions.payload;
    },
  },
});

export const { activeUser } = userSlices.actions;

export default userSlices.reducer;
