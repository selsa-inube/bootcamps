import {
  StyledCreditContainer,
  StyledExpiresContainer,
  StyledText,
  StyledDate,
  StyledName,
  StyledContainerDates,
  StyledContainerItems,
  StyledIcons,
} from "./StyleCredit";
import { Image, Chip } from "./Components/Logos";
import { Codigo } from "./Components/codigo";
import { CircleIcon } from "./Components/circleIcon";

function CreditCard() {
  return (
    <>
      <StyledCreditContainer>
        <Image src="ima/icons.png" alt="icons" />
        <Chip src="ima/sim.png" alt="chip" />
        <Codigo text="2671 9860 8300 0202" />
        <StyledExpiresContainer>
          <StyledContainerDates>
            <StyledText>EXPIRES END</StyledText>
            <StyledDate>
              <i className="fa-solid fa-caret-right"></i>11/22
            </StyledDate>
          </StyledContainerDates>
          <StyledContainerItems>
            <StyledName>CLARK DOE</StyledName>
            <StyledIcons>
              <CircleIcon isActive={true} />
              <CircleIcon isActive={false} />
            </StyledIcons>
          </StyledContainerItems>
        </StyledExpiresContainer>
      </StyledCreditContainer>
    </>
  );
}

export { CreditCard };
