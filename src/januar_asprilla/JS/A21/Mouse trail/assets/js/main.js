// tengo el numero de elementos de rastro
const numTrails = 10;

// creo y ademas agrego los elementos que van en el body
const trails = Array.from({ length: numTrails }, () => {
  const trail = document.createElement("div");
  trail.className = "trail";
  document.body.appendChild(trail);
  return trail;
});

// con esta funcion estoy actualizando el rastro
function updateTrail(event) {
  trails.forEach((trail, index) => {
    const offset = index * 2; // aumento el espacio entre los elementos
    trail.style.left = event.pageX - offset + "px";
    trail.style.top = event.pageY - offset + "px";
  });
}

// aqui actualizo el rastro del mouse
document.addEventListener("mousemove", updateTrail);
