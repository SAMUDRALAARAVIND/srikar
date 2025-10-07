import { createSlice } from "@reduxjs/toolkit";

const chatsSlice = createSlice({
  initialState: {
    data: null,
    chatsList: [],
    selectedChatId: null,
    isDataFetched: false,
  },
  name: "chats",
  reducers: {
    onDataFetched: (state, { payload }) => {
      state.chatsList = payload;
      state.data = payload;
      state.isDataFetched = true;
    },
    selectChat: (state, { payload }) => {
      state.selectedChatId = payload;
    },
  },
});

export const { onDataFetched, selectChat } = chatsSlice.actions;

export default chatsSlice;
