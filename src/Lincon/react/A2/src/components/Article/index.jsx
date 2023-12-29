import {
  StyledArticle,
  StyledImage,
  StyledCategory,
  StyledDate,
  StyledContenedorOne,
  StyledContenedorTwo,
  StyleTitle,
  StyleSubtitle,
  StyledButton,
} from "./styles";
function Article(props) {
  const { img, category, date, title, subtitle, size = "small" } = props;
  return (
    <StyledArticle size={size}>
      {size === "large" && img && <StyledImage src={img} alt="Foto" />}
      <StyledContenedorOne>
        <StyledCategory>{category}</StyledCategory>
        <StyledDate>{date}</StyledDate>
      </StyledContenedorOne>
      <StyledContenedorTwo>
        <StyleTitle size={size}>{title}</StyleTitle>
        {size === "large" && <StyleSubtitle>{subtitle}</StyleSubtitle>}
      </StyledContenedorTwo>
      <StyledButton>Continue Reading</StyledButton>
    </StyledArticle>
  );
}
export { Article };
