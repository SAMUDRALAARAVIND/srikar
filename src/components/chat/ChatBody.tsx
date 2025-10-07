import type { Message } from "../../types/chat.types";
import { formatTimestamp } from "../../utils/time";

export default function ChatBody({ messages }: { messages: Message[] }) {
  console.log(messages);
  const sortedMessages = [...messages].sort(
    (a, b) => a.timestamp - b.timestamp
  );

  // Group messages by date
  const groupedMessages = sortedMessages.reduce(
    (groups: Record<string, Message[]>, msg) => {
      const dateKey = formatTimestamp(msg.timestamp);
      if (!groups[dateKey]) groups[dateKey] = [];
      groups[dateKey].push(msg);
      return groups;
    },
    {}
  );

  return (
    <div className="chat-body">
      {Object.entries(groupedMessages).map(([date, msgs]) => (
        <div key={date}>
          <div className="date-box">
            <span className="date">{date}</span>
          </div>

          <div className="messages-container">
            {msgs.map((msg) => (
              <div
                key={msg.messageId}
                className={
                  msg.sender === "USER" ? "user-message" : "bot-message"
                }
              >
                <div>
                  <span className="message-text">{msg.message}</span>

                  {msg.messageType === "optionedMessage" && msg.options && (
                    <div>
                      {msg.options.map((opt, i) => (
                        <div key={i}>
                          <div>{opt.optionText}</div>
                          {opt.optionSubText && <div>{opt.optionSubText}</div>}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
