import styled from "styled-components";

const TitleStyled = styled.h1`
  font-size: ${(props) => (props.size === "big" ? "22px" : "17px")};
  font-family: "Arial Narrow", Arial, sans-serif;
  font-weight: normal;
  color: #616161;
`;
const IconStyled = styled.i`
  color: #d4d4d4;
  font-size: 12px;
`;

const TextStyled = styled.p`
  color: #d4d4d4;
  font-size: 14px;
`;

const HyperlinkStyled = styled.a`
  text-decoration: none;
  color: #53c2ef;
  font-size: 14px;
`;

export { TitleStyled, IconStyled, TextStyled, HyperlinkStyled };
