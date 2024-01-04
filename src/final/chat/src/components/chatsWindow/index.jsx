import { Contact } from "../chatsandgroups/index.jsx";
import { StyledChatsWindow, StyledChatContainer } from "./styles.js";
import { Title } from "../TitleChats";
import { useContext, useState, useEffect } from "react";
import { DataContext } from "../../context/data.mocks.jsx";
import { AppContext } from "../../context/index.jsx";

const ChatsWindow = ({ activeChat, setActiveChat }) => {
  const { chatMocks, contactMocks, groupMocks } = useContext(DataContext);
  const { authUser, darkMode, language } = useContext(AppContext);
  return (
    <StyledChatsWindow>
      <Title label="Chats" />
      <StyledChatContainer>
        {contactMocks
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
    </StyledChatsWindow>
  );
};

export default ChatsWindow;
