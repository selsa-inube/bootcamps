import { StyledTitle } from "./StyledTitle.js";

function Title(props) {
  const { label } = props;
  return <StyledTitle>{label}</StyledTitle>;
}
export { Title };
