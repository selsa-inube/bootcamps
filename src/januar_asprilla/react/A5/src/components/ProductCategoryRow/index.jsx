import { Tr, Th } from "../ProductTable/TableStyled";
function ProductCategoryRow({ category }) {
  return (
    <Tr>
      <Th colSpan="2">{category}</Th>
    </Tr>
  );
}

export { ProductCategoryRow };
