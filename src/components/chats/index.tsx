import { useSelector } from "react-redux";
import type { ChatItem } from "../../types/chat.types";
import "./styles/chats-list.scss";
import UserCard from "./UserCard";

export default function ChatsList({ chats }: { chats: ChatItem[] }) {
  const activeChatId = useSelector((state) => state.chats.selectedChatId);
  return (
    <div className="chats-list-container">
      {chats.map((user) => {
        return (
          <UserCard
            key={user.id}
            userInfo={user}
            isActive={activeChatId === user.id}
          />
        );
      })}
    </div>
  );
}
