import { useDispatch, useSelector } from "react-redux";
import type { ChatItem } from "../../types/chat.types";
import "./styles/chats-list.scss";
import UserCard from "./UserCard";
import { onFilter } from "../../redux/chats.slice";

export default function ChatsList({ chats }: { chats: ChatItem[] }) {
  const activeChatId = useSelector((state) => state.chats.selectedChatId);
  const dispatch = useDispatch();

  const onChangeText = (event) => {
    const input = event.target.value.trim();
    dispatch(onFilter(input));
  };
  return (
    <div className="sidebar">
      <div className="filters">
        <h2>Filter by title / order id</h2>
        <input placeholder="Start typing to search" onChange={onChangeText} />
      </div>
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
    </div>
  );
}
