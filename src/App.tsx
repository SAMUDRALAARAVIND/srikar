import "./app.scss";
import Chat from "./components/chat";
import ChatsList from "./components/chats";
import { apiData } from "./data";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./redux/store";
import { useEffect } from "react";

function fetchChats() {
  return async function (dispatch, getState) {
    const response = await fetch(
      "https://my-json-server.typicode.com/codebuds-fk/chat/chats"
    );
    const data = await response.json();
    dispatch(onDataFetched(data));
  };
}

const ChatWrapper = () => {
  const isDataFetched = useSelector((state) => state.chats.isDataFetched);
  const chats = useSelector((state) => state.chats.chatsList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchChats());
  }, []);

  if (!isDataFetched) {
    return <p>Fetching chats ...</p>;
  }

  return (
    <div className="app">
      <ChatsList chats={chats} />
      <Chat />
    </div>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <ChatWrapper />
    </Provider>
  );
}
