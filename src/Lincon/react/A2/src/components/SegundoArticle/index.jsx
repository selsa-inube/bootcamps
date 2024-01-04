import {
  StyledNotice,
  StyledContainerNews,
  SyledTitle,
  StyledImg,
  SyledSubtitle,
} from "./style";
function ArticleTwo(props) {
  const { img, title, subtitle } = props;
  return (
    <StyledNotice>
      <StyledContainerNews>
        <SyledTitle>{title}</SyledTitle>
        <SyledSubtitle>{subtitle}</SyledSubtitle>
      </StyledContainerNews>
      {img && <StyledImg src={img} alt="Foto" />}
    </StyledNotice>
  );
}
export { ArticleTwo };
