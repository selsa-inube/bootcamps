import { ImageContainer, LogoContainer, ChipContainer } from "./StyledImages";

function Image(props) {
  const { src, alt } = props;
  return <ImageContainer src={src} alt={alt} />;
}
function Logo(props) {
  const { src, alt } = props;
  return <LogoContainer src={src} alt={alt} />;
}

function Chip(props) {
  const { src, alt } = props;
  return <ChipContainer src={src} alt={alt} />;
}
export { Image, Logo, Chip };
