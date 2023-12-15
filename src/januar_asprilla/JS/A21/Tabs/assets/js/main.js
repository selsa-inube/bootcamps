function asTabs(node) {
  // Obtiene las pestañas como elementos de un array
  const tabs = Array.from(node.children);

  // Crea un contenedor para los botones de las pestañas
  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("tab-buttons-container");

  // Itera sobre cada pestaña
  tabs.forEach((tab, index) => {
    // Crea un botón para la pestaña actual
    const button = document.createElement("button");
    button.textContent = tab.getAttribute("data-tabname");
    button.classList.add("tab-button");

    // Asocia un evento de clic al botón para mostrar la pestaña correspondiente
    button.addEventListener("click", () => showTab(index));

    // Agrega el botón al contenedor
    buttonContainer.appendChild(button);

    // Si no es la primera pestaña, oculta su contenido
    if (index !== 0) {
      tab.classList.add("tab-content");
    } else {
      // Si es la primera pestaña, marca el botón como activo
      button.classList.add("active");
    }
  });

  // Inserta el contenedor de botones al principio del nodo contenedor
  node.insertBefore(buttonContainer, node.firstChild);

  // Función para mostrar la pestaña correspondiente al índice
  function showTab(index) {
    tabs.forEach((tab, i) => {
      if (i === index) {
        // Muestra la pestaña y marca el botón como activo
        tab.classList.add("active");
        tabs[i].classList.add("active");
      } else {
        // Oculta otras pestañas y desmarca los botones inactivos
        tab.classList.remove("active");
        tabs[i].classList.remove("active");
      }
    });
  }
}

// Llama a la función asTabs con el nodo del panel de pestañas
asTabs(document.querySelector("tab-panel"));
