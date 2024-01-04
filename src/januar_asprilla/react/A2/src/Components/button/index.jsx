import {
  ButtonStyled,
  ButtonNotice,
  CategoryStyled,
  FooterExtras,
  CategoryContainers,
  TitleNoticeCenter,
  NoticeRightContainer,
  InfoNoticeContainer,
  TitleNoticeRight,
  InformationNoticeRight,
} from "./StyledButton";
import { PreviwImage } from "../ImagensNotice";

function Button(props) {
  const { label, border = false } = props;
  return <ButtonStyled border={border}>{label}</ButtonStyled>;
}
function NoticeExtra(props) {
  const { label } = props;
  return <ButtonNotice>{label}</ButtonNotice>;
}

function Categorys(props) {
  const { label, color = false, background = false } = props;
  return (
    <CategoryStyled color={color} background={background}>
      {label}
    </CategoryStyled>
  );
}
function ButtonFooter(props) {
  const { label } = props;
  return <FooterExtras>{label}</FooterExtras>;
}
function LastNewInfor({ label, date, Text, labelButton }) {
  return (
    <>
      <CategoryContainers>
        <Categorys color={true} background={true} label={label} />
        <Categorys color={false} background={false} label={date} />
      </CategoryContainers>
      <TitleNoticeCenter>{Text}</TitleNoticeCenter>
      <ButtonNotice>{labelButton}</ButtonNotice>
    </>
  );
}

function FastForwardInfo({ tittle, text, image, alt }) {
  return (
    <NoticeRightContainer>
      <InfoNoticeContainer>
        <TitleNoticeRight>{tittle}</TitleNoticeRight>
        <InformationNoticeRight>{text}</InformationNoticeRight>
      </InfoNoticeContainer>
      <PreviwImage src={image} alt={alt} />
    </NoticeRightContainer>
  );
}

export {
  Button,
  LastNewInfor,
  Categorys,
  ButtonFooter,
  NoticeExtra,
  FastForwardInfo,
};
