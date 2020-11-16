'use strict'

// Eventos del ratón.

window.addEventListener('load', () => {

  function cambiarColor() {
    console.log("Me has hecho click.")

    var bg = boton.style.background;
    if(bg == "green") {
      boton.style.background = "red";

    } else {
      boton.style.background = "green";

    }

    boton.style.pading = "10px";
    boton.style.border = "1px solid #ccc";

    return true;
  }

  var boton = document.querySelector("#boton");

  // Click.
  boton.addEventListener('click', function() {
    cambiarColor();
  });

  // Mouse over.
  boton.addEventListener('mouseover', function() {
    boton.style.background = 'yellow';
  });

  // Mouse out.
  boton.addEventListener('mouseout', function() {
    boton.style.background = 'white';
  });

  // Focus.
  var input = document.querySelector("#campo_nombre");
  input.addEventListener('focus', function(){
    console.log("[Focus] Estás dentro del input.");
  })
  // blur.
  input.addEventListener('blur', function(){
    console.log("[blur] Estás fuera del input.");
  })
  // Keydown.
  input.addEventListener('Keydown', function(){
    console.log("[Keydown] Estás pulsando tecla "); // String.fromCharCode(event.keycode)
  })
  // Keypress.
  input.addEventListener('Keypress', function(){
    console.log("[Keypress] Tecla presionada. ");
  })
  // Keyup
  input.addEventListener('Keyup', function(){
    console.log("[Keyup] Tecla soltada. ");
  })

}); // End load.
