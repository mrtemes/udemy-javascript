$(document).ready(function() {
  //console.log("hola");

  // Load.
  // $("#datos").load("https://reqres.in/");

  // Get y Post.

  $.get("https://reqres.in/api/users", {page: 2}, function(response) {
    console.log(response);
    response.data.forEach((element, index) => {
      $("#datos").append("<p>" + element.first_name +  "   " + element.last_name + "</p>");

    });

  });

  $("#formulario").submit(function(e) {
    e.preventDefault();

    var usuario = {
      name: $('input[name = "name"]').val(),
      web: $('input[name = "web"]').val()

    };

    /*
    //console.log(usuario);
    $.post($(this).attr("action"),usuario, function(response) {
      console.log(response);

    }).done(function() {
      alert("Usuario añadido correctamente.")
    });
    */

    $.ajax({
      type: 'post',
      //dataType: 'json',
      //contentType: 'application/json',
      url: $(this).attr("action"),
      data: usuario,
      beforeSend: function() {
        console.log("Enviando usuario...");
      },
      succes: function(response) {
        console.log(response);
      },
      error:  function() {
        console.log("Ha ocurrido un error.");
      },
      timeout: 1000

    })

    return false;
  });

});
