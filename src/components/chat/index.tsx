import { useSelector } from "react-redux";
import type { ChatItem } from "../../types/chat.types";
import ChatBody from "./ChatBody";
import "./styles/chat.scss";

export default function Chat() {
  const chat: null | ChatItem = useSelector((state) => {
    const selectedChatId = state.chats.selectedChatId;
    if (!selectedChatId) {
      return null;
    }
    const filteredChats = state.chats.chatList.filter(
      (individualChat) => individualChat.id == selectedChatId
    );
    return filteredChats.length > 0 ? filteredChats[0] : null;
  });

  if (!chat) return null;

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
