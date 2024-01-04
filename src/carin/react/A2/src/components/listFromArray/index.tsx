import { StyledLi } from "./styles.js";

const listFromArray = (array) => {
  let listToReturn = [];

  array.forEach((listElement) => {
    listToReturn.push(
      <StyledLi>
        <a href={listElement.href}>{listElement.content}</a>
      </StyledLi>
    );
  });

  return listToReturn;
};

export { listFromArray };
