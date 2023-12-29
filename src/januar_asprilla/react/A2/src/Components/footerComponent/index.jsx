import { FooterContainer, FooterHeader, InforFooter } from "./footerStyle.js";
import { DateContainer, ListNav } from "../headerComponent/headerStyle";
import { TextDate } from "../textDate";
import { ItemList } from "../itemList";
import { ButtonFooter } from "../buttonComponents";
import {
  TitleCards,
  TitleInfoExtra,
  InfoPreviw,
  IconInfoExtra,
} from "../cardFooterComponent";
import { BarImage } from "../ImagensNoticeComponent";
import {
  ContainerCard,
  ContainerInfoCard,
  ContainerTitleCard,
  ContainerIcon,
} from "./cardstyledComponents";

function Footer() {
  return (
    <FooterContainer>
      <FooterHeader>
        <DateContainer>
          <TextDate label="MARKET SNAPSHQT" shape={true} size={true} />
          <TextDate label="6:07 A.M" />
        </DateContainer>
        <ListNav>
          <ItemList href="#" label="Tech" />
          <ItemList href="#" label="Econ" />
          <ItemList href="#" label="Media" />
          <ItemList href="#" label="Money" />
          <ItemList href="#" label="dealBook" />
        </ListNav>
        <ButtonFooter label={"FULL MARKET OVERVIEW"} />
      </FooterHeader>
      <InforFooter>
        <ContainerCard background={"#c82b43"}>
          <ContainerInfoCard background={"#c82b43"}>
            <ContainerTitleCard background={"#c82b43"}>
              <TitleCards background={"#c82b43"} label="Dow Jones mini" />
              <TitleInfoExtra background={"#c82b43"} label="- 40.00" />
            </ContainerTitleCard>
            <InfoPreviw background={"#c82b43"} label="24394.00 -0.51%" />
            <ContainerIcon background={"#c82b43"} src="reloj.png" alt="Reloj" />
            <IconInfoExtra background={"#c82b43"} label="7:13 AM" />
          </ContainerInfoCard>
          <BarImage
            background={"#c82b43"}
            src="barra.png"
            alt="Barra de datos"
          />
        </ContainerCard>
        <ContainerCard background={"#37733d"}>
          <ContainerInfoCard background={"#37733d"}>
            <ContainerTitleCard background={"#37733d"}>
              <TitleCards background={"#37733d"} label="Nikkei 225 Future" />
              <TitleInfoExtra background={"#37733d"} label="+ 40.00" />
            </ContainerTitleCard>
            <InfoPreviw background={"#37733d"} label="20580.00 +0.19%" />
            <ContainerIcon background={"#37733d"} src="reloj.png" alt="Reloj" />
            <IconInfoExtra background={"#37733d"} label="7:17 AM" />
          </ContainerInfoCard>
          <BarImage
            background={"#37733d"}
            src="barra.png"
            alt="Barra de datos"
          />
        </ContainerCard>
        <ContainerCard background={"#37733d"}>
          <ContainerInfoCard background={"#37733d"}>
            <ContainerTitleCard background={"#37733d"}>
              <TitleCards background={"#37733d"} label="EUR - USD" />
              <TitleInfoExtra background={"#37733d"} label="+ 0.0034" />
            </ContainerTitleCard>
            <InfoPreviw background={"#37733d"} label="1.0994 + 0.13%" />
            <ContainerIcon background={"#37733d"} src="reloj.png" alt="Reloj" />
            <IconInfoExtra background={"#37733d"} label="7:30 AM" />
          </ContainerInfoCard>
          <BarImage
            background={"#37733d"}
            src="barra.png"
            alt="Barra de datos"
          />
        </ContainerCard>
        <ContainerCard background={"#c82b43"}>
          <ContainerInfoCard background={"#c82b43"}>
            <ContainerTitleCard background={"#c82b43"}>
              <TitleCards background={"#c82b43"} label="FUSE 100" />
              <TitleInfoExtra background={"#c82b43"} label="- 28.85" />
            </ContainerTitleCard>
            <InfoPreviw background={"#c82b43"} label="24394.00 -0.48%" />
            <ContainerIcon background={"#c82b43"} src="reloj.png" alt="Reloj" />
            <IconInfoExtra background={"#c82b43"} label="7:41 AM" />
          </ContainerInfoCard>
          <BarImage
            background={"#c82b43"}
            src="barra.png"
            alt="Barra de datos"
          />
        </ContainerCard>
        <ContainerCard background={"black"}>
          <ContainerInfoCard background={"black"}>
            <ContainerTitleCard background={"black"}>
              <TitleCards background={"black"} label="S&P 500 Mini" />
              <TitleInfoExtra background={"black"} label="0.00" />
            </ContainerTitleCard>
            <InfoPreviw background={"black"} label="2956.00 0%" />
            <ContainerIcon background={"black"} src="reloj.png" alt="Reloj" />
            <IconInfoExtra background={"black"} label="7:52 AM" />
          </ContainerInfoCard>
          <BarImage background={"black"} src="barra.png" alt="Barra de datos" />
        </ContainerCard>
        <ContainerCard background={"#c82b43"}>
          <ContainerInfoCard background={"#c82b43"}>
            <ContainerTitleCard background={"#c82b43"}>
              <TitleCards background={"#c82b43"} label="WTI Crude" />
              <TitleInfoExtra background={"#c82b43"} label="- 0.66" />
            </ContainerTitleCard>
            <InfoPreviw background={"#c82b43"} label="34.10 -0.28%" />
            <ContainerIcon background={"#c82b43"} src="reloj.png" alt="Reloj" />
            <IconInfoExtra background={"#c82b43"} label="7:59 AM" />
          </ContainerInfoCard>
          <BarImage
            background={"#c82b43"}
            src="barra.png"
            alt="Barra de datos"
          />
        </ContainerCard>
      </InforFooter>
    </FooterContainer>
  );
}

export { Footer };
