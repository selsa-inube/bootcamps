import { StyledNavBarSections } from "./styles.js";
import { listFromArray } from "../../listFromArray/index.js";

const NavBarSections = () => {
  let arrayWithContents = [
    "Business",
    "Tech",
    "Econ",
    "Media",
    "Money",
    "dealBook",
  ];
  let arrayForList = [];
  arrayWithContents.forEach((element) => {
    arrayForList.push({ href: "#", content: element });
  });
  let list = listFromArray(arrayForList);

  return (
    <StyledNavBarSections>
      <ul>{list}</ul>
    </StyledNavBarSections>
  );
};

export { NavBarSections };
