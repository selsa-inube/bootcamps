import { StyledContactStampYou, StyledContactStamp } from "./styles.js";

const ContactStamp = ({ contactID, contactMocks, hour, you }) => {
  let contactInfo = contactMocks.filter(
    (contact) => contact.id === contactID
  )[0];
  let contatLog = you ? (
    <StyledContactStampYou>
      <div>
        <img src={contactInfo.avatar} alt="Chat Pic" />
        <p>You</p>
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

export { ContactStamp };
