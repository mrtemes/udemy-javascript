'use strict'


// Bucle.
//
var year = 2018;

while(year != 1991) {
  // Ejecuta esto.
  console.log("Estamos en el año " + year);

  if(year == 2000) {
    break;
  }
  year--;
}

// Do while.

var year = 30;

do{
    alert("Sólo cuand sea diferente a 20");
    year--;
} while (year >= 25)
