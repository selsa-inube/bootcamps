import { createContext } from "react";

const authUser = {
  id: "c00010",
  name: "Savannah Nguyen",
  status: "Product Designer",
  avatar: "../src/mocks/contacts/imgs/contact00010.jpg",
  username: "savannah",
  phone: "+628452341283",
  active: true,
  lastConnection: "9/8/2023 7:37:08 AM", //d.toLocaleString();
};

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
