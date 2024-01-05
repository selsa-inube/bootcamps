import styled from "styled-components";

const StyledContainerButton = styled.button`
  display: grid;
  border: solid transparent 1px;
  grid-template-columns: auto 1fr;
  gap: 10px;
  background-color: ${({ $backroundColor }) => $backroundColor || "white"};
  padding: 15px 0 15px 10px;
  width: 100%;
  text-align: left;

  &:hover {
    cursor: pointer;
    border: solid gray 1px;
  }
`;

const StiledImg = styled.img`
  width: 45px;
  border-radius: 50%;
`;

const StyledUser = styled.p`
  font-size: 20px;
  font-weight: 600;
`;

const StyledStatus = styled.p`
  font-size: 14px;
  color: #7d7d7d;
  font-weight: lighter;
`;

const StiledContainerTex = styled.div`
  display: grid;
  grid-template-rows: repeat(2, auto);
`;

export {
  StiledImg,
  StyledContainerButton,
  StyledUser,
  StyledStatus,
  StiledContainerTex,
};
