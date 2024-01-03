import { StyledMainSection } from "./styles.js";

const MainSection = () => {
  return (
    <StyledMainSection>
      <img src="public/main-article-img.jpg" alt="Article img" />
      <div className="article-info">
        <span>TECH FOX</span>
        <p>May 20, 2020</p>
      </div>
      <h2>Everything You Need to Know About Slow Internet Speeds</h2>
      <p>
        Our Crummy connections are the biggest tech headache in the pandemic.
        Here's a comprehensive guide to what to do about them
      </p>
      <a className="continue-reading">Continue Reading</a>
    </StyledMainSection>
  );
};

export { MainSection };
