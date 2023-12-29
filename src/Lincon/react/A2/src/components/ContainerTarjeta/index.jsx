import {
  StyledCards,
  StyledText,
  StyledTitle,
  StyledNum,
  StyledParagraph,
  StyleClock,
} from "./styles";
function CartContainer(props) {
  const { children, background } = props;
  return <StyledCards background={background}>{children}</StyledCards>;
}
function CartTitle(props) {
  const { children, background } = props;
  return <StyledText background={background}>{children}</StyledText>;
}
function ParagraphTitle(props) {
  const { label, background } = props;
  return <StyledTitle background={background}>{label}</StyledTitle>;
}
function ParagraphTitleTwo(props) {
  const { label, background } = props;
  return <StyledParagraph background={background}>{label}</StyledParagraph>;
}
function ParagraphTitleClock(props) {
  const { label, background } = props;
  return <StyleClock background={background}>{label}</StyleClock>;
}
function NumTitle(props) {
  const { label, background } = props;
  return <StyledNum background={background}>{label}</StyledNum>;
}
export {
  CartContainer,
  CartTitle,
  ParagraphTitle,
  NumTitle,
  ParagraphTitleTwo,
  ParagraphTitleClock,
};
