import styled from "styled-components";

const StyledChatInfo = styled.section`
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    flex-direction: row;
  }

  button {
    width: 15px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: white;
    padding: 20px;
    border: none;
  }

  button:hover {
    cursor: pointer;
  }

  button i {
    font-size: 1.2rem;
  }
`;

export { StyledChatInfo };
