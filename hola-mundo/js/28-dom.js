'use strict'

function cambiaColor(color) {
  caja.style.background = color;
}

// Conseguir elementos con ID concreto.
//var caja = document.getElementById("micaja");
var caja = document.querySelector("#micaja");
caja.innerHTML = "¡Texto en la caja desde .js!";
console.log(caja);
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";
caja.className = "hola";

// Coseguir elementos por su etiqueta.
var todosLosDivs = document.getElementsByTagName('div');
console.log(todosLosDivs);

var contenidoEnTexto = todosLosDivs[2];
//contenidoEnTexto.innerHTML = "Otro texto para el segundo elemento.";
var seccion = document.querySelector("#miseccion");
var hr = document.createElement("hr");


var valor;
for(valor in todosLosDivs) {
  var parrafo = document.createElement("p");
  var texto = document.createTextNode(valor);
  parrafo.append(texto);
  seccion.append(parrafo);
}

seccion.append(hr);

// Conseguir elmentos por su clase css.
var divsRojos = document.getElementsByClassName('rojo');
var divsAmarillos = document.getElementsByClassName('amarillo');
divsAmarillos[0].style.background = "yellow";

var div;
for(div in divsRojos) {
  if(divsRojos[div].className == "rojo") {
    divsRojos[div].style.background = "red";
  }

}

 console.log(divsRojos);

// Query selector.
var claseRojo = document.querySelector(".rojo");
console.log(claseRojo);

// https://developer.mozilla.org/es/docs/Web/API/Document/querySelectorAll
