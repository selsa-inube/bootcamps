import { StyledContainerTransition, StyledIcon, StyledText } from "./styled";
function Transaction() {
  return (
    <StyledContainerTransition>
      <StyledIcon className="fa fa-info-circle" aria-hidden="true"></StyledIcon>
      <StyledText>
        Transaction history shows that the offer amount youve enterd is likely
        to be accepted!
      </StyledText>
    </StyledContainerTransition>
  );
}
export { Transaction };
