'use strict';

var categorias = ['Acción', 'Terror', 'Comedia'];
var peliculas = ['La verdad duele', 'La vida es bella', 'Gran torino'];

var cine = [categorias, peliculas];

peliculas.sort();
peliculas.reverse();
console.log(peliculas);

//console.log(cine[0][1]);
//console.log(cine[0][2]);

var elemento = "";
do {
  elemento = prompt("Introduce tu película.", "Acabar");
  peliculas.push(elemento);
} while(elemento != "Acabar")
peliculas.pop;


console.log(peliculas);
peliculas[0] = undefined;
console.log(peliculas);

var indice = peliculas.indexOf('Gran torino');

if(indice > -1) {
  peliculas.splice(indice, 1)
}

console.log(peliculas);

var strPeliculas = peliculas.join();
console.log(strPeliculas);

var cadena = "texto01, texto02, texto03, texto04";
var cadena_array = cadena.split(", ");
console.log(cadena_array);

for(let pelicula in peliculas){
  console.log(peliculas[pelicula]);
}

// Búsquedas.

var busqueda = peliculas.find(function(pelicula) {
  return pelicula == "La verdad duele";
});

console.log(busqueda);

var busqueda = peliculas.find(pelicula => pelicula == "La verdad duele");

console.log(busqueda);
var busqueda = peliculas.findIndex(pelicula => pelicula == "La verdad duele");
console.log(busqueda);

var precios = [10, 20, 50, 80, 12];
var busqueda = precios.some(precio => precio => 20);
console.log(busqueda);
