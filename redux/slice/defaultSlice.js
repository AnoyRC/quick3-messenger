import { createSlice } from "@reduxjs/toolkit";

const defaultSlice = createSlice({
  name: "default",

  initialState: {
    counter: 0,
  },

  reducers: {
    setCounter: (state, action) => {
      state.counter = action.payload;
    },
  },
});

export const { setCounter } = defaultSlice.actions;

export default defaultSlice.reducer;
