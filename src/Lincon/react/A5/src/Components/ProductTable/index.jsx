import React from "react";
import { ProductCategoryRow } from "../ProductCategoryRow";
import { ProductRow } from "../ProductRow";
import { Table, Thead, Name, List, Tbody } from "./styled";

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
        />,
      );
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });

  return (
    <Table>
      <Thead>
        <List>
          <Name>Name</Name>
          <Name>Price</Name>
        </List>
      </Thead>
      <Tbody>{rows}</Tbody>
    </Table>
  );
}

export { ProductTable };
