import styled from "styled-components";
function color() {
  return "red";
}

const ButtonStyled = styled.button`
  text-transform: uppercase;
  font-weight: bolder;
  border: ${(props) =>
    props.border === true ? "1px solid rgb(185, 185, 185)" : "transparent"};
  padding: 10px 20px;
  cursor: pointer;
`;

const ButtonNotice = styled.button`
  color: gray;
  margin-top: 20px;
  background-color: #f3f3f3;
  border: none;
  border-bottom: 1px solid rgb(184, 184, 184);
  padding-bottom: 10px;
  cursor: pointer;
`;
const CategoryStyled = styled.p`
  font-size: 11px;
  padding: 10px 25px;
  background-color: ${(props) =>
    props.background === true ? "black" : "#f6f6f6"};
  color: ${(props) => (props.color === true ? "white" : "black")};
`;

const FooterExtras = styled.button`
  color: gray;
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 12px;
  justify-self: end;
  &:after {
    content: " >";
    font-size: 15px;
    font-weight: bolder;
  }
`;
export { ButtonStyled, ButtonNotice, CategoryStyled, FooterExtras };
