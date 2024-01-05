// Styles
import {
  StyledChatSpace,
  StyledChatWindow,
  MyMessage,
  OtherMessage,
  StyledDateMessage,
  StyledWwriteNewMessage,
} from "./styles.js";
// Dependencies
import { useContext, useState } from "react";
// Context
import { AppContext } from "../../context/index.jsx";
import { DataContext } from "../../context/data.mocks.jsx";
// Components
import { ContactStamp } from "./components/contactStamp/index.jsx";
import { ChatInfo } from "./components/chatInfo/index.jsx";
import { NewMessagesForm } from "./components/newMessagesForm/index.jsx";

const chatSpace = ({ activeChat, setActiveChat }) => {
  const [newMessage, setNewMessage] = useState("");
  const { authUser } = useContext(AppContext);
  const { chatMocks, contactMocks, groupMocks } = useContext(DataContext);

  // Chat init
  const chatLog = [];

  const chatLogCalculation = () => {
    let chatMocksFiltered = chatMocks.filter(
      (chat) =>
        (chat.from === authUser.id && chat.to === activeChat) ||
        (chat.from === activeChat && chat.to === authUser.id) ||
        (activeChat[0] === "g" && chat.to === activeChat)
    );

    chatMocksFiltered.sort(function (chat1, chat2) {
      return chat1.timeStamp - chat2.timeStamp;
    });
    if (chatMocksFiltered.length) {
      chatLog.push(
        <StyledDateMessage key={"ds"}>
          {chatMocksFiltered[0].timeStamp.toString().slice(0, 15)}
        </StyledDateMessage>
      );

      let day = new Date(
        chatMocksFiltered[0].timeStamp.toString().slice(0, 15)
      );
      let contactId = chatMocksFiltered[0].from;

      for (let i = 0; i < chatMocksFiltered.length; i++) {
        let chat = chatMocksFiltered[i];

        if (new Date(chat.timeStamp.toString().slice(0, 15)) - day > 0) {
          day = new Date(chat.timeStamp.toString().slice(0, 15));
          chatLog.push(
            <StyledDateMessage key={chat.id + "ds"}>
              {chatMocksFiltered[i].timeStamp.toString().slice(0, 15)}
            </StyledDateMessage>
          );
        }
        if (chat.from === authUser.id) {
          chatLog.push(
            <MyMessage key={chat.id}>
              <p>{chat.content}</p>
            </MyMessage>
          );
        } else if (chat.from === activeChat || activeChat[0] === "g") {
          chatLog.push(
            <OtherMessage key={chat.id}>
              <p>{chat.content}</p>
              {chat.read && (
                <i className="fa fa-check-circle" aria-hidden="true"></i>
              )}
            </OtherMessage>
          );
        }
        if (i === chatMocksFiltered.length - 1) {
          chatLog.push(
            <ContactStamp
              key={chat.id + "cs"}
              contactID={chatMocksFiltered[i].from}
              contactMocks={contactMocks}
              hour={chatMocksFiltered[i].timeStamp.toString().slice(16, 21)}
              you={chatMocksFiltered[i].from === authUser.id}
            />
          );
          contactId = chatMocksFiltered[i].from;
        } else if (!(contactId === chatMocksFiltered[i + 1].from)) {
          chatLog.push(
            <ContactStamp
              key={chat.id + "cs"}
              contactID={chatMocksFiltered[i].from}
              contactMocks={contactMocks}
              hour={chatMocksFiltered[i].timeStamp.toString().slice(16, 21)}
              you={chatMocksFiltered[i].from === authUser.id}
            />
          );
          contactId = chatMocksFiltered[i + 1].from;
        }
      }
    } else if (activeChat[0] === "c") {
      chatLog.push(
        <StyledWwriteNewMessage key={"nm"}>
          {`Write a new message to ${
            contactMocks.filter((user) => user.id === activeChat)[0].name
          }`}
        </StyledWwriteNewMessage>
      );
    }
  };

  chatLogCalculation();

  const handleChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let localTime = new Date();
    let newChatMessage = {
      id: "chat",
      from: authUser.id,
      to: activeChat,
      content: newMessage,
      read: false,
      timeStamp: localTime,
    };
    newChatMessage.id += Math.floor(Math.random() * 999999999);
    chatMocks.push(newChatMessage);
    chatLogCalculation();
    setNewMessage("");
    document.newMessages.reset();
  };
  return (
    <StyledChatSpace>
      <ChatInfo
        activeChat={activeChat}
        setActiveChat={setActiveChat}
        contactMocks={contactMocks}
        groupMocks={groupMocks}
      />
      <StyledChatWindow>{chatLog}</StyledChatWindow>

      {activeChat != "" && (
        <NewMessagesForm
          handleSubmit={handleSubmit}
          name="newMessages"
          newMessage={newMessage}
          handleChange={handleChange}
        />
      )}
    </StyledChatSpace>
  );
};

export default chatSpace;
