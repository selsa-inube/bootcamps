import { StyledNavTopics } from "./styles.js";
import { listFromArray } from "../../listFromArray/index.js";

const NavTopics = () => {
  let arrayWithContents = [
    "World",
    "Politics",
    "Business",
    "Opinion",
    "Tech",
    "Science",
    "Sports",
    "Arts",
    "Books",
    "Style",
    "Food",
    "Travel",
    "Magazine",
  ];
  let arrayForList = [];
  arrayWithContents.forEach((element) => {
    arrayForList.push({ href: "#", content: element });
  });
  let list = listFromArray(arrayForList);

  return (
    <StyledNavTopics>
      <div id="date">
        <p>Thursday</p>
        <p>May 21, 2020</p>
      </div>
      <ul>{list}</ul>
      <button>
        <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
      </button>
    </StyledNavTopics>
  );
};

export { NavTopics };
