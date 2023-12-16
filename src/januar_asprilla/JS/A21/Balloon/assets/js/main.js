// Selecciona el primer párrafo en el documento y almacena la referencia en la variable 'baloon'.
let baloon = document.querySelector("p");

// Inicializa el tamaño de fuente en 16 píxeles.
let fontSize = 16;

// Unidad de medida para el tamaño de fuente (píxeles en este caso).
let fontUnit = "px";

// Función que aumenta o disminuye el tamaño de fuente de un elemento dado por un porcentaje.
function increaseFontSizeOfElement(node, percentage) {
  // Calcula el nuevo tamaño de fuente.
  fontSize += fontSize * percentage;

  // Aplica el nuevo tamaño de fuente al elemento y añade la unidad de medida.
  node.style.fontSize = fontSize + fontUnit;
}

// Función que escucha los eventos de teclado para las flechas arriba y abajo.
function listenForArrowUpDown(e) {
  // Si se presiona la tecla de flecha arriba, aumenta el tamaño de fuente en un 10%.
  if (e.key == "ArrowUp") {
    increaseFontSizeOfElement(baloon, 0.1);
    e.preventDefault(); // Evita que el evento de teclado tenga otros efectos (como el desplazamiento de la página).
  }
  // Si se presiona la tecla de flecha abajo, disminuye el tamaño de fuente en un 10%.
  else if (e.key == "ArrowDown") {
    increaseFontSizeOfElement(baloon, -0.1);
    e.preventDefault();
  }

  // Si el tamaño de fuente supera los 100 píxeles, cambia el contenido del párrafo y desactiva el listener del teclado.
  if (fontSize > 100) {
    baloon.textContent = "💥"; // Cambia el contenido del párrafo a un emoji de explosión.
    document.removeEventListener("keydown", listenForArrowUpDown); // Desactiva el listener de teclado.
  }
}

// Establece el tamaño de fuente inicial del elemento 'baloon' a través de la función 'increaseFontSizeOfElement'.
increaseFontSizeOfElement(baloon, 0);

// Agrega un listener de eventos de teclado para la función 'listenForArrowUpDown'.
document.addEventListener("keydown", listenForArrowUpDown);
