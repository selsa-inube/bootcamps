import styled from "styled-components";

const StyledContainerPremium = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  outline: 2px solid #fff;
  padding: 10px 20px;
  border-radius: 10px;
  gap: 10px;

  button {
    background: var(--purple-col);
    border: none;
    border-radius: 10px;
    padding: 10px;
    color: #fff;
    cursor: pointer;
    font-size: 15px;
  }
`;

const StyledContainerText = styled.div`
  display: flex;
  flex-direction: column;

  p:nth-of-type(1) {
    font-size: 20px;
    color: #fff;

    a {
      color: #0ae083;
      text-decoration: none;
    }
  }

  p:nth-of-type(2) {
    color: #9d9d9d;
  }
`;

export { StyledContainerPremium, StyledContainerText };
