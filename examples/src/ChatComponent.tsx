import React from "react";
import Container from "~/compoments/Container";
import { useChatContext } from "~/ChatContext";

const ChatComponent = () => {
  const chat = useChatContext();

  return (
    <Container title="@ok8omk Chat Component Example" items={chat.items} />
  );
};

export default ChatComponent;
