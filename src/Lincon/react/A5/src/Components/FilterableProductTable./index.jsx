import React from "react";
import { SearchBar } from "../SearchBar";
import { ProductTable } from "../ProductTable";
import { useState } from "react";
import { Title } from "../FilterableProductTable./styled";

// Define el componente funcional FilterableProductTable que recibe una prop "products"
function FilterableProductTable({ products }) {
  // Utiliza el estado local para gestionar el texto de filtro y la opción "solo en stock"
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);
  return (
    // Renderizo un contenedor que contiene el componente SearchBar y ProductTable
    <>
      <Title>Product Catalog</Title>
      {/* Renderiza el componente SearchBar y pasa propiedades y funciones como argumentos */}
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}
      />
      {/* Renderiza el componente ProductTable y pasa propiedades como argumentos */}
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </>
  );
}

export { FilterableProductTable };
