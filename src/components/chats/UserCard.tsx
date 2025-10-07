import { useDispatch } from "react-redux";
import type { ChatItem } from "../../types/chat.types";
import { formatTimestamp } from "../../utils/time";
import { selectChat } from "../../redux/chats.slice";

export default function UserCard({
  userInfo,
  isActive,
}: {
  userInfo: ChatItem;
  isActive: boolean;
}) {
  const dispatch = useDispatch();

  const openMessages = () => {
    const chatId = userInfo.id;
    dispatch(selectChat(chatId));
  };
  return (
    <div
      className="user-card"
      onClick={openMessages}
      style={{ backgroundColor: `${isActive ? "#e3e3e3" : "#fff"}` }}
    >
      <img src={userInfo.imageURL} alt="User image" />
      <div className="details">
        <span className="title">{userInfo.title}</span>
        <span className="orderId">{userInfo.orderId}</span>
      </div>
      <div>{formatTimestamp(userInfo.latestMessageTimestamp)}</div>
    </div>
  );
}
