import styled from "styled-components";

const StyledChatSpace = styled.section`
  grid-column: 2/3;
  grid-row: 2/4;
`;

const StyledChatWindow = styled.section`
  background: #f5f5f5;
  overflow-y: auto;
  height: calc(100% - 140px);
  padding-top: 20px;
`;

const MyMessage = styled.div`
  background: var(--purple-col);
  color: white;
  border-radius: 15px 15px 0px 15px;
  width: 60%;
  margin: 5px;
  padding-right: 20px;
  position: relative;
  left: calc(35% - 15px);
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: end;
  line-height: 1.5em;
  padding-top: 10px;
  padding-bottom: 10px;

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

const StyledWwriteNewMessage = styled(StyledDateMessage)`
  font-size: 1rem;
`;

const OtherMessage = styled(MyMessage)`
  background: white;
  border-radius: 15px 15px 15px 0px;
  color: black;
  left: 15px;
  justify-content: space-between;

  padding-right: 15px;
  padding-left: 15px;
  > p {
    text-align: left;
  }
  > i {
    color: var(--purple-col);
    font-size: 1.5rem;
  }
`;

export {
  StyledChatSpace,
  StyledChatWindow,
  MyMessage,
  OtherMessage,
  StyledDateMessage,
  StyledWwriteNewMessage,
};
