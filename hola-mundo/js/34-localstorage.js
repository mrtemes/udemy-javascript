'use strict'

// Localstorage.

// Verificar disponibilidad del localstorage.
if(typeof(Storage) !== 'undefine') {
  console.log("Localstorage disponible.");
} else {
  console.log("Incompatible con localstorage");
}

// Guardar datos.
localStorage.setItem("titulo", "Curso de Symfony.");

// Recuperar elemento.
//console.log(localStorage.getItem("titulo"));
document.querySelector("#peliculas").innerHTML = localStorage.getItem("titulo");

// Guardar objetos.
var usuario ={
  nombre: "Manuel Rio",
  email: "mr@temes.es",
  web: "mrio.mr"
};

localStorage.setItem("usuario", JSON.stringify(usuario));

// Recuperar objeto del localstorage.
var userjs = JSON.parse(localStorage.getItem("usuario"));
console.log(userjs);
document.querySelector("#datos").append(" " + userjs.web + " - " + userjs.nombre);

localStorage.removeItem("usuario");
localStorage.clear();
