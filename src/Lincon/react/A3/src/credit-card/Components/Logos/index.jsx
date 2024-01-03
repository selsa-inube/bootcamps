import { ImageContainer } from "./styled";
import { ChipContainer } from "./styled";

function Image(props) {
  const { src, alt } = props;
  return <ImageContainer src={src} alt={alt} />;
}
function Chip(props) {
  const { src, alt } = props;
  return <ChipContainer src={src} alt={alt} />;
}
export { Image, Chip };
