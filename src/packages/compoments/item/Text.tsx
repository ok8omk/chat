import React from "react";
import styled from "@emotion/styled";
import type { Text as Props } from "~/types/Item/Text";

const StyledText = styled.div`
  border: solid 1px #dfe2e9;
  border-radius: 4px;
  background-color: #ffffff;
  padding: 4px 12px;
  font-size: 16px;
`;

const Text: React.FC<Props> = ({ text }) => {
  return <StyledText>{text}</StyledText>;
};

export default Text;
