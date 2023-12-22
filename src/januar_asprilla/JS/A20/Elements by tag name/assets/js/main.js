function byTagName(node, tagName) {
  // Inicializamos un array para almacenar los elementos encontrados
  let elements = [];

  // Función recursiva para buscar elementos por etiqueta
  function searchElements(currentNode) {
    // Verificamos si el nodo actual es un elemento y tiene la etiqueta especificada
    if (
      currentNode.nodeType === 1 &&
      currentNode.tagName.toLowerCase() === tagName.toLowerCase()
    ) {
      elements.push(currentNode);
    }

    // Recorremos los nodos hijos del nodo actual
    for (let childNode of currentNode.childNodes) {
      // Llamada recursiva para procesar nodos hijos
      searchElements(childNode);
    }
  }

  // Iniciamos la búsqueda desde el nodo proporcionado
  searchElements(node);

  return elements;
}

console.log(byTagName(document.body, "h1").length);
// → 1
console.log(byTagName(document.body, "span").length);
// → 3
let para = document.querySelector("p");
console.log(byTagName(para, "span").length);
// → 2 (dos elementos span dentro de un párrafo)
