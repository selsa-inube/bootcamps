import { DateDay } from "./StyledTextDate";

function TextDate(props) {
  const { label, shape = false, size = false } = props;

  return (
    <DateDay shape={shape} size={size}>
      {label}
    </DateDay>
  );
}

export { TextDate };
