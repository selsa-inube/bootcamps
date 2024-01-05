import {
  BackgroundContainer,
  CreditContainer,
  ExpireContainer,
  ExprireText,
  ExprireDate,
  NameCard,
} from "./StyleCredit";
import { Image, Logo, Chip } from "./Components/Logos";
import { Codigo } from "./Components/codigo";
function CreditCard() {
  return (
    <>
      <BackgroundContainer>
        <CreditContainer>
          <Image src="diseñocard.png" alt="Diseños de tarjeta" />
          <Logo src="logoMastercard.png" alt="Logo de marca" />
          <Chip src="chip.png" alt="Chip de tarjeta" />
          <Codigo label="2671 9860 8300 0202" />
          <ExpireContainer>
            <ExprireText>EXPIRES END</ExprireText>
            <ExprireDate>
              <i className="fa-solid fa-caret-right"></i>11/22
            </ExprireDate>
          </ExpireContainer>
          <NameCard>CLARK DOE</NameCard>
        </CreditContainer>
      </BackgroundContainer>
    </>
  );
}

export default CreditCard;
