import styled from "styled-components";

const StyleButtonNoBorder = styled.button`
  padding: 10px 20px;
  color: black;
  font-weight: bold;
  font-size: 0.8rem;
  background-color: #f6f6f6;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;

const StyleButtonBorder = styled(StyleButtonNoBorder)`
  background-color: #f6f6f6;
  border: solid #d8d8d8;
`;

export { StyleButtonBorder, StyleButtonNoBorder };
