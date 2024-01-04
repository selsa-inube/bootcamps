import {
  BackgroundContainer,
  EcommerceContainer,
  IconsContainer,
  Title,
  TextTitle,
  ContainerProduct,
  StyledOffer,
  StyledMoney,
  StyledConatinerPercentage,
} from "./StiledEcommerce";
import { Logocard, Iconcard } from "./Components/imagesCard";
import { InfoCard } from "./Components/file";
import { Button } from "./Components/buttonContainer";
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
            money="$5,200"
            shipping="+49 Shipping"
          />
        </ContainerProduct>
        <StyledOffer>Your Offer</StyledOffer>
        <ContainerProduct hasPadding={hasPadding} hasGap={hasGap} size="medium">
          <StyledMoney className="fa fa-usd" aria-hidden="true"></StyledMoney>
          <InfoCard
            size="large"
            title="4800.00"
            pais="AUD"
            shipping="+49 Shipping"
          />
        </ContainerProduct>
        <StyledConatinerPercentage>
          <Button num="5" off="OFF" />
          <Button num="10" off="OFF" />
          <Button num="15" off="OFF" />
        </StyledConatinerPercentage>
        <ContainerProduct hasBorder={hasBorder} size="small">
          <Transaction />
        </ContainerProduct>
      </EcommerceContainer>
    </BackgroundContainer>
  );
}

export default EcommerceCard;
