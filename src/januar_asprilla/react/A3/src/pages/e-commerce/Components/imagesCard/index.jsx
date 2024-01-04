import { StyledLogo, StyledIcon } from "./StyledImages";

function Logocard(props) {
  const { src, alt, size = "small" } = props;
  return <>{src && <StyledLogo src={src} alt={alt} size={size} />}</>;
}

function Iconcard(props) {
  const { className } = props;
  return <StyledIcon className={className} />;
}

export { Logocard, Iconcard };
