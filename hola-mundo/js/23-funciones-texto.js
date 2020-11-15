'use strict'

// Trasnformación de textos.
var numero = 444;
var texto01 = "Bienvenido al curso de JavaScript."
var texto02 = "Es muy buen curso."

var dato = numero.toString();
    dato = texto01.toLowerCase();
    dato = texto02.toUpperCase();
console.log(dato);

// Calcular longitud.
var nombre = "Me gusta este curso.";
console.log(nombre.length);

// Concatenar.
var textoTotal = texto01 + " " + texto02;
console.log(textoTotal);
    textoTotal = texto01.concat(" " + texto02);

var busqueda = texto01.indexOf("curso");
console.log(busqueda);

var busqueda = texto01.lastIndexOf("curso");
console.log(busqueda);

var busqueda = texto01.search("curso");
console.log(busqueda);

var busqueda = texto01.match(/curso/g);
console.log(busqueda);

var busqueda = texto01.substr(14, 5);
console.log(busqueda);

var busqueda = texto01.charAt(24);
console.log(busqueda);

var busqueda = texto01.startsWith("Bienv");
console.log(busqueda);

var busqueda = texto01.endsWith("ipt.");
console.log(busqueda);

var busqueda = texto01.includes("JavaScript");
console.log(busqueda);

var busqueda = texto01.replace("JavaScript", "Ukelele");
console.log(busqueda);

var busqueda = texto01.slice(14);
console.log(busqueda);

var busqueda = texto01.slice(14, 22);
console.log(busqueda);

var busqueda = texto01.split(" ");
console.log(busqueda);

var busqueda = texto01.trim();
console.log(busqueda);
