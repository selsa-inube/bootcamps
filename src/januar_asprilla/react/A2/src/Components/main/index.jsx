import {
  HeaderMain,
  MainStyled,
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
} from "./StyledMain";
import { DateContainer, ListNav } from "../header/StyledHeader";
import { ItemList } from "../itemList";
import { ImagensNotice } from "../ImagensNotice";
import {
  LastNewInfor,
  Categorys,
  NoticeExtra,
  FastForwardInfo,
} from "../button";
import { CategoryContainers } from "../button/StyledButton";
const Sectionitems = [
  { id: 1, label: "Tech" },
  { id: 2, label: "Econ" },
  { id: 3, label: "Media" },
  { id: 4, label: "Money" },
  { id: 5, label: "dealBook" },
];

const NoticeCenter = [
  {
    id: 1,
    label: "THE UPSHOT",
    date: "May 19, 2020",
    Text: "A Wave of Small Business Closures Is on the Way. Can Washington Stop It?",
    labelButton: "Continue Reading",
  },
  {
    id: 2,
    label: "NEWS ANALYSH",
    date: "May 19, 2020",
    Text: "Coronavirus Shut Down the 'Experience Economy.' Can It Come Back?",
    labelButton: "Continue Reading",
  },
];

const NoticeRight = [
  {
    id: 1,
    tittle:
      "Another Grim Tally of U.S. Unemployment Is Expected: Live Businnes Updates",
    text: "Live Stock Market New During thr Coronavirus Pandemic",
    image: "notice1.jpg",
    alt: "ciudad solitaria en tiempos de pandemia",
  },
  {
    id: 2,
    tittle: "How the 'Plandemic' Movie and Its Falsehoods Spread Widely Online",
    text: "Conspiracy theorses about the pandemic have gained more....",
    image: "notice2.jpg",
    alt: "Estableimiento solitario por la pandemia",
  },
  {
    id: 3,
    tittle:
      "Joe Rogan Strikes an Exclusive, Multlyear Deal With Spotify Premium",
    text: "The deal with Jose Rogan, a provocative podcant host writh...",
    image: "notice3.jpg",
    alt: "Joe Rogan",
  },
];
function Main() {
  return (
    <MainStyled>
      <HeaderMain>
        <DateContainer>
          <TitleHeaderMain>Business</TitleHeaderMain>
        </DateContainer>
        <ListNav>
          {Sectionitems.map((item) => (
            <ItemList key={item.id} href="#" label={item.label} />
          ))}
        </ListNav>
      </HeaderMain>
      <NoticeContainer>
        <NoticeSectionsLetf>
          <ImagensNotice src="image_notice.gif" alt="Imagen Random" />
          <CategoryContainers>
            <Categorys color={true} background={true} label="TECH FEX" />
            <Categorys color={false} background={false} label="May 20, 2020" />
          </CategoryContainers>
          <TitleNoticeLeft>
            Everything You Need to Know About Slow Internet speeds
          </TitleNoticeLeft>
          <InformationNotice>
            Our Crummy connections are the biggest tech headache in the
            pandemic. Here's a comprehensive guide to what to do about them
          </InformationNotice>
          <NoticeExtra label="Continue Reading" />
        </NoticeSectionsLetf>
        <NoticeSectionsCenter>
          <Captionections>Lastest News</Captionections>
          {NoticeCenter.map((data) => {
            return <LastNewInfor key={data.id} {...data} />;
          })}

          <Points>
            <PointsList className="fa-solid fa-circle" />
            <PointsList className="fa-solid fa-circle" />
            <PointsList className="fa-solid fa-circle" />
          </Points>
        </NoticeSectionsCenter>
        <NoticeSectionsRight>
          <Captionections>Fast Forward</Captionections>
          {NoticeRight.map((data) => {
            return <FastForwardInfo key={data.id} {...data} />;
          })}
          <NoticeExtra label="Show All" />
        </NoticeSectionsRight>
      </NoticeContainer>
    </MainStyled>
  );
}

export { Main };
