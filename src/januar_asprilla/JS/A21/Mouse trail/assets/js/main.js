// tengo el numero de elementos de rastro
const numTrails = 5;

// creo y ademas agrego los elementos que van en el body
const trails = Array.from({ length: numTrails }, () => {
  const trail = document.createElement("div");
  trail.className = "trail";
  document.body.appendChild(trail);
  return trail;
});
trails.forEach((trail, index) => {
  trail.style.transitionDuration = `${index * 50}ms`;
});

// con esta funcion estoy actualizando el rastro
function updateTrail(event) {
  trails.forEach((trail) => {
    trail.style.transform = `translateX(${event.pageX - 3}px) translateY(${
      event.pageY - 3
    }px)`;
  });
}

// aqui actualizo el rastro del mouse
document.addEventListener("mousemove", updateTrail);
