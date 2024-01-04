import {
  StyledCards,
  StyledText,
  StyledTitle,
  StyledNum,
  StyledParagraph,
  StyledClock,
} from "./styles";
function CartContainer({ label, value, num, percentage, time, background }) {
  return (
    <StyledCards background={background}>
      <StyledText background={background}>
        <StyledTitle background={background}>{label}</StyledTitle>
        <StyledNum background={background}>{value}</StyledNum>
      </StyledText>
      <StyledParagraph
        background={background}
      >{` ${num}  ${percentage}`}</StyledParagraph>
      <StyledText>
        <i className="fa-solid fa-clock"></i>
        <StyledClock background={background}>{` ${time}`}</StyledClock>
      </StyledText>
    </StyledCards>
  );
}

export { CartContainer };
