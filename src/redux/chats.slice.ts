import { createSlice } from "@reduxjs/toolkit";
import type { ChatItem } from "../types/chat.types";

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
    onFilter: (state, { payload: filterText }) => {
      const filteredResults = state.data?.filter((chat: ChatItem) => {
        return (
          chat.orderId == filterText ||
          chat.title.toLowerCase().includes(filterText.toLowerCase())
        );
      });
      state.chatsList = filteredResults;
    },
  },
});

export const { onDataFetched, selectChat, onFilter } = chatsSlice.actions;

export default chatsSlice;
