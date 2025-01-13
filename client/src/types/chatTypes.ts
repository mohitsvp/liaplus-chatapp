import { UserInterface } from "../types/authTypes";

export interface MessageInterface {
  _id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: string;
  text? : string;
  image? : string;
  created_at : string;
  // Add any additional fields relevant to the message structure.
}

export interface ChatStoreInterface {
  messages: Array<MessageInterface>;
  users: Array<UserInterface>;
  isUsersLoading: boolean;
  isMessagesLoading: boolean;
  selectedUser: UserInterface | null;
  getUsers: () => Promise<void>;
  setSelectedUser: (data: UserInterface | null) => void;
  getMessages: (userId: string) => Promise<void>;
  subscribeToMessages: () => void;
  unsubscribeFromMessages: () => void;
  sendMessage : (data : {text : string, image : any }) => void;
}
