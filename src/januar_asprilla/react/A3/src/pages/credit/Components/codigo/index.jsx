import { NumberCard } from "./StyledCodigo";
function Codigo(props) {
  const { label } = props;
  return (
    <>
      <NumberCard>{label}</NumberCard>
    </>
  );
}

export { Codigo };
