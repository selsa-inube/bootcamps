import styled from "styled-components";

const MainStyled = styled.main`
  padding: 0 1rem;
`;
const HeaderMain = styled.header`
  height: 28px;
  align-items: baseline;
  display: grid;
  grid-template-columns: auto 1fr 2fr;
  flex-wrap: wrap;
`;
const TitleHeaderMain = styled.p`
  font-size: 25px;
  font-weight: 550;
  font-family: "Times New Roman", Times, serif;
`;

const NoticeContainer = styled.div`
  margin: 20px 35px 20px 0;
  display: grid;
  grid-template-columns: 40% 35% 25%;
`;
const NoticeSectionsLetf = styled.section``;
const NoticeSectionsCenter = styled.section`
  padding: 0px 30px;
  border-left: 1px solid rgb(184, 184, 184);
  border-right: 1px solid rgb(184, 184, 184);
`;
const NoticeSectionsRight = styled.section`
  padding-left: 20px;
`;
const TitleNoticeLeft = styled.h1`
  max-width: 400px;
  margin-bottom: 20px;
  font-family: "Times New Roman", Times, serif;
  font-size: 26px;
  font-weight: bolder;
  line-height: 35px;
`;
const InformationNotice = styled.p`
  font-family: "Times New Roman", Times, serif;
  font-size: 13.5px;
  color: gray;
  line-height: 20px;
  max-width: 400px;
`;
const Captionections = styled.h2`
  font-family: "Times New Roman", Times, serif;
  font-size: 17px;
  margin-bottom: 20px;
`;

const Points = styled.ul`
  margin-top: 25px;
  display: flex;
  font-size: 7px;
  gap: 10px;
  color: rgb(184, 184, 184);
`;
const PointsList = styled.i`
  border: 2px solid transparent;
  &:hover {
    border: 2px solid black;
    border-radius: 50%;
  }
`;

export {
  MainStyled,
  HeaderMain,
  TitleHeaderMain,
  NoticeContainer,
  NoticeSectionsLetf,
  TitleNoticeLeft,
  InformationNotice,
  NoticeSectionsCenter,
  NoticeSectionsRight,
  Captionections,
  Points,
  PointsList,
};
