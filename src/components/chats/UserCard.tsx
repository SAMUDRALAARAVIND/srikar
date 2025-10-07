import type { ChatItem } from "../../types/chat.types";
import { formatTimestamp } from "../../utils/time";

export default function UserCard({ userInfo }: { userInfo: ChatItem }) {
  return (
    <div className="user-card">
      <img src={userInfo.imageURL} alt="User image" />
      <div className="details">
        <span className="title">{userInfo.title}</span>
        <span className="orderId">{userInfo.orderId}</span>
      </div>
      <div>{formatTimestamp(userInfo.latestMessageTimestamp)}</div>
    </div>
  );
}
