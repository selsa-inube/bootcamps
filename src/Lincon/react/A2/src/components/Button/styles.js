import styled from "styled-components";

const StyledButton = styled.button`
  padding: ${(props) => (props.padding ? "10px 20px" : "0")};
  background-color: #f6f6f6;
  border: ${(props) => (props.border ? "3px solid #d6d6d6" : "transparent")};
  font-weight: 700;
  cursor: pointer;
`;

export { StyledButton };
