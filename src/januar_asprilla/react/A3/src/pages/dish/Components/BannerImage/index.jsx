import { ImageBanner } from "./StyledImage";

function Image(props) {
  const { src, alt } = props;
  return <ImageBanner src={src} alt={alt} />;
}

export { Image };
