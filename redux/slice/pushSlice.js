import { createSlice } from "@reduxjs/toolkit";

const pushSlice = createSlice({
  name: "default",

  initialState: {
    user: null,
    chats: null,
    requests: null,
  },

  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setChats: (state, action) => {
      state.chats = action.payload;
    },
    setRequests: (state, action) => {
      state.requests = action.payload;
    },
  },
});

export const { setUser, setChats, setRequests } = pushSlice.actions;

export default pushSlice.reducer;
