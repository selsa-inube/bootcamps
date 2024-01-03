import {
  TitleStyled,
  IconStyled,
  TextStyled,
  hyperlinkStyled,
} from "./StyledInformation";

function TitleInformation(props) {
  const { label, size = "small" } = props;
  return <TitleStyled size={size}>{label}</TitleStyled>;
}

function IconInformation(props) {
  const { className } = props;
  return <IconStyled className={className}></IconStyled>;
}

export { TitleInformation, IconInformation };
