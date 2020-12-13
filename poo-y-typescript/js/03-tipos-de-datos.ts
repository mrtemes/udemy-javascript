// string.
let cadena: string = 'Manuelito';

// number.
let numero: number = 12;

// boleano.
let verdadero_falso: boolean = true;

// any.
let cualquiera: any = "Hola";

// arrays.
var lenguajes: Array<string> = ["PHP", "JS", "CSS"];

let years: number[] = [12, 13, 14];

// multiple tipo de datos.
let multiple: string | number = "Manuelote."

// Tipos personalizado.
type letrasonumeros = string | number;

let otro: letrasonumeros = "Super Temes."

// let vs var.
var numero01= 10;
var numero02= 55;

if(numero01 == 10) {
  let numero01 = 44;
  var numero02 = 55;

  console.log(numero01, numero02);
}

console.log(numero01, numero02);

console.log(cadena, numero, verdadero_falso, cualquiera, lenguajes, years, multiple, otro);
