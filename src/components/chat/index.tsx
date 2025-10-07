import type { ChatItem } from "../../types/chat.types";
import ChatBody from "./ChatBody";
import "./styles/chat.scss";

export default function Chat({ chat }: { chat: ChatItem }) {
  return (
    <div className="chat-container">
      <div className="chat-header">
        <img src={chat.imageURL} alt="User image" />
        <span>{chat.title}</span>
      </div>

      <ChatBody messages={chat.messageList} />
      <div className="chat-footer">
        <input placeholder="Type a Message" />
        <span className="material-icons">send</span>
      </div>
    </div>
  );
}
