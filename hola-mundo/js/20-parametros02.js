'use strict'

// Parámetors REST y SPREAD.

function listadoFrutas(fruta01, fruta02, ...resto_de_frutas) {
  console.log("Fruta 1: ", fruta01);
  console.log("Fruta 2: ", fruta02);
  console.log(resto_de_frutas);
  console.log("--------")
}

listadoFrutas("Naranja", "Manzana", "Sandía", "Pera", "Melón", "Coco");

var frutas = ["Naranja", "Manzana"];
listadoFrutas( ...frutas, "Sandía", "Pera", "Melón", "Coco");
