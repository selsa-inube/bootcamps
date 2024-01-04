import { StyledLatestNewsArticles } from "./styles.js";
import { ArticleInfo } from "../articleInfo/index.js";
import { ContinueReading } from "../continueReading/index.js";

const LatestNewsArticles = ({ span, date, title }) => {
  return (
    <StyledLatestNewsArticles>
      <ArticleInfo span={span} date={date} />
      <h3>{title}</h3>
      <ContinueReading content="Continue Reading" />
    </StyledLatestNewsArticles>
  );
};

export { LatestNewsArticles };
