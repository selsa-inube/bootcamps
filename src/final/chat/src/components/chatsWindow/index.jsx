import { StyledChatsWindow } from "./styles.js";
import { useContext, useState, useEffect } from "react";

const ChatsWindow = ({ activeChat, setActiveChat }) => {
  const [activeChatSpace, setActiveChatSpace] = useState("");

  useEffect(() => {
    if (activeChat.length) {
      setActiveChatSpace(activeChat[0]);
    }
  }, [activeChat]);

  return (
    <StyledChatsWindow>
      <p>Chats Window</p>
      <p>Lo que viene de chat es {activeChatSpace}</p>
      {console.log("hola estoy en chats Window", activeChatSpace)}
    </StyledChatsWindow>
  );
};

export default ChatsWindow;
