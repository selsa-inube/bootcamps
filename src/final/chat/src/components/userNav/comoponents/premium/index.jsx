import { StyledContainerPremium, StyledContainerText } from "./styled.js";
function Premium() {
  return (
    <StyledContainerPremium>
      <StyledContainerText>
        <p>
          Mychats <a href="#">Premium</a>
        </p>
        <p>Experience enhanced features and improved accessibility</p>
      </StyledContainerText>

      <button>Buy Now</button>
    </StyledContainerPremium>
  );
}

export { Premium };
