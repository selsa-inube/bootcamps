import styled from "styled-components";

const StyledTitle = styled.h2`
  color: #000;
  font-size: ${(props) => (props.isLarge ? "19px" : "16px")};
`;

const StyledSubtitle = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.rowDirection ? "row" : "column")};
  gap: 5px;
  color: #b9b4b4;
`;

const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 50px;
  width: 100%;
`;

const StyledContainerOne = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledIcon = styled.i`
  color: #b9b4b4;
  cursor: pointer;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: #07a3ff;
`;

const StyledName = styled.p``;

export {
  StyledTitle,
  StyledSubtitle,
  StyledMain,
  StyledContainerOne,
  StyledIcon,
  StyledLink,
  StyledName,
};
