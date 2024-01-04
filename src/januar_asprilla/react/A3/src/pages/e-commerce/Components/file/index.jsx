import {
  StyleTitle,
  StyledText,
  StyledContainerOne,
  StyledContainerTwo,
  StyledShipping,
  StyledMoney,
  StyledIcon,
  StyledLink,
  StyledPais,
  StyledContainerPais,
  StyledImag,
  StyledSeleccion,
} from "./styled";
function InfoCard(props) {
  const { title, text, money, shipping, link, pais, size = "small" } = props;

  return (
    <>
      <StyledContainerOne size={size}>
        <StyleTitle size={size}>{title}</StyleTitle>
        <StyledText>
          <StyledIcon className="fa-solid fa-truck" size={size}></StyledIcon>
          {text}
          <StyledLink href={link} target="_blank" size={size}>
            BrunksWick East, Australia
          </StyledLink>
          <StyledContainerPais size={size}>
            <StyledImag src="pais.png" alt="New Zeland" />
            <StyledPais>{pais}</StyledPais>
            <StyledSeleccion
              className="fa fa-angle-down"
              aria-hidden="true"
            ></StyledSeleccion>
          </StyledContainerPais>
        </StyledText>
      </StyledContainerOne>
      <StyledContainerTwo>
        <StyledMoney>{money}</StyledMoney>
        <StyledShipping size={size}>{shipping}</StyledShipping>
      </StyledContainerTwo>
    </>
  );
}

export { InfoCard };
