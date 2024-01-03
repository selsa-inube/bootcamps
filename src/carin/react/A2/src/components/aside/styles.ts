import styled from "styled-components";

const StyledAside = styled.aside`
  height: 100%;
  width: 50px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: white;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 0;

  button {
    background-color: white;
    border: none;
    color: black;
    font-size: 1.5rem;
  }
  button i {
    color: black;
  }
`;

export { StyledAside };
