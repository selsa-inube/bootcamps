import React from "react";
import { Tr, Td } from "./styled";

function ProductRow({ product }) {
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: "red" }}>{product.name}</span>
  );

  return (
    <Tr>
      <Td>{name}</Td>
      <Td>{product.price}</Td>
    </Tr>
  );
}

export { ProductRow };
