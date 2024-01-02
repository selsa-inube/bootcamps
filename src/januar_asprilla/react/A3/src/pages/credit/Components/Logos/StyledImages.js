import styled from "styled-components";

const ImageContainer = styled.img`
  width: 180px;
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 14px;
  z-index: 1;
`;

const LogoContainer = styled.img`
  width: 100px;
  position: absolute;
  bottom: 10px;
  right: 20px;
`;

const ChipContainer = styled.img`
  width: 150px;
  height: 120px;
  margin-top: 80px;
`;
export { ImageContainer, LogoContainer, ChipContainer };
