import type { ChatItem } from "../../types/chat.types";
import ChatBody from "./ChatBody";
import "./styles/chat.scss";

export default function Chat({ chat }: { chat: ChatItem }) {
  return (
    <div className="chat-container">
      <div className="chat-header"></div>
      <ChatBody messages={chat.messageList} />
      <div className="chat-footer"></div>
    </div>
  );
}
