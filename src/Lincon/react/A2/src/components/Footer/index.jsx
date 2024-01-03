import {
  StyledFooter,
  StyleFooterMain,
  StyleList,
  StyleMarker,
  StyleText,
  StyledContainerTarget,
} from "./styles";
import { Title } from "../Title";
import { Lists } from "../Lists";
import { CartContainer } from "../ContainerTarjeta";
const navItemsFooter = [
  { id: 1, link: "#", label: "Futures" },
  { id: 2, link: "#", label: "Americas" },
  { id: 3, link: "#", label: "Europe" },
  { id: 4, link: "#", label: "Asia" },
  { id: 5, link: "#", label: "Commodities" },
];

const redColor = "#ca485b";
const greenColor = "#5c8d5d";
const blackColor = "#000000";

const cardData = [
  {
    id: 1,
    label: "Dow Jones mini",
    value: "-60.00",
    num: 24394.0,
    percentage: "-0.51%",
    time: "7:13 AM",
    background: redColor,
  },
  {
    id: 2,
    label: "Nikkel 225 Future",
    value: "+40.00",
    percentage: "+0.19%",
    num: 20580.0,
    time: "7:17 AM",
    background: greenColor,
  },
  {
    id: 3,
    label: "EUR-USD",
    value: "-0.0034",
    percentage: "+0.13%",
    num: 1.0994,
    time: "7:39 AM",
    background: greenColor,
  },
  {
    id: 4,
    label: "FTSE 100",
    value: "-20.05 ",
    percentage: "  -0.48%",
    num: 24394.0,
    time: "7:41 AM",
    background: redColor,
  },
  {
    id: 5,
    label: "S&P 500 Mini",
    value: "0.00",
    percentage: "-0.48%",
    num: 2956.0,
    time: "7:52 AM",
    background: blackColor,
  },
  {
    id: 6,
    label: "WTI Crude",
    value: "-0.66",
    percentage: "-0.28%",
    num: 34.1,
    time: "7:59 AM",
    background: redColor,
  },
];

function Footer() {
  const dateInfo = (
    <>
      <li>MARKERT SNAPSHOT</li>
      <li>6:07 A.M</li>
    </>
  );
  return (
    <StyledFooter>
      <StyleFooterMain>
        <StyleList>
          <Title isTrue={true} isGrey={true}>
            {dateInfo}
          </Title>
          <Lists items={navItemsFooter} />
        </StyleList>
        <StyleMarker>
          <StyleText>FULL MARKERT OVERVIEW</StyleText>
          <i class="fa fa-chevron-right" aria-hidden="true"></i>
        </StyleMarker>
      </StyleFooterMain>
      <StyledContainerTarget>
        {cardData.map((data) => (
          <CartContainer key={data.id} {...data} />
        ))}
      </StyledContainerTarget>
    </StyledFooter>
  );
}
export { Footer };
