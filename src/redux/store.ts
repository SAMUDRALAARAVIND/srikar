import { configureStore } from "@reduxjs/toolkit";
import chatsSlice from "./chats.slice";

const store = configureStore({
  reducer: {
    chats: chatsSlice.reducer,
  },
});

export default store;
