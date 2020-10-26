import React from "react";
import styled from "@emotion/styled";
import type { Sender } from "~/types/Item";

type Props = {
  sender: Sender;
};

const Layout = styled.div`
  width: 100%;
  display: flex;
  margin: 4px 0;
`;

const YourLayout = styled(Layout)`
  justify-content: flex-end;
`;

const MyLayout = styled(Layout)``;

const LayoutBySender: React.FC<Props> = ({ sender, children }) => {
  if (sender === "you") {
    return <YourLayout>{children}</YourLayout>;
  }

  return <MyLayout>{children}</MyLayout>;
};

export default LayoutBySender;
