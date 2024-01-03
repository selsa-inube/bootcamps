import styled from "styled-components";

const ButtonStyled = styled.button`
  text-transform: uppercase;
  font-weight: bolder;
  border: ${(props) =>
    props.border === true ? "1px solid rgb(185, 185, 185)" : "transparent"};
  padding: 10px 20px;
  cursor: pointer;
`;

const ButtonNotice = styled.button`
  color: gray;
  margin-top: 20px;
  background-color: #f3f3f3;
  border: none;
  border-bottom: 1px solid rgb(184, 184, 184);
  padding-bottom: 10px;
  cursor: pointer;
`;
const CategoryStyled = styled.p`
  font-size: 11px;
  padding: 10px 25px;
  background-color: ${(props) =>
    props.background === true ? "black" : "#f6f6f6"};
  color: ${(props) => (props.color === true ? "white" : "black")};
`;

const FooterExtras = styled.button`
  color: gray;
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 12px;
  justify-self: end;
  &:after {
    content: " >";
    font-size: 15px;
    font-weight: bolder;
  }
`;
const CategoryContainers = styled.div`
  margin: 15px 0;
  display: grid;
  grid-template-columns: auto auto 1fr;
  gap: 10px;
`;
const TitleNoticeCenter = styled.h3`
  font-family: "Times New Roman", Times, serif;
  max-width: 400px;
  font-size: 20px;
`;
const NoticeRightContainer = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  gap: 10px;
  margin-bottom: 10px;
`;
const InfoNoticeContainer = styled.div`
  max-width: 250px;
`;
const TitleNoticeRight = styled.h4`
  font-family: "Times New Roman", Times, serif;
  font-size: 17px;
  margin-bottom: 10px;
`;
const InformationNoticeRight = styled.p`
  font-size: 12px;
  color: gray;
`;

export {
  TitleNoticeCenter,
  CategoryContainers,
  ButtonStyled,
  ButtonNotice,
  CategoryStyled,
  FooterExtras,
  NoticeRightContainer,
  InfoNoticeContainer,
  TitleNoticeRight,
  InformationNoticeRight,
};
