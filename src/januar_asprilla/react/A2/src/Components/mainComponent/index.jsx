import {
  HeaderMain,
  MainStyled,
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
} from "./mainStyle";
import { DateContainer, ListNav } from "../headerComponent/headerStyle";
import { ItemList } from "../itemList";
import { ImagensNotice, PreviwImage } from "../ImagensNoticeComponent";
import { NoticeExtra, Categorys } from "../buttonComponents";

function Main() {
  return (
    <MainStyled>
      <HeaderMain>
        <DateContainer>
          <TitleHeaderMain>Business</TitleHeaderMain>
        </DateContainer>
        <ListNav>
          <ItemList href="#" label="Tech" />
          <ItemList href="#" label="Econ" />
          <ItemList href="#" label="Media" />
          <ItemList href="#" label="Money" />
          <ItemList href="#" label="dealBook" />
        </ListNav>
      </HeaderMain>
      <NoticeContainer>
        <NoticeSectionsLetf>
          <ImagensNotice src="image_notice.gif" alt="Imagen Random" />
          <CategoryContainer>
            <Categorys color={true} background={true} label="TECH FEX" />
            <Categorys color={"red"} background={false} label="May 20, 2020" />
          </CategoryContainer>
          <TitleNoticeLeft>
            Everything You Need to Know About Slow Internet speeds
          </TitleNoticeLeft>
          <InformationNotice>
            Our Crummy connections are the biggest tech headache in the
            pandemic. Here's a comprehensive guide to what to do about them
          </InformationNotice>
          <NoticeExtra label={"Continue Reading"} />
        </NoticeSectionsLetf>
        <NoticeSectionsCenter>
          <Captionections>Lastest News</Captionections>
          <CategoryContainer>
            <Categorys color={true} background={true} label="THE UPSHOT" />
            <Categorys color={false} background={false} label="May 19, 2020" />
          </CategoryContainer>
          <TitleNoticeCenter>
            A Wave of Small Business Closures Is on the Way. Can Washington Stop
            It?
          </TitleNoticeCenter>
          <NoticeExtra label={"Continue Reading"} />
          <CategoryContainer>
            <Categorys color={true} background={true} label="NEWS ANALYSH" />
            <Categorys color={false} background={false} label="May 19, 2020" />
          </CategoryContainer>
          <TitleNoticeCenter>
            Coronavirus Shut Down the 'Experience Economy.' Can It Come Back?
          </TitleNoticeCenter>
          <NoticeExtra label={"Continue Reading"} />
          <Points>
            <PointsList className="fa-solid fa-circle" />
            <PointsList className="fa-solid fa-circle" />
            <PointsList className="fa-solid fa-circle" />
          </Points>
        </NoticeSectionsCenter>
        <NoticeSectionsRight>
          <Captionections>Fast Forward</Captionections>
          <NoticeRightContainer>
            <InfoNoticeContainer>
              <TitleNoticeRight>
                Another Grim Tally of U.S. Unemployment Is Expected: Live
                Businnes Updates
              </TitleNoticeRight>
              <InformationNoticeRight>
                Live Stock Market New During thr Coronavirus Pandemic
              </InformationNoticeRight>
            </InfoNoticeContainer>
            <PreviwImage
              src="notice1.jpg"
              alt="ciudad solitaria en tiempos de pandemia"
            />
          </NoticeRightContainer>
          <NoticeRightContainer>
            <InfoNoticeContainer>
              <TitleNoticeRight>
                How the 'Plandemic' Movie and Its Falsehoods Spread Widely
                Online
              </TitleNoticeRight>
              <InformationNoticeRight>
                Conspiracy theorses about the pandemic have gained more....
              </InformationNoticeRight>
            </InfoNoticeContainer>
            <PreviwImage
              src="notice2.jpg"
              alt="Estableimiento solitaario por la pandemia"
            />
          </NoticeRightContainer>
          <NoticeRightContainer>
            <InfoNoticeContainer>
              <TitleNoticeRight>
                Joe Rogan Strikes an Exclusive, Multlyear Deal With Spotify
                Premium
              </TitleNoticeRight>
              <InformationNoticeRight>
                The deal with Jose Rogan, a provocative podcant host writh...
              </InformationNoticeRight>
            </InfoNoticeContainer>
            <PreviwImage src="notice3.jpg" alt="Joe Rogan" />
          </NoticeRightContainer>
          <NoticeExtra label={"Show All"} />
        </NoticeSectionsRight>
      </NoticeContainer>
    </MainStyled>
  );
}

export { Main };
