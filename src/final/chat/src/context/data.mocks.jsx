import { createContext } from "react";
import { chatMocks } from "../mocks/chats/chats.mocks.js";
import { contactMocks } from "../mocks/contacts/contacts.mocks.js";
import { groupMocks } from "../mocks/groups/groups.mocks.js";

export const DataContext = createContext();

export default function DataContextProvider(props) {
  const { children } = props;
  return (
    <DataContext.Provider value={{ chatMocks, contactMocks, groupMocks }}>
      {children}
    </DataContext.Provider>
  );
}
