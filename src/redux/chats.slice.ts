import { createSlice } from "@reduxjs/toolkit";

const chatsSlice = createSlice({
  initialState: {
    chatsList: [],
    selectedChatId: null,
    isDataFetched: false,
  },
  name: "chats",
  reducers: {
    onDataFetched: (state, { payload }) => {
      state.chatsList = payload;
      state.isDataFetched = true;
    },
  },
});

export const { onDataFetched } = chatsSlice.actions;

export default chatsSlice;
