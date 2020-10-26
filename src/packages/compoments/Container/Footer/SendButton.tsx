import React from "react";
import styled from "@emotion/styled";
import svg from "./send-24px.svg";

type Props = React.ComponentPropsWithoutRef<"button">;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  width: 32px;
  border: solid 1px #dfe2e9;
  border-radius: 4px;
  padding: 0;
  margin: 0;
  & > svg {
    display: block;
  }
`;

const SendButton: React.FC<Props> = (props) => {
  return (
    <Button {...props}>
      <img src={svg} />
    </Button>
  );
};

export default SendButton;
