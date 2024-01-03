import { StyledMain } from "./styles.js";
import { NavTopics } from "../navTopics";
import { FastForward } from "../fastForward";
import { LatestNews } from "../latesNews";
import { NavBarSections } from "../navBarSections";
import { MainSection } from "../mainSection";

const Main = () => {
  return (
    <StyledMain>
      <NavTopics />
      <article>
        <NavBarSections />
        <MainSection />
        <hr />
        <LatestNews />
        <hr />
        <FastForward />
      </article>
    </StyledMain>
  );
};

export { Main };
