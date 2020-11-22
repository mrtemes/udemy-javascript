'use strict'

window.addEventListener('load', function() {
  console.log("DOM cargado!!");

  var formulario = document.querySelector("#formulario");
  var box_dahed = document.querySelector(".dashed");
  box_dahed.style.display = "none";

  formulario.addEventListener('submit', function() {
    console.log("Evento submit capturado.");

    var nombre = document.querySelector("#nombre").value;
    var apellidos = document.querySelector("#apellidos").value;
    var edad = parseInt(document.querySelector("#edad").value);

    if(nombre.trim() == null || nombre.trim().length == 0) {
      alert("El nombre no es válido.")
      document.querySelector("#error_nombre").innerHTML = "El nombre no es válido";
      return false;
    } else {
      document.querySelector("#error_nombre").style.display = "none";
    }

    if(apellidos.trim() == null || apellidos.trim().length == 0) {
      alert("El apellido no es válido.")
      return false;
    }

    if(edad == null || edad <= 0 || isNaN(edad)) {
      alert("La edad no es válida.")
      return false;
    }

    box_dahed.style.display = "block";
    var datos_usuario = [nombre, apellidos, edad];

    var indice;
    for(indice in datos_usuario) {
      var parrafo = document.createElement("p");
      parrafo.append(datos_usuario[indice]);
      box_dahed.append(parrafo);
    }

  });
});
