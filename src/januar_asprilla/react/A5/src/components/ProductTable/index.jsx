import { Table, Thead, Tr, Th, Tbody } from "./TableStyled";
import { ProductRow } from "../ProductRow";
import { ProductCategoryRow } from "../ProductCategoryRow";
function ProductTable({ products, filterText, inStockOnly }) {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }
    if (inStockOnly && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Nombre</Th>
          <Th>Precio</Th>
        </Tr>
      </Thead>
      <Tbody>{rows}</Tbody>
    </Table>
  );
}

export { ProductTable };
