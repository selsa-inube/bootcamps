import { createContext } from "react";
import { contactMocks } from "../mocks/contacts/contacts.mocks.js";

let userAuthId = "c00010";
const authUser = contactMocks.filter((user) => user.id === userAuthId)[0];

const darkMode = false;
const language = "english";

export const AppContext = createContext();

export default function AppContextProvider(props) {
  const { children } = props;
  return (
    <AppContext.Provider value={{ authUser, darkMode, language }}>
      {children}
    </AppContext.Provider>
  );
}
