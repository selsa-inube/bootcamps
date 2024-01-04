import {
  StyledArticle,
  StyledImage,
  StyledCategory,
  StyledDate,
  StyledContainerOne,
  StyledContainerTwo,
  StyledTitle,
  StyledSubtitle,
  StyledButton,
} from "./styles";
function Article(props) {
  const { img, category, date, title, subtitle, size = "small" } = props;
  return (
    <StyledArticle size={size}>
      {size === "large" && img && <StyledImage src={img} alt="Foto" />}
      <StyledContainerOne>
        <StyledCategory>{category}</StyledCategory>
        <StyledDate>{date}</StyledDate>
      </StyledContainerOne>
      <StyledContainerTwo>
        <StyledTitle size={size}>{title}</StyledTitle>
        {size === "large" && <StyledSubtitle>{subtitle}</StyledSubtitle>}
      </StyledContainerTwo>
      <StyledButton>Continue Reading</StyledButton>
    </StyledArticle>
  );
}
export { Article };
