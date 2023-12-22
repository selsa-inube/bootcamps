// Definición del array de objetos MOUNTAINS con información sobre diversas montañas
var MOUNTAINS = [
  { name: "Kilimanjaro", height: 5895, country: "Tanzania" },
  { name: "Everest", height: 8848, country: "Nepal" },
  { name: "Mount Fuji", height: 3776, country: "Japan" },
  { name: "Mont Blanc", height: 4808, country: "Italy/France" },
  { name: "Vaalserberg", height: 323, country: "Netherlands" },
  { name: "Denali", height: 6168, country: "United States" },
  { name: "Popocatepetl", height: 5465, country: "Mexico" },
];

// Función para construir una tabla HTML a partir de un array de objetos
function buildTable(mountains) {
  // Crear un elemento de tabla
  var table = document.createElement("table");

  // Crear la primera fila de encabezados de tabla
  var firstRow = document.createElement("tr");
  table.appendChild(firstRow);
  var attributes = Object.keys(mountains[0]); // Cambié 'keys' a 'attributes'
  for (var i = 0; i < attributes.length; i++) {
    // Crear celdas de encabezado y agregar el texto correspondiente
    var heading = document.createTextNode(attributes[i]);
    var firstRowCell = document.createElement("th");
    firstRowCell.appendChild(heading);
    firstRow.appendChild(firstRowCell);
  }

  // Iterar sobre los objetos y construir las filas de datos
  for (const object of mountains) {
    const row = document.createElement("tr");
    table.appendChild(row);

    for (const attribute of attributes) {
      // Obtener el valor de la propiedad actual del objeto
      const data = object[attribute];

      // Crear un nodo de texto con el valor y una celda correspondiente
      const dataNode = document.createTextNode(data);
      const cell = document.createElement("td");
      cell.appendChild(dataNode);
      row.appendChild(cell);

      // Alinear el texto a la derecha si el valor es un número
      if (typeof data === "number") {
        cell.classList.add("align-right");
      }
    }
  }

  // Devolver la tabla construida
  return table;
}

// Agregar la tabla al cuerpo del documento
document.body.appendChild(buildTable(MOUNTAINS));
