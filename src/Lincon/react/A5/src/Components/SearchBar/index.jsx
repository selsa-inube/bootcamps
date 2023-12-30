import React from "react";
import { Form, Input, Label, Checkbox } from "./styled";
// Define el componente funcional SearchBar que recibe varias propiedades
function SearchBar({
  filterText, // Propiedad para el texto de filtro
  inStockOnly, // Propiedad para la opción de "solo en stock"
  onFilterTextChange, // Función para manejar cambios en el texto de filtro
  onInStockOnlyChange, // Función para manejar cambios en la opción de "solo en stock"
}) {
  // Renderiza un formulario con un cuadro de entrada de texto y una casilla de verificación
  return (
    <Form>
      {/* Cuadro de entrada de texto para el filtro */}
      <Input
        type="text"
        value={filterText}
        placeholder="Search..."
        onChange={(e) => onFilterTextChange(e.target.value)}
      />
      <Label>
        {/* Etiqueta y casilla de verificación para "solo en stock" */}
        <Checkbox
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => onInStockOnlyChange(e.target.checked)}
        />{" "}
        Only show products in stock
      </Label>
    </Form>
  );
}

export { SearchBar };
