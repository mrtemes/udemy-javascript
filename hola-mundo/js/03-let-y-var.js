'use estrict'

// Pruebas con let y var.

// Prueva con var.
var numero = 40;
console.log(numero);  // Valor 40.

if (true) {
  var numero = 50;
  console.log(numero); // Valor 50.
}

console.log(numero); // Valor 50.

// Prueba con let.
var texto = "Curso de javascript."
console.log(texto) // valor js.

if(true) {
  let texto = "Curso de Laravel 5";
  console.log(texto); // Valor laravel 5.
}
console.log(texto);
