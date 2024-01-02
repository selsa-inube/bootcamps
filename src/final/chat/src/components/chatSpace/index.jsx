import {
  StyledChatSpace,
  StyledChatWindow,
  MyMessage,
  OtherMessage,
  StyledForm,
  StyledChatInfo,
  StyledContactInfo,
  StyledDateMessage,
  StyledContactStamp,
  StyledContactStampYou,
} from "./styles.js";
import { useContext, useState, useEffect } from "react";
import { AppContext } from "../../context";
import { DataContext } from "../../context/data.mocks.jsx";

const ContactInfo = ({ activeChat, contactMocks, groupMocks }) => {
  let chatSource = {};
  if (activeChat[0] === "g") {
    chatSource = groupMocks.filter((group) => group.id === activeChat)[0];
  } else if (activeChat[0] === "c") {
    chatSource = contactMocks.filter((contact) => contact.id === activeChat)[0];
  }

  return (
    <StyledContactInfo>
      <img src={chatSource.avatar} alt="Chat Pic" />
      <p>{chatSource.name}</p>
      <p>MinutesAgo</p>
    </StyledContactInfo>
  );
};

const ContactStamp = ({ contactID, contactMocks, hour, you }) => {
  let contactInfo = contactMocks.filter(
    (contact) => contact.id === contactID
  )[0];
  let contatLog = you ? (
    <StyledContactStampYou>
      <div>
        <img src={contactInfo.avatar} alt="Chat Pic" />
        <p>you</p>
      </div>
      <p>{hour}</p>
    </StyledContactStampYou>
  ) : (
    <StyledContactStamp>
      <div>
        <img src={contactInfo.avatar} alt="Chat Pic" />
        <p>{contactInfo.name}</p>
      </div>
      <p>{hour}</p>
    </StyledContactStamp>
  );
  return contatLog;
};

const chatSpace = ({ activeChat, setActiveChat }) => {
  const [newMessage, setNewMessage] = useState("");
  const [newMessageError, setNewMessageError] = useState("");
  const { authUser, darkMode, language } = useContext(AppContext);
  const { chatMocks, contactMocks, groupMocks } = useContext(DataContext);

  // Chat init
  const chatLog = [];

  const chatLogCalculation = () => {
    let chatMocksFiltered = chatMocks.filter(
      (chat) =>
        (chat.from === authUser.id && chat.to === activeChat) ||
        (chat.from === activeChat && chat.to === authUser.id)
    );

    chatMocksFiltered.sort(function (chat1, chat2) {
      return chat1.timeStamp - chat2.timeStamp;
    });
    chatLog.push(
      <StyledDateMessage>
        {chatMocksFiltered[0].timeStamp.toString().slice(0, 15)}
      </StyledDateMessage>
    );

    let day = new Date(chatMocksFiltered[0].timeStamp.toString().slice(0, 15));
    let contactId = chatMocksFiltered[0].from;

    for (let i = 0; i < chatMocksFiltered.length; i++) {
      let chat = chatMocksFiltered[i];

      if (new Date(chat.timeStamp.toString().slice(0, 15)) - day > 0) {
        day = new Date(chat.timeStamp.toString().slice(0, 15));
        chatLog.push(
          <StyledDateMessage>
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
      } else if (chat.from === activeChat) {
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
            contactID={chatMocksFiltered[i].from}
            contactMocks={contactMocks}
            hour={chatMocksFiltered[i].timeStamp.toString().slice(16, 21)}
            you={chatMocksFiltered[i].from === authUser.id}
          />
        );
        contactId = chatMocksFiltered[i + 1].from;
      }
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
      <StyledChatInfo>
        <ContactInfo
          activeChat={activeChat}
          contactMocks={contactMocks}
          groupMocks={groupMocks}
        />
        <div>
          <button onClick={() => alert("Calling....")}>
            <i className="fa fa-phone" aria-hidden="true"></i>
          </button>
          <button onClick={() => alert("Calling....")}>
            <i className="fa fa-video-camera" aria-hidden="true"></i>
          </button>
          <button onClick={() => alert("More info")}>
            <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
          </button>
        </div>
      </StyledChatInfo>
      <StyledChatWindow>{chatLog}</StyledChatWindow>

      <StyledForm name="newMessages" onSubmit={handleSubmit}>
        <div>
          <button>
            <i className="fa fa-paperclip" aria-hidden="true"></i>
          </button>
          <input
            type="text"
            id="new-message"
            placeholder="Type a message"
            onChange={handleChange}
          ></input>
          <button type="submit" disabled={newMessage.length === 0}>
            <i className="fa fa-paper-plane-o" aria-hidden="true"></i>
          </button>
        </div>
        <button onClick={() => alert("Recording...")}>
          <i className="fa fa-microphone" aria-hidden="true"></i>
        </button>
      </StyledForm>
    </StyledChatSpace>
  );
};

export default chatSpace;
