import styled from "styled-components";

const StyledChatSpace = styled.section`
  grid-column: 2/3;
  grid-row: 2/4;
`;

const StyledChatWindow = styled.section`
  background: #f5f5f5;
  overflow: auto;
  height: calc(100% - 120px);
`;

const MyMessage = styled.div`
  background: var(--purple-col);
  color: white;
  border-radius: 10px 10px 0px 10px;
  width: 60%;
  margin: 5px;
  padding-right: 20px;
  position: relative;
  left: calc(35% - 15px);
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: end;

  > p {
    text-align: right;
    width: 80%;
  }
`;

const StyledDateMessage = styled.p`
  color: #988f8f;
  text-align: center;
  font-size: 0.8rem;
`;

const OtherMessage = styled(MyMessage)`
  background: white;
  border-radius: 10px 10px 10px 0px;
  color: black;
  left: 15px;
  justify-content: space-between;

  padding-right: 0px;
  padding-left: 15px;
  > p {
    text-align: left;
  }
  > i {
    color: var(--purple-col);
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 20px;

  > button {
    background-color: var(--purple-col);
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  > button i {
    color: white;
    font-size: 1.3rem;
  }
  div {
    width: calc(100% - 50px);
    background-color: #f9f9f9;
    border-radius: 40px;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  div input[type="text"] {
    min-width: 300px;
    width: calc(100% - 80px);
    border: none;
    background-color: transparent;
    line-height: 2em;
    padding-left: 5px;
    color: #000;
  }
  div button {
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    height: 30px;
    margin: 0 5px;
  }
  div button i {
    padding: 0 auto;
    font-size: 0.8rem;
  }

  div button:first-of-type i {
    color: #756a6a;
  }
`;

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
    padding: 15px;
    border: none;
  }

  button i {
    font-size: 0.8rem;
  }
`;

export {
  StyledChatSpace,
  StyledChatWindow,
  MyMessage,
  OtherMessage,
  StyledForm,
  StyledChatInfo,
  StyledDateMessage,
};
