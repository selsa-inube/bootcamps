import styled from "styled-components";
const StyleThursday = styled.div`
  min-width: 100px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: ${({ isTrue }) => (isTrue ? "300px" : "none")};

  li:nth-child(1) {
    font-weight: 800;
  }
  li:nth-child(2) {
    color: ${({ isGrey }) => (isGrey ? "#7a7a7a" : "none")};
  }
`;
export { StyleThursday };
