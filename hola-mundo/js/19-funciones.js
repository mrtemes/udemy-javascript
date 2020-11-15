'use strict'

// Funciones.
// Una función es una agrupación reutilizable de un conjunto de instrucciones.

// Se define la función.

function porConsola(numero01, numero02){
  console.log("Suma: " + (numero01 + numero02));
  console.log("Resta: " + (numero01 - numero02));
  console.log("Multiplicación: " + (numero01 * numero02));
  console.log("División: " + (numero01 / numero02));
  console.log("------------------")
}

function porPantalla(numero01, numero02){
  document.write("Suma: " + (numero01 + numero02) + "<br/>");
  document.write("Resta: " + (numero01 - numero02) + "<br/>");
  document.write("Multiplicación: " + (numero01 * numero02) + "<br/>");
  document.write("División: " + (numero01 / numero02) + "<br/>");
  document.write("------------------" + "<br/>")
}

function calculadora(numero01, numero02, mostrar = false) {
  // Conjunto de instrucciones a ejecutar.
  if (mostrar == false){
    porConsola(numero01, numero02);
  } else  {
    porPantalla(numero01, numero02);
  }

  return true;
  //return "Hola soy la calculadora!!";
}

// Invocar o llamar a la función.
calculadora(1,4);
calculadora(2, 5, true);
calculadora(4, 5, true);
//calculadora(98,2);
