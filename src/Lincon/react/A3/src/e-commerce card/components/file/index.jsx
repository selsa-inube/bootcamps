import {
  StyleTitle,
  StyledSubtitle,
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
function File(props) {
  const {
    title,
    subtitle,
    money,
    shipping,
    link,
    pais,
    size = "small",
  } = props;

  return (
    <>
      <StyledContainerOne size={size}>
        <StyleTitle>{title}</StyleTitle>
        <StyledSubtitle>
          <StyledIcon className="fa-solid fa-truck" size={size}></StyledIcon>
          {subtitle}
          <StyledLink href={link} target="_blank" size={size}>
            BrunksWick East, Australia
          </StyledLink>
          <StyledContainerPais size={size}>
            <StyledImag src="ima/AUD.png" alt="" />
            <StyledPais>{pais}</StyledPais>
            <StyledSeleccion
              className="fa fa-angle-down"
              aria-hidden="true"
            ></StyledSeleccion>
          </StyledContainerPais>
        </StyledSubtitle>
      </StyledContainerOne>
      <StyledContainerTwo>
        <StyledMoney>{money}</StyledMoney>
        <StyledShipping size={size}>{shipping}</StyledShipping>
      </StyledContainerTwo>
    </>
  );
}

export { File };
