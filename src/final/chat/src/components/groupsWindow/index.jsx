import { StyledGroupsWindow } from "./styles.js";
import { Contact } from "../chatsandgroups/index.jsx";
import { StyledChatContainer } from "../../components/chatsWindow/styles.js";
import { Title } from "../TitleChats";
import { useContext, useState, useEffect } from "react";
import { DataContext } from "../../context/data.mocks.jsx";
import { AppContext } from "../../context/index.jsx";
const GroupsWindow = ({ activeChat, setActiveChat }) => {
  const { chatMocks, contactMocks, groupMocks } = useContext(DataContext);
  const { authUser, darkMode, language } = useContext(AppContext);
  return (
    <StyledGroupsWindow>
      <Title label="Group" />
      <StyledChatContainer>
        {groupMocks
          .filter((contact) => contact.id !== authUser.id)
          .map((contact) => (
            <Contact
              key={contact.id}
              user={contact}
              setActiveChat={setActiveChat}
              activeChat={activeChat}
            />
          ))}
      </StyledChatContainer>
    </StyledGroupsWindow>
  );
};

export default GroupsWindow;
