import styled from "styled-components";

const StyledText = styled.p`
  color: ${({ checked }) => (checked ? "#575966" : "#b9b4b4")};
`;

const StyledContainerCheck = styled.div`
  display: flex;
  gap: 10px;
`;
const StyledInput = styled.input`
  width: 1.3em;
  height: 1.3em;

  border-radius: 50%;
  vertical-align: middle;
  border: 1px solid #ddd;
  appearance: none;

  outline: none;
  cursor: pointer;

  &:checked + ${StyledText} {
    color: #575966;
  }

  &:not(:checked) + ${StyledText} {
    color: #b9b4b4;
  }
  &:checked {
    background-color: rgb(170 58 255 / 59%);
  }
`;

export { StyledContainerCheck, StyledInput, StyledText };
