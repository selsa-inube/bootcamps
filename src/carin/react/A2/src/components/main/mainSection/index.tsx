import { StyledMainSection } from "./styles.js";
import { ArticleInfo } from "../articleInfo/index.js";
import { ContinueReading } from "../continueReading/index.js";

const MainSection = () => {
  return (
    <StyledMainSection>
      <img src="public/main-article-img.jpg" alt="Article img" />
      <ArticleInfo span="TECH FOX" date="May 20, 2020" />

      <h2>Everything You Need to Know About Slow Internet Speeds</h2>
      <p>
        Our Crummy connections are the biggest tech headache in the pandemic.
        Here's a comprehensive guide to what to do about them
      </p>
      <ContinueReading content="Continue Reading" />
    </StyledMainSection>
  );
};

export { MainSection };
