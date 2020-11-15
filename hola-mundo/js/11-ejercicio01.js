'use stric'

/*
Programa que pida dos número y que nos diga cual es el mayor, el meno y si son
iguales.
PLUS: Si los números no son un número o son menores o iguales a cero, nos
los vuelva pedir.
 */

var numero01 = parseInt(prompt('Introduce el primer número.'));
var numero02 = parseInt(prompt('Introduce el segundo número.'));

while(numero01 <= 0 || numero02 <=0 || isNaN(numero01) || isNaN(numero02)){
  var numero01 = parseInt(prompt('Introduce el primer número.'));
  var numero02 = parseInt(prompt('Introduce el segundo número.'));
}

if(numero01 == numero02){
  alert("LOS NUÚMEROS SON IGUALES.")
} else if (numero01 > numero02){
  alert ("EL NÚMERO MAYOR ES: " + numero01);
  alert ("EL NUMERO MENOR ES: " + numero02);

} else if (numero02 > numero01) {
  alert ("EL NÚMERO MAYOR ES: " + numero02);
  alert ("EL NUMERO MENOR ES: " + numero01);

} else {
  alert("INTRODUCE NÚMEROS CORRECTOS.")
}
;
