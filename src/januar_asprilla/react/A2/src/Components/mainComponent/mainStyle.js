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
const CategoryContainer = styled.div`
  margin: 15px 0;
  display: grid;
  grid-template-columns: auto auto 1fr;
  gap: 10px;
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
const TitleNoticeCenter = styled.h3`
  font-family: "Times New Roman", Times, serif;
  max-width: 400px;
  font-size: 20px;
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
  MainStyled,
  HeaderMain,
  TitleHeaderMain,
  NoticeContainer,
  NoticeSectionsLetf,
  CategoryContainer,
  TitleNoticeLeft,
  InformationNotice,
  NoticeSectionsCenter,
  NoticeSectionsRight,
  Captionections,
  TitleNoticeCenter,
  Points,
  PointsList,
  NoticeRightContainer,
  InfoNoticeContainer,
  TitleNoticeRight,
  InformationNoticeRight,
};
