'use strict'

// Arrays, arreglos, matrices.

var nombre = "Manuel Rio";
var nombres = ["Manuel Rio", "José López", "Luis Ramudo", "Manuel Barrienteos", 53, true];

var lenguajes = new Array("PHP", "JS", "Go", "Java", "C#", "Pascal");

console.log(nombres);
console.log(lenguajes);

console.log(nombres[2]);
console.log(nombres.length);

var elemento = parseInt(prompt("Qué elmentos del array deseas??",0));

if (elemento >= nombre.length) {
  alert("Introduce el número correcto menor que " + nombres.length)
} else {
  alert("El usuaio seleccionado es: " + nombres[elemento]);
}

document.write("<h1>Lenguajes de programación del 2018.</h1>");
document.write("<ul>");

/*for(var i = 0; i < lenguajes.length; i++){
  document.write("<li>" + lenguajes[i] + "</li>");
}*/

lenguajes.forEach((elemento, indice) => {
  document.write("<li>" + indice + "  - " + elemento + "</li>");
});

document.write("</ul>");
