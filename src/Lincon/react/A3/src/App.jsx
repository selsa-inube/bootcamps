import { CommerceCard } from "./e-commerce card";
import { StyledContainer } from "./styled";
import { DishCard } from "./dish card";

import { CreditCard } from "./credit-card";

import "./App.css";

function App() {
  return (
    <StyledContainer>
      <CommerceCard />
      <DishCard />
      <CreditCard />
    </StyledContainer>
  );
}

export default App;
