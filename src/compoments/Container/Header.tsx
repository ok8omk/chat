import React from "react";
import styled from "@emotion/styled";

type Props = {
  title: string;
};

const StyledHeader = styled.div`
  position: absolute;
  top: 0;
  z-index: 2;

  box-sizing: border-box;
  width: 100%;

  background-color: #f8f8f8;
  font-size: 18px;
  padding: 18px 12px;
`;

const Header: React.FC<Props> = ({ title }) => {
  return <StyledHeader>{title}</StyledHeader>;
};

export default Header;
