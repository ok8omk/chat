import React from "react";
import styled from "@emotion/styled";
import type { Item } from "~/types/Item";
import Text from "../item/Text";
import LayoutBySender from "../item/LayoutBySender";

type Props = {
  items: Item[];
};

const Frame = styled.div`
  z-index: 1;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 600px;
  overflow: scroll;
`;

const StyledCanvas = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #edeff3;
  border-radius: 4px;
  padding: 72px 8px 4px;
  min-height: 800px;
`;

const Canvas: React.FC<Props> = ({ items }) => {
  return (
    <Frame>
      <StyledCanvas>
        {items.map((item) => (
          <LayoutBySender sender={item.by}>
            <Text text={item.text} />
          </LayoutBySender>
        ))}
      </StyledCanvas>
    </Frame>
  );
};

export default Canvas;
