import {
  TitleStyled,
  IconStyled,
  TextStyled,
  HyperlinkStyled,
} from "./StyledInformation";

function TitleInformation(props) {
  const { label, size = "small" } = props;
  return <TitleStyled size={size}>{label}</TitleStyled>;
}

function IconInformation(props) {
  const { className } = props;
  return <IconStyled className={className}></IconStyled>;
}

function Paragraph(props) {
  const { label } = props;
  return <TextStyled>{label}</TextStyled>;
}

function Hyperlink(props) {
  const { label } = props;
  return <HyperlinkStyled>{label}</HyperlinkStyled>;
}

export { TitleInformation, IconInformation, Paragraph, Hyperlink };
