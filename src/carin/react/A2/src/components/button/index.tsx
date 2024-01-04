import { StyleButtonBorder, StyleButtonNoBorder } from "./styles.js";

// options are border or no-border
const Button = ({ styledOption, content }) => {
  return (
    <>
      {styledOption === "border" && (
        <StyleButtonBorder>{content}</StyleButtonBorder>
      )}
      {styledOption === "no-border" && (
        <StyleButtonNoBorder>{content}</StyleButtonNoBorder>
      )}
    </>
  );
};

export { Button };
