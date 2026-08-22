import saludar from "./saludador.js";

const nombreInput = document.querySelector("#nombre-input");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = nombreInput.value;
  let fechaActual = new Date();
  let horaActual = fechaActual.getHours();

div.innerHTML = "<p>" + saludar(nombre, horaActual) + "</p>";
});