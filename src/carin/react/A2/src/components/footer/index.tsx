import {
  StyledFooter,
  StyledLeftSideFooter,
  StyledOverview,
} from "./styles.js";

import { listFromArray } from "../listFromArray/index.js";

const Footer = () => {
  let arrayWithContents = [
    "Futures",
    "Americas",
    "Europe",
    "Asia",
    "Commodities",
  ];
  let arrayForList = [];
  arrayWithContents.forEach((element) => {
    arrayForList.push({ href: "#", content: element });
  });
  let list = listFromArray(arrayForList);
  return (
    <StyledFooter>
      <StyledLeftSideFooter>
        <div>
          <p>MARKET SNAPSHOT</p>
          <p>6:07 AM</p>
        </div>
        <ul>{list}</ul>
      </StyledLeftSideFooter>
      <StyledOverview href="#">FULL MARKET OVERVIEW{" >"}</StyledOverview>
    </StyledFooter>
  );
};

export { Footer };
