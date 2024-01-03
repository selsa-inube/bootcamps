import styled from "styled-components";

const TitleStyled = styled.h1`
  font-size: ${(props) => (props.size === "big" ? "22px" : "17px")};
  font-family: "Arial Narrow", Arial, sans-serif;
  font-weight: semibold;
  color: #616161;
`;
const IconStyled = styled.i`
  color: #d4d4d4;
  font-size: 20px;
`;

const TextStyled = styled.p`
  color: #d4d4d4;
  font-size: 18px;
`;

const hyperlinkStyled = styled.a``;

export { TitleStyled, IconStyled, TextStyled, hyperlinkStyled };
