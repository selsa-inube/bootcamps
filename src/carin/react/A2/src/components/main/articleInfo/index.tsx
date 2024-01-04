import { StyleArticleInfo } from "./styles.js";

const ArticleInfo = ({ span, date }) => {
  return (
    <StyleArticleInfo>
      <span>{span}</span>
      <p>{date}</p>
    </StyleArticleInfo>
  );
};

export { ArticleInfo };
