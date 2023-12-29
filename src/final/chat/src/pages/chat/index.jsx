import { StyledChat } from "./styles.js";
import ChatSpace from "../../components/chatSpace";
import GroupsWindow from "../../components/groupsWindow";
import SearchBar from "../../components/searchBar";
import ChatsWindow from "../../components/chatsWindow";
import UserNav from "../../components/userNav";
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
