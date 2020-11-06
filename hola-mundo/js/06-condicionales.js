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


/*
Operadores  lógicos.
AND(Y): &&
OR(o): ||
Negación: !
 */

var year = 2018;

// Negación.
if (year != 2016) {
  console.log ("El año no es 2016. Realmente es: " + year);

}

// AND
if(year != 2016 && year <= 2020 && year != 2018){
  console.log("Estamos en la era actual.");
} else {
  console.log("Estamos en la era postmoderna.");
}

// OR
if(year == 2008 || (year >= 2018 && year == 2028)) {
  console.log("El año acaba en 8.");
} else {
  console.log ("AÑO NO REGISTRADO.")
}
