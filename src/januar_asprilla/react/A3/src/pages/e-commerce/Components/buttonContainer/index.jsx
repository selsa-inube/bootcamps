import { OffContainer, OffText, TextPercentage } from "./styled";
function Discounts(props) {
  const { number, off } = props;
  return (
    <OffContainer>
      <TextPercentage>{number}%</TextPercentage>
      <OffText>{off}</OffText>
    </OffContainer>
  );
}

export { Discounts };
