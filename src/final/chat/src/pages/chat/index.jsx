import { StyledChat } from "./styles.js";
import ChatSpace from "../../components/chatSpace/index";
import GroupsWindow from "../../components/groupsWindow/index";
import SearchBar from "../../components/searchBar/index.jsx";
import ChatsWindow from "../../components/chatsWindow/index";
import UserNav from "../../components/userNav/index";
import { useState } from "react";

const Chat = () => {
  const [activeChat, setActiveChat] = useState("");

  return (
    <StyledChat>
      <UserNav />
      <SearchBar />
      <ChatSpace activeChat={activeChat} setActiveChat={setActiveChat} />
      <GroupsWindow activeChat={activeChat} setActiveChat={setActiveChat} />
      <ChatsWindow activeChat={activeChat} setActiveChat={setActiveChat} />
    </StyledChat>
  );
};

export default Chat;
