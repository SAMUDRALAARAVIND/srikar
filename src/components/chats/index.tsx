import { apiData } from "../../data";
import "./styles/chats-list.scss";
import UserCard from "./UserCard";

export default function ChatsList() {
  return (
    <div className="chats-list-container">
      {apiData.map((user) => {
        return <UserCard key={user.id} userInfo={user} />;
      })}
    </div>
  );
}
