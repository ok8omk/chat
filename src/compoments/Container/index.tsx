import React from "react";
import styled from "@emotion/styled";
import type { Item } from "~/types/Item";
import Header from "./Header";
import Canvas from "./Canvas";
import Footer from "./Footer";

type Props = {
  title: string;
  items: Item[];
};

const Layout = styled.div`
  position: relative;
  min-height: 600px;
  max-height: 100vh;
`;

const Container: React.FC<Props> = ({ title, items }) => {
  return (
    <Layout>
      <Header title={title} />
      <Canvas items={items} />
      <Footer />
    </Layout>
  );
};

export default Container;
