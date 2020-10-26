import type { Item } from "./Item";

export type ChatAction = {
  send: (item: Item) => void;
};
