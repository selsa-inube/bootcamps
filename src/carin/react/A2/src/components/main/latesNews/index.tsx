import { StyledLatestNews } from "./styles.js";
import { LatestNewsArticles } from "../latestNewsArticles/index.js";

const LatestNews = () => {
  return (
    <StyledLatestNews>
      <h2>Latest News</h2>
      <LatestNewsArticles
        span="THE UPSHOT"
        date="May 19, 2020"
        title="A Wave of Small Business Closures Is on the Way. Can Washington Stop
          It?"
      />

      <LatestNewsArticles
        span="NEWS ANALYSIS"
        date="May 19, 2020"
        title="Coronavirus Shut Down the 'Experience Economy.' Can It Come Back?"
      />

      <button>
        <i className="fa-regular fa-circle"></i>
        <i className="fa-solid fa-circle"></i>
        <i className="fa-solid fa-circle"></i>
      </button>
    </StyledLatestNews>
  );
};

export { LatestNews };
