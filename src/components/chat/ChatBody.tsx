import { Fragment } from "react/jsx-runtime";
import type { Message } from "../../types/chat.types";
import { formatTime, formatTimestamp } from "../../utils/time";

export default function ChatBody({ messages }: { messages: Message[] }) {
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
        <Fragment key={date}>
          <span className="date">{date}</span>
          {msgs.map((msg) => (
            <div
              key={msg.messageId}
              className={
                (msg.sender === "USER" ? "user-message" : "bot-message") +
                " message"
              }
            >
              <div className="message-text">
                <span>{msg.message}</span>
                <span className="timestamp">{formatTime(msg.timestamp)}</span>
              </div>
              {msg.messageType === "optionedMessage" && msg.options && (
                <div className="options-container">
                  {msg.options.map((opt, i) => (
                    <div key={i} className="option">
                      <div className="title">{opt.optionText}</div>
                      {opt.optionSubText && (
                        <div className="subtitle">{opt.optionSubText}</div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </Fragment>
      ))}
    </div>
  );
}
