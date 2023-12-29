import {
  ImagensStyled,
  ImageStyled,
  ImagePreviwStyled,
  ImageCard,
} from "./imgNoticeStyle";

function ImagensNotice(props) {
  const { src, alt } = props;
  return (
    <ImagensStyled>
      <ImageStyled alt={alt} src={src} />
    </ImagensStyled>
  );
}

function PreviwImage(props) {
  const { src, alt } = props;
  return <ImagePreviwStyled src={src} alt={alt} />;
}
function BarImage(props) {
  const { src, alt, background } = props;
  return <ImageCard src={src} alt={alt} background={background} />;
}
export { ImagensNotice, PreviwImage, BarImage };
