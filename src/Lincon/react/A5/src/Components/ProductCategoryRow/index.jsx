import React from "react";
import { Tr, Th } from "./styled";

function ProductCategoryRow({ category }) {
  return (
    <Tr>
      <Th colSpan="2">{category}</Th>
    </Tr>
  );
}

export { ProductCategoryRow };
