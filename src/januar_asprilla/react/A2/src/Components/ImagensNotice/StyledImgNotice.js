import styled from "styled-components";

const ImagensStyled = styled.figure`
  display: grid;
  justify-content: start;
`;
const ImageStyled = styled.img`
  max-width: 220px;
  max-height: 130px;
`;

const ImagePreviwStyled = styled.img`
  max-width: 110px;
  max-height: 100px;
`;

const ImageCard = styled.img`
  position: absolute;
  right: 5px;
  bottom: 5px;
  width: 100px;
  height: 40px;
  background-color: ${(props) => props.background};
`;

export { ImagensStyled, ImageStyled, ImagePreviwStyled, ImageCard };
