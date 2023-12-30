import FilterableProductTable from "./components/FilterableProductTable";
import "./App.css";
import { Title, StoreContainer } from "./components/ProductTable/TableStyled";

const PRODUCTS = [
  { category: "Frutas", price: "$1", stocked: true, name: "Manzana" },
  { category: "Frutas", price: "$1", stocked: true, name: "Fruta del dragón" },
  { category: "Frutas", price: "$2", stocked: false, name: "Maracuyá" },
  { category: "Verduras", price: "$2", stocked: true, name: "Espinaca" },
  { category: "Verduras", price: "$4", stocked: false, name: "Calabaza" },
  { category: "Verduras", price: "$1", stocked: true, name: "Guisantes" },
];

function App() {
  return (
    <StoreContainer>
      <Title>React Store</Title>
      <FilterableProductTable products={PRODUCTS} />
    </StoreContainer>
  );
}

export default App;
