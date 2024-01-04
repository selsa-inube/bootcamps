import { StyledChatInfo } from "./styles.js";
import { ContactInfo } from "../contactInfo/index.jsx";

const ChatInfo = ({ activeChat, setActiveChat, contactMocks, groupMocks }) => {
  return (
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
        <button onClick={() => setActiveChat("")}>
          <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
        </button>
      </div>
    </StyledChatInfo>
  );
};

export { ChatInfo };
