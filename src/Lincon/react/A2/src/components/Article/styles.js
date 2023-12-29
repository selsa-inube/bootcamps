import styled from "styled-components";
const StyledArticle = styled.article`
  /* Estilos para el componente Article */
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: ${(props) => (props.size === "large" ? "30px" : "20px")};
`;

const StyledImage = styled.img`
  /* Estilos para la imagen, si es necesario */
  width: 35%;
`;
const StyledContenedorOne = styled.div`
  /* Estilos para la categoría, si es necesario */
  display: flex;
  align-items: center;
  gap: 20px;
`;
const StyledCategory = styled.p`
  /* Estilos para la categoría, si es necesario */
  color: #fff;
  padding: 8px 10px;
  background-color: #000;
  font-size: 13px;
  border: none;
  cursor: pointer;
`;

const StyledDate = styled.p`
  font-size: 14px;
  font-weight: 700;
`;

const StyledContenedorTwo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const StyleTitle = styled.h2`
  font-size: ${(props) => (props.size === "large" ? "25px" : "19px")};
  max-width: 350px;
`;

const StyleSubtitle = styled.p`
  color: #7a7a7a;
  max-width: 500px;
`;
const StyledButton = styled.button`
  border: none;
  color: #7a7a7a;
  cursor: pointer;
  border-bottom: 1px solid #7a7a7a;
  padding-bottom: 5px;
`;
export {
  StyledArticle,
  StyledImage,
  StyledCategory,
  StyledDate,
  StyledContenedorOne,
  StyledContenedorTwo,
  StyleTitle,
  StyleSubtitle,
  StyledButton,
};
