import { StyledContainerOff, StyledOff, StyledPercentage } from "./styled";
function Button(props) {
  const { num, off } = props;
  return (
    <StyledContainerOff>
      <StyledPercentage>{num}%</StyledPercentage>
      <StyledOff>{off}</StyledOff>
    </StyledContainerOff>
  );
}

export { Button };
