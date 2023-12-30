import { Form, Input, Label } from "./SearchStyled";
function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange,
}) {
  return (
    <Form>
      <Input
        onChange={(e) => onFilterTextChange(e.target.value)}
        value={filterText}
        type="text"
        placeholder="Buscar..."
      />
      <Label>
        <Input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => onInStockOnlyChange(e.target.checked)}
        />{" "}
        Mostrar solo productos en stock
      </Label>
    </Form>
  );
}

export { SearchBar };
