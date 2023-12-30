import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const Input = styled.input`
  width: 300px;
  border-radius: 30px;

  &::placeholder {
    color: #000;
    padding-left: 10px;
  }
`;
const Label = styled.label`
  font-size: 17px;
  color: #fff;
`;
const Checkbox = styled.input`
  margin-right: 5px;
`;
export { Form, Input, Label, Checkbox };
