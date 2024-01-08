import { createSlice } from "@reduxjs/toolkit";

const pushSlice = createSlice({
  name: "default",

  initialState: {
    user: null,
  },

  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = pushSlice.actions;

export default pushSlice.reducer;
