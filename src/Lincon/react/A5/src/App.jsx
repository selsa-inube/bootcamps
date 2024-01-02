import React from "react";
import { FilterableProductTable } from "./Components/FilterableProductTable./index.jsx";
import { PRODUCTS } from "./Components/Products/index.jsx";
import "./App.css";

function App() {
  return (
    <>
      <FilterableProductTable products={PRODUCTS} />
    </>
  );
}

export default App;
