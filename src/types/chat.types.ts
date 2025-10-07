export interface ChatItem {
  id: number;
  title: string;
  imageURL: string;
  orderId: string;
  latestMessageTimestamp: number;
  messageList: Message[];
}

export interface Message {
  messageId: string;
  message: string;
  timestamp: number;
  sender: "BOT" | "USER";
  messageType?: "text" | "optionedMessage";
  options?: MessageOption[];
}

export interface MessageOption {
  optionText: string;
  optionSubText?: string;
}
