$(document).ready(function() {
  // Selector de ID.
  rojo = $("#rojo").css("background", "red")
                        .css("color", "white");

  amarillo = $("#amarillo").css("background", "yellow")
                                .css("color", "green");


  verde = $("#verde").css("background", "green")
                                .css("color", "white");

  // Selectores de clase.
  var mi_clase = $(".zebra").css("padding", "4px");

  $(".sin_borde").click(function(){
    console.log("Click dado!!");
    $(this).addClass('zebra');
  });
  //console.log(mi_clase[0]);

  // Selectores de etiqueta.
  var parrafos = $('p').css("cursor", "pointer");

  parrafos.click(function() {
    var that = $(this);
    if(!that.hasClass('grande')) {
      that.addClass('grande');
    } else {
      that.removeClass('grande');
    }

  });

  // Selectores de atributo.
  $('[title="Google"]').css('background', '#ccc');
  $('[title="Facebook"]').css('background', 'blue');

  // Otros.
  //$('p, a').addClass('margen-superior');
  //var busqueda = $("#elemento02").eq(0).parent().parent().parent().find('[title="Google"]');
  var busqueda = $("#elemento02").parent().find('.resaltado');
  console.log(busqueda);
})
