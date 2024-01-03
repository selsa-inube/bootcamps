import styled from "styled-components";

const Icons = styled.i`
  font-size: 15px;
  margin: 5px auto;
  border: ${(props) =>
    props.border === "true" ? "1px solid orange" : "1px solid #d4d4d4"};
  border-radius: 5px;
  padding: 5px 10px;
  color: ${(props) => (props.color === "true" ? "orange" : "#d4d4d4")};
`;
const Texts = styled.p`
  margin: 15px auto;
  font-size: 18px;
  font-family: Helvetica;
  font-weight: bolder;
  text-align: center;
  color: #d4d4d4;
`;

export { Icons, Texts };
