import { StyledNumber } from "./styled";
function Codigo(props) {
  const { text } = props;
  return (
    <>
      <StyledNumber>{text}</StyledNumber>
    </>
  );
}

export { Codigo };
