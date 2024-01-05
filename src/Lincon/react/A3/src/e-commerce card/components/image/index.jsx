import { StyledImage } from "./styled";
function Image(props) {
  const { img, size = "small" } = props;

  return <>{img && <StyledImage src={img} size={size} alt="Imagen" />}</>;
}

export { Image };
