'use strict'

window.addEventListener('load', function() {
  // timers.
  function intervalo() {
      var tiempo = setInterval(function () {
        // setTimeout.
        console.log("Set inerval ejecutado.");

        var encabezado = document.querySelector("h1");
        if (encabezado.style.fontSize == "50px") {
          encabezado.style.fontSize = "30px";
        } else {
          encabezado.style.fontSize = "50px";
        }

      }, 1000);

      return tiempo;
  }

  var tiempo = intervalo();

  var start = document.querySelector("#start");

  start.addEventListener("click", function() {
    intervalo();
    alert("Has iniado el intervalo en bucle");
  })

  var stop = document.querySelector("#stop");

  stop.addEventListener("click", function() {
    clearInterval(tiempo);
    alert("Has parado el intervalo en bucle");
  })
});
