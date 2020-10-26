import React from "react";
import { ChatProvider } from "./ChatContext";
import { ChatState } from "~/types/ChatState";
import { Item } from "~/types/Item";
import type { Chat as ChatType } from "~/types/Chat";

type ChatReducerAction = {
  type: "SEND";
  payload: Item;
};

const chatReducer = (
  state: ChatState,
  action: ChatReducerAction
): ChatState => {
  switch (action.type) {
    case "SEND":
      return { items: [...state.items, action.payload] };
  }
};

const useChat = (): ChatType => {
  const [state, dispatcher] = React.useReducer<
    React.Reducer<ChatState, ChatReducerAction>
  >(chatReducer, { items: [] });

  const send = React.useCallback((item: Item) => {
    dispatcher({ type: "SEND", payload: item });
  }, []);

  return { ...state, send };
};

const Chat: React.FC = ({ children }) => {
  const chat = useChat();

  return <ChatProvider value={chat}>{children}</ChatProvider>;
};

export default Chat;
