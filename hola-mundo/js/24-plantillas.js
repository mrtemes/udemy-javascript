'use estrict'

// plantillas de texto.

var nombre = prompt("Ingresa tu nombre.");
var apellidos = prompt("Ingresa tus apellidos.")

// var texto = " Mi nombre es: " + nombre + " <br/>" + " Mis apellidos son: " + apellidos;

var texto = `
  <h1>Hola qué tal!!!</h1>
  <h3>Mi nombre es: ${nombre}</h3>
  <h3>Mi apellidos son: ${apellidos}</h3>
`;
document.write(texto);
