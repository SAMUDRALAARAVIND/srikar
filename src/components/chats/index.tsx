import type { ChatItem } from "../../types/chat.types";
import "./styles/chats-list.scss";
import UserCard from "./UserCard";

export default function ChatsList({ chats }: { chats: ChatItem[] }) {
  return (
    <div className="chats-list-container">
      {chats.map((user) => {
        return <UserCard key={user.id} userInfo={user} />;
      })}
    </div>
  );
}
