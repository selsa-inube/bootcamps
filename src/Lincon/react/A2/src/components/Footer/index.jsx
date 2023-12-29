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
import {
  CartContainer,
  CartTitle,
  ParagraphTitle,
  NumTitle,
  ParagraphTitleTwo,
  ParagraphTitleClock,
} from "../ContainerTarjeta";

const navItemsFooter = [
  { link: "#", label: "Futures" },
  { link: "#", label: "Americas" },
  { link: "#", label: "Europe" },
  { link: "#", label: "Asia" },
  { link: "#", label: "Commodities" },
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
        <CartContainer background={"#ca485b"}>
          <CartTitle background={"#ca485b"}>
            <ParagraphTitle label={"Dow Jones mini"} background={"#ca485b"} />
            <NumTitle label={"-60.00"} background={"#ca485b"} />
          </CartTitle>
          <ParagraphTitleTwo
            background={"#ca485b"}
            label={" 24394.00   -0.51%"}
          />
          <CartTitle>
            <i className="fa-solid fa-clock"></i>
            <ParagraphTitleClock label={" 7:13 AM"} background={"#ca485b"} />
          </CartTitle>
        </CartContainer>
        <CartContainer background={" #5c8d5d"}>
          <CartTitle background={" #5c8d5d"}>
            <ParagraphTitle
              label={"Nikkel 225 Future"}
              background={" #5c8d5d"}
            />
            <NumTitle label={"+40.00"} background={" #5c8d5d"} />
          </CartTitle>
          <ParagraphTitleTwo
            background={" #5c8d5d"}
            label={" 20580.00 +0.19%"}
          />
          <CartTitle>
            <i className="fa-solid fa-clock"></i>
            <ParagraphTitleClock label={" 7:17 AM"} background={" #5c8d5d"} />
          </CartTitle>
        </CartContainer>
        <CartContainer background={" #5c8d5d"}>
          <CartTitle background={" #5c8d5d"}>
            <ParagraphTitle label={"EUR-USD"} background={" #5c8d5d"} />
            <NumTitle label={"-0.0034"} background={" #5c8d5d"} />
          </CartTitle>
          <ParagraphTitleTwo background={" #5c8d5d"} label={" 1.0994 +0.13%"} />
          <CartTitle>
            <i className="fa-solid fa-clock"></i>
            <ParagraphTitleClock label={"7:39 AM"} background={" #5c8d5d"} />
          </CartTitle>
        </CartContainer>
        <CartContainer background={"#ca485b"}>
          <CartTitle background={"#ca485b"}>
            <ParagraphTitle label={"FTSE 100"} background={"#ca485b"} />
            <NumTitle label={"-20.05"} background={"#ca485b"} />
          </CartTitle>
          <ParagraphTitleTwo
            background={"#ca485b"}
            label={" 24394.00   -0.48%"}
          />
          <CartTitle>
            <i className="fa-solid fa-clock"></i>
            <ParagraphTitleClock label={"7:41 AM"} background={"#ca485b"} />
          </CartTitle>
        </CartContainer>
        <CartContainer background={"#000000"}>
          <CartTitle background={"#000000"}>
            <ParagraphTitle label={"S&P 500 Mini"} background={"#000000"} />
            <NumTitle label={"0.00"} background={"#000000"} />
          </CartTitle>
          <ParagraphTitleTwo background={"#000000"} label={" 2956.00  0%"} />
          <CartTitle>
            <i className="fa-solid fa-clock"></i>
            <ParagraphTitleClock label={"7:52 AM"} background={"#000000"} />
          </CartTitle>
        </CartContainer>
        <CartContainer background={"#ca485b"}>
          <CartTitle background={"#ca485b"}>
            <ParagraphTitle label={"WTI Crude"} background={"#ca485b"} />
            <NumTitle label={"-0.66"} background={"#ca485b"} />
          </CartTitle>
          <ParagraphTitleTwo background={"#ca485b"} label={" 34.10   -0.28%"} />
          <CartTitle>
            <i className="fa-solid fa-clock"></i>
            <ParagraphTitleClock label={" 7:59 AM"} background={"#ca485b"} />
          </CartTitle>
        </CartContainer>
      </StyledContainerTarget>
    </StyledFooter>
  );
}
export { Footer };
