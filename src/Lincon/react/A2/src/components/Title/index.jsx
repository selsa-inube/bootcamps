import { StyleThursday } from "./stles";

function Title({ children, isTrue, isGrey }) {
  return (
    <StyleThursday isTrue={isTrue} isGrey={isGrey}>
      {children}
    </StyleThursday>
  );
}

export { Title };
