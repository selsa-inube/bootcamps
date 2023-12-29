import styled from "styled-components";
const StyledNotice = styled.div`
  /* Estilos para el componente Article */
  display: flex;
  width: 100%;
  margin-top: 20px;
`;
const StyledContainerNews = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  width: 70%;
`;
const SyledTitle = styled.p`
  color: #000;
  font-weight: 700;
  max-width: 220px;
`;
const SyledSubtitle = styled.p`
  color: #7a7a7a;
  max-width: 220px;
`;
const StyledImg = styled.img`
  width: 30%;
  height: 100px;
  object-fit: cover;
`;

export {
  StyledNotice,
  StyledContainerNews,
  SyledTitle,
  StyledImg,
  SyledSubtitle,
};
