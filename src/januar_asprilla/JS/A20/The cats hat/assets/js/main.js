let cat = document.querySelector("#cat");
let hat = document.querySelector("#hat");

let catAngle = 0; //lo mismo hago aqui con el gato
let hatAngle = Math.PI; // aqui inicializo el ángulo de la imagen del sombrero
let lastTime = null;

//esta es la donde se actualiza la animación
function animate(time) {
  if (lastTime != null) {
    catAngle += (time - lastTime) * 0.001;
    hatAngle += (time - lastTime) * 0.001;
  }

  lastTime = time;

  // aqui se actualiza la posición de la imagen del gato
  cat.style.top = Math.sin(catAngle) * 40 + 180 + "px";
  cat.style.left = Math.cos(catAngle) * 200 + 230 + "px";

  // aqui se actualiza la posición de la imagen del sombrero
  hat.style.top = Math.sin(hatAngle) * 40 + 40 + "px";
  hat.style.left = Math.cos(hatAngle) * 200 + 230 + "px";

  requestAnimationFrame(animate);
}
//se inicia la animación
requestAnimationFrame(animate);
