import type { ChatState } from "./ChatState";
import type { ChatAction } from "./ChatAction";
import type { Item } from "./Item";

export type Chat = ChatState & ChatAction;
