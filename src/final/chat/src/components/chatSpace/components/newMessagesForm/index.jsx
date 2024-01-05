import { StyledForm } from "./styles.js";

const NewMessagesForm = ({
  handleSubmit,
  name,
  newMessage,
  handleChange,
  activeChat,
}) => {
  return (
    <StyledForm name={name} onSubmit={handleSubmit}>
      <div>
        <button>
          <i className="fa fa-paperclip" aria-hidden="true"></i>
        </button>
        <input
          type="text"
          id="new-message"
          placeholder="Type a message"
          onChange={handleChange}
        />
        <button
          type="submit"
          disabled={newMessage.length === 0 || activeChat === ""}
        >
          <i className="fa fa-paper-plane-o" aria-hidden="true"></i>
        </button>
      </div>
      <button onClick={() => alert("Recording...")}>
        <i className="fa fa-microphone" aria-hidden="true"></i>
      </button>
    </StyledForm>
  );
};

export { NewMessagesForm };
