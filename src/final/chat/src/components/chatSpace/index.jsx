import { StyledChatSpace } from "./styles.js";
import { useContext, useState, useEffect } from "react";
import { AppContext } from "../../context/index";
import { StyledChatWindow } from "./styles.js";

const chatSpace = ({ activeChat, setActiveChat }) => {
  const [activeChatSpace, setActiveChatSpace] = useState("");
  const [newMessage, setNewMessage] = useState("");
  const [newMessageError, setNewMessageError] = useState("");
  const { authUser, darkMode, language } = useContext(AppContext);

  useEffect(() => {
    if (activeChat.length) {
      setActiveChatSpace(activeChat[0]);
    }
  }, [activeChat]);

  const handleChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    alert(`the new message is: ${newMessage}`);
    setActiveChatSpace(newMessage);
    setActiveChat([newMessage]);
    event.preventDefault();
  };

  return (
    <StyledChatSpace>
      <StyledChatWindow>
        <p>Chat history</p>
      </StyledChatWindow>
      <p>Verificacion de context {language}</p>

      <form onSubmit={handleSubmit}>
        <input
          type="file"
          id="fileOnMessage"
          name="fileOnMessage"
          accept="image/png, image/jpeg"
        />

        <input
          type="text"
          id="new-message"
          placeholder="Type a message"
          onChange={handleChange}
        ></input>
        <button type="submit">flecha</button>
      </form>
    </StyledChatSpace>
  );
};

export default chatSpace;
