import React from "react";
import styled from "@emotion/styled";
import Container from "./Container";
import Input from "./Input";
import SendButton from "./SendButton";
import { useChatContext } from "~/ChatContext";

type ViewProps = {
  sendMessage: (text: string) => void;
};

const View: React.FC<ViewProps> = ({ sendMessage }) => {
  const [text, setText] = React.useState("");

  const onChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setText(event.target.value);
    },
    []
  );

  const onClick = React.useCallback(() => {
    if (text === "") {
      return;
    }
    sendMessage(text);
    setText("");
  }, [sendMessage, text]);

  return (
    <Container>
      <Input value={text} onChange={onChange} />
      <SendButton onClick={onClick} />
    </Container>
  );
};

const Footer = () => {
  const chat = useChatContext();
  const sendMessage = React.useCallback((text: string) => {
    chat.send({ type: "text", text, by: "you" });
  }, []);

  return <View sendMessage={sendMessage} />;
};

export default Footer;
