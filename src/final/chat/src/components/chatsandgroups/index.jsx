import {
  StiledImg,
  StyledContainerButton,
  StyledUser,
  StyledStatus,
  StiledContainerTex,
} from "./styles";
function Contact({ user, setActiveChat, activeChat = "c00002" }) {
  return (
    <StyledContainerButton
      onClick={() => setActiveChat(user.id)}
      $backroundColor={activeChat === user.id ? "#cafbff" : "transparent"}
    >
      <StiledImg src={user.avatar} alt="image user" />
      <StiledContainerTex>
        <StyledUser>{user.name}</StyledUser>
        <StyledStatus>{user.status}</StyledStatus>
      </StiledContainerTex>
    </StyledContainerButton>
  );
}
export { Contact };
