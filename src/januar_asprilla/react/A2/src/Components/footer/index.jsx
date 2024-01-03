import { FooterContainer, FooterHeader, InforFooter } from "./StyledFooter.js";
import { DateContainer, ListNav } from "../header/StyledHeader";
import { TextDate } from "../textDate";
import { ItemList } from "../itemList";
import { ButtonFooter } from "../button";
import { CardInfo } from "./cardstyledComponents.jsx";

const PinkColor = "#c82b43";
const GreenColor = "#37733d";
const BlackColor = "#000";

const CardInformation = [
  {
    id: 1,
    label: "Dow Jones mini",
    number: "- 40.00",
    value: "24394.00 -0.51%",
    clock: "7:13 AM",
    background: PinkColor,
  },
  {
    id: 2,
    label: "Nikkei 225 Future",
    number: "+ 40.00",
    value: "20580.00 + 0.19%",
    clock: "7:17 AM",
    background: GreenColor,
  },
  {
    id: 3,
    label: "EUR - USD",
    number: "+ 0.0034",
    value: "1.0994 + 0.13%",
    clock: "7:30 AM",
    background: GreenColor,
  },
  {
    id: 4,
    label: "FUSE 100",
    number: "- 28.85",
    value: "24394.00 -0.48%",
    clock: "7:41 AM",
    background: PinkColor,
  },
  {
    id: 5,
    label: "S&P 500 Mini",
    number: "0.00",
    value: "2956.00 0%",
    clock: "7:52 AM",
    background: BlackColor,
  },
  {
    id: 6,
    label: "WTI Crude",
    number: "- 0.66",
    value: "34.10 -0.28%",
    clock: "7:59 AM",
    background: PinkColor,
  },
];

const items = [
  { id: 1, label: "Features" },
  { id: 2, label: "Americas" },
  { id: 3, label: "Europe" },
  { id: 4, label: "Asia" },
  { id: 5, label: "Commodities" },
];
function Footer() {
  return (
    <FooterContainer>
      <FooterHeader>
        <DateContainer>
          <TextDate label="MARKET SNAPSHQT" shape={true} size={true} />
          <TextDate label="6:07 A.M" />
        </DateContainer>
        <ListNav>
          {items.map((item) => (
            <ItemList key={item.id} href="#" label={item.label} />
          ))}
        </ListNav>
        <ButtonFooter label={"FULL MARKET OVERVIEW"} />
      </FooterHeader>
      <InforFooter>
        {CardInformation.map((data) => {
          return <CardInfo key={data.id} {...data} />;
        })}
      </InforFooter>
    </FooterContainer>
  );
}

export { Footer };
