import {
  FirstContainer,
  TitleContainer,
  TextContainer,
  IconContainer,
  TextLink,
  SecondContainer,
  DinnerContainer,
  ShippingContainer,
  StyledPais,
  StyledContainerPais,
  StyledImage,
  IconSelection,
} from "./styled";
function InfoCard(props) {
  const { title, text, dinner, shipping, link, pais, size = "small" } = props;

  return (
    <>
      <FirstContainer size={size}>
        <TitleContainer size={size}>{title}</TitleContainer>
        <TextContainer>
          <IconContainer
            className="fa-solid fa-truck"
            size={size}
          ></IconContainer>
          {text}
          <TextLink href={link} target="_blank" size={size}>
            BrunksWick East, Australia
          </TextLink>
          <StyledContainerPais size={size}>
            <StyledImage src="pais.png" alt="New Zeland" />
            <StyledPais>{pais}</StyledPais>
            <IconSelection
              className="fa fa-angle-down"
              aria-hidden="true"
            ></IconSelection>
          </StyledContainerPais>
        </TextContainer>
      </FirstContainer>
      <SecondContainer>
        <DinnerContainer>{dinner}</DinnerContainer>
        <ShippingContainer size={size}>{shipping}</ShippingContainer>
      </SecondContainer>
    </>
  );
}

export { InfoCard };
