import "./app.scss";
import Chat from "./components/chat";
import ChatsList from "./components/chats";
import { apiData } from "./data";

export default function App() {
  return (
    <div className="app">
      <ChatsList />
      <Chat chat={apiData[2]} />
    </div>
  );
}
