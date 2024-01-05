import { ContainerCheck, ContainerInput, ContainerText } from "./styled.js";

import { useState } from "react";
function OptionCheck({ Text }) {
  const [isCheckout, setIsCheckout] = useState(false);
  const handleCheckboxChange = () => {
    setIsCheckout(!isCheckout);
  };
  return (
    <ContainerCheck>
      <ContainerInput
        type="checkbox"
        id="chkCircular"
        checked={isCheckout}
        onChange={handleCheckboxChange}
      ></ContainerInput>
      <ContainerText checked={isCheckout}> {Text}</ContainerText>
    </ContainerCheck>
  );
}

export { OptionCheck };
