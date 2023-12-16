// Definimos una función llamada byTagName que toma un nodo y un nombre de etiqueta como argumentos
function byTagName(node, tagName) {
  // Utilizamos getElementsByTagName en el nodo proporcionado para obtener todos los elementos con la etiqueta especificada
  // Luego, utilizamos Array.from para convertir la NodeList resultante en un array de elementos
  return Array.from(node.getElementsByTagName(tagName));
}

console.log(byTagName(document.body, "h1").length);
// → 1
console.log(byTagName(document.body, "span").length);
// → 3
let para = document.querySelector("p");
console.log(byTagName(para, "span").length);
// → 2 (dos elementos span dentro de un párrafo)
