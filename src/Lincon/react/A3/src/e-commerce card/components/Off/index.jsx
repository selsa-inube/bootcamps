import { StyledContainerOff, StyledOff, StyledPercentage } from "./styled";
function Off(props) {
  const { num, off } = props;
  return (
    <StyledContainerOff>
      <StyledPercentage>{num}%</StyledPercentage>
      <StyledOff>{off}</StyledOff>
    </StyledContainerOff>
  );
}

export { Off };
