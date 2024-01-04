import { StyledButton } from "./styles";
function Button(props) {
  const { label, border = false, padding = false } = props;
  return (
    <StyledButton border={border} padding={padding}>
      {label}
    </StyledButton>
  );
}
export { Button };
