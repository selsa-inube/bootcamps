import { StyledLatestNewsArticles } from "./styles.js";

const LatestNewsArticles = ({ span, date, title }) => {
  return (
    <StyledLatestNewsArticles>
      <div className="article-info">
        <span>{span}</span>
        <p>{date}</p>
      </div>
      <h3>{title}</h3>
      <a className="continue-reading">Continue Reading</a>
    </StyledLatestNewsArticles>
  );
};

export { LatestNewsArticles };
