'use strict'

// BOM - Browser Object Model

function getBom() {
  //console.log(window.innerWidth);
  //console.log(window.innerHeight);
  console.log(screen.width);
  console.log(screen.height);
  console.log(window.location);
}

function redirec(url) {
  window.location.href = url;
}

function abrirVentana(url) {
  window.open(url);
}

getBom();
