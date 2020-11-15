'use strict'

// Funciones anónimas.
// es una función que no tiene nombre.

//var pelicula = funcion(nombre) {
//  return "La película es: " + nombre;
//}

function sumame(numero01, numero02, sumaYmuesta, sumaPodDos) {
  var sumar = numero01 + numero02;

  sumaYmuesta(sumar);
  sumaPodDos(sumar);

  return sumar;
}

sumame(5, 7,
function(dato){
// dato => {
  console.log("La suma es: ", dato);
},
function(dato){
// dato => {
  console.log("La suma por dos es: ", (dato*2));
});
