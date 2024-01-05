import { StyledContainerCheck, StyledInput, StyledText } from "./styled.js";
import { useState } from "react";
function Select({ Text }) {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <StyledContainerCheck>
      <StyledInput
        type="checkbox"
        id="chkCircular"
        checked={isChecked}
        onChange={handleCheckboxChange}
      ></StyledInput>
      <StyledText checked={isChecked}> {Text}</StyledText>
    </StyledContainerCheck>
  );
}

export { Select };
