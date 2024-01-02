import { StyledChatsWindow } from "./styles.js";
import { useContext, useState, useEffect } from "react";

const ChatsWindow = ({ activeChat, setActiveChat }) => {
  return (
    <StyledChatsWindow>
      <p>Chats Window</p>
      <p>Lo que viene de chat es {activeChat}</p>
    </StyledChatsWindow>
  );
};

export default ChatsWindow;
