import styled from "styled-components";

const StyledContainerInformation = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  i {
    font-size: 18px;
    color: #fff;
  }
`;

const StyledInformation = styled.div`
  display: flex;
  flex-direction: column;

  p:nth-of-type(1) {
    font-size: 20px;
    color: #fff;
  }

  p:nth-of-type(2) {
    font-size: 16px;
    color: #9d9d9d;
  }
`;

export { StyledContainerInformation, StyledInformation };
