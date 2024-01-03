import { Texts, Icons } from "./StyledOptions";
function Icon(props) {
  const { className, border = false, color = false } = props;
  return <Icons className={className} color={color} border={border}></Icons>;
}

function Text(props) {
  const { label } = props;
  return <Texts>{label}</Texts>;
}

export { Text, Icon };
