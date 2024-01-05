import styled from "styled-components";

const ContainerText = styled.p`
  color: ${({ checked }) => (checked ? "#575966" : "#b9b4b4")};
`;

const ContainerCheck = styled.div`
  display: flex;
  gap: 10px;
`;
const ContainerInput = styled.input`
  width: 1.3em;
  height: 1.3em;

  border-radius: 50%;
  vertical-align: middle;
  border: 1px solid #ddd;
  appearance: none;

  outline: none;
  cursor: pointer;

  &:checked + ${ContainerText} {
    color: #575966;
  }

  &:not(:checked) + ${ContainerText} {
    color: #b9b4b4;
  }
  &:checked {
    background-color: rgb(170 58 255 / 59%);
  }
`;

export { ContainerCheck, ContainerInput, ContainerText };
