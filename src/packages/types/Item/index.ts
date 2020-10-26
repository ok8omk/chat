import type { Text } from "./Text";

export type Sender = "me" | "you";

type ItemMeta = {
  by: Sender;
  type: string;
};

export type Item = ItemMeta & ({ type: "text" } & Text);
