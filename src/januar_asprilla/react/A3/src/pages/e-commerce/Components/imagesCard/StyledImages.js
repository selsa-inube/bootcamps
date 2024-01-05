import styled from "styled-components";

const StyledLogo = styled.img`
  width: ${(props) => (props.size === "small" ? "50px" : "70px")};
  border-radius: 10px;
  border: ${(props) =>
    props.size === "small" ? "1px solid #92989e" : "1px solid transparent"};
`;

const StyledIcon = styled.i`
  color: #d4d4d4;
  font-size: 20px;
`;

export { StyledLogo, StyledIcon };
