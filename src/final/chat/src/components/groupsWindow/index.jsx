import { StyledGroupsWindow } from "./styles.js";
import { Contact } from "../chatsandgroups/index.jsx";
import { StyledChatContainer } from "../../components/chatsWindow/styles.js";
import { Title } from "../TitleChats";
import { useContext } from "react";
import { DataContext } from "../../context/data.mocks.jsx";
import { AppContext } from "../../context/index.jsx";
const GroupsWindow = ({ activeChat, setActiveChat }) => {
  const { groupMocks } = useContext(DataContext);
  const { authUser } = useContext(AppContext);
  return (
    <StyledGroupsWindow>
      <Title label="Group" />
      <StyledChatContainer>
        {groupMocks
          .filter((group) => group.contacts.indexOf(authUser.id) !== -1)
          .map((group) => (
            <Contact
              key={group.id}
              user={group}
              setActiveChat={setActiveChat}
              activeChat={activeChat}
            />
          ))}
      </StyledChatContainer>
    </StyledGroupsWindow>
  );
};

export default GroupsWindow;
