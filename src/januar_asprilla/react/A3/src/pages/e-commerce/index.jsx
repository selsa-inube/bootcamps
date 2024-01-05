import {
  BackgroundContainer,
  EcommerceContainer,
  IconsContainer,
  Title,
  TextTitle,
  ContainerProduct,
  OfferContainer,
  PriceContainer,
  PercentContainer,
} from "./StiledEcommerce";
import { Logocard, Iconcard } from "./Components/imagesCard";
import { InfoCard } from "./Components/file";
import { Discounts } from "./Components/buttonContainer";
import { Transaction } from "./Components/mensajeTransition";

function EcommerceCard() {
  const hasBorder = true;
  const hasPadding = true;
  const hasGap = true;

  return (
    <BackgroundContainer>
      <EcommerceContainer>
        <IconsContainer>
          <Logocard src="images.jpeg" alt="Logo de marca" size="large" />
          <Iconcard className="fa-solid fa-xmark" />
        </IconsContainer>
        <Title>Make an offer</Title>
        <TextTitle>
          Submit your offer to the shop and wait for a response
        </TextTitle>
        <ContainerProduct hasBorder={hasBorder} size="large">
          <Logocard src="macbook.jpeg" alt="Imagen de macbook" size="small" />
          <InfoCard
            title="MacBook Pro 16 `M3 12-Core CPU 18-CoreGPU 36/512 GB Space Black"
            text="Ships from: "
            link="https://www.apple.com"
            dinner="$5,200"
            shipping="+49 Shipping"
          />
        </ContainerProduct>
        <OfferContainer>Your Offer</OfferContainer>
        <ContainerProduct hasPadding={hasPadding} hasGap={hasGap} size="medium">
          <PriceContainer
            className="fa fa-usd"
            aria-hidden="true"
          ></PriceContainer>
          <InfoCard
            size="large"
            title="4800.00"
            pais="AUD"
            shipping="+49 Shipping"
          />
        </ContainerProduct>
        <PercentContainer>
          <Discounts number="5" off="OFF" />
          <Discounts number="10" off="OFF" />
          <Discounts number="15" off="OFF" />
        </PercentContainer>
        <ContainerProduct hasBorder={hasBorder} size="small">
          <Transaction />
        </ContainerProduct>
      </EcommerceContainer>
    </BackgroundContainer>
  );
}

export default EcommerceCard;
