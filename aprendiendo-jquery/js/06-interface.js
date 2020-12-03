$(document).ready(function() {

  // Mover elemento por la página.
  $(".elemento").draggable();

  // Redimensionar.
  $(".elemento").resizable();

  // Seleccionar elementos.
  //$(".lista-seleccionable").selectable();

  // Seleccionar y ordenar elementos

  $(".lista-seleccionable").sortable({
    update: function(event, ui) {
      console.log("Ha cambiado la lista.");
    }
  });

  // Drop.
  $("#elemento-movido").draggable();
  $("#area").droppable({
    drop: function() {
      console.log("Has soltado algo dentro del area.");
    }
  });

  // Efectos.
  $("#mostrar").click(function() {
    $(".caja-efectos").toggle("shake", 4000);
  });

  // Tooltip.
  $(document).tooltip();

  // Diálogos.
  $("#lanzar-popup").click(function() {
    $("#popup").dialog();
  });

  // Datepicker.
  $("#calendario").datepicker();

  //  Tbas.
  $("#pestanas").tabs();
});
