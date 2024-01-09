import { createSlice } from "@reduxjs/toolkit";

const pushSlice = createSlice({
  name: "default",

  initialState: {
    user: null,
    chats: null,
    requests: null,
    stream: null,
    data: null,
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
    setStream: (state, action) => {
      state.stream = action.payload;
    },
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setUser, setChats, setRequests, setStream, setData } =
  pushSlice.actions;

export default pushSlice.reducer;
