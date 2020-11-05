'use strict'

// Condicional IF.
// Si A es igual a B entonces hacer algo.
var edad01 = 10;
var edad02 =12;

// Si sucede esto.
if(edad01 > edad02) {
  // Ejecuta esto.
  console.log("Edad uno es mayor que edad dos.");
} else {
  console.log("La edad uno es inferior a edad dos.")
}

var edad = 50;
var nombre = 'David Suarez.'

/*
  Operadores relacionales.
  Mayor: >
  Menor: <
  Mayor o igual: >=
  Menor o igual: <=
  Igual: ==
  Distinto: !=
 */
if (edad >= 18) {
  console.log(nombre + " tiene " + edad + " años, es mayor de edad.");

  if (edad <= 33) {
    console.log("Todavía es millenal.");
  } else if (edad >= 70){
    console.log("Es anciano.");
  } else {
    console.log("Ya no es millenal.");
  }

} else {
  console.log(nombre + " tiene " + edad + " años, es menor de edad.");
}
