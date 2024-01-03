import { StyledFastForwardArticles } from "./styles.js";

const FastForwardArticles = ({ title, paragraph, imgSrc }) => {
  return (
    <StyledFastForwardArticles>
      <h3>{title}</h3>
      <p>{paragraph}</p>
      <img src={imgSrc} alt="Article img" />
    </StyledFastForwardArticles>
  );
};

export { FastForwardArticles };
