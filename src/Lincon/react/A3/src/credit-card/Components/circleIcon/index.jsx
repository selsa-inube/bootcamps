import { StyledCircle } from "./styled";
function CircleIcon({ isActive }) {
  return (
    <StyledCircle
      className="fa fa-circle"
      aria-hidden="true"
      isActive={isActive}
    ></StyledCircle>
  );
}

export { CircleIcon };
