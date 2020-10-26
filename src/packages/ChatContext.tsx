import React from "react";
import type { Chat } from "~/types/Chat";

export const ChatContext = React.createContext<Chat>(undefined as any);
export const ChatProvider = ChatContext.Provider;
export const ChatConsumer = ChatContext.Consumer;

export const useChatContext = () => {
  const chatMessage = React.useContext(ChatContext);

  return chatMessage;
};
