$(document).ready(function() {
  var caja = $("#caja");
  $("#caja").hide();

  $("#mostrar").click(function(){
    $(this).hide();
    $("#ocultar").show();
    //$("#caja").show('nomal');
    //$("#caja").fadeIn('fast');
    caja.slideDown('slow', 1);
  });

  $("#ocultar").click(function(){
    $(this).hide();
    $("#mostrar").show();
    //$("#caja").hide('normal');
    //$("#caja").fadeOut('slow');
    caja.slideUp('slow', function() {
      console.log("Catel oculatado.");
    });

  });

  $("#todoenuno").click(function() {
    caja.slideToggle('fast');
  });

  $("#animar").click(function() {
    caja.animate({
      marginLeft: '500px',
      fontSize: '40px',
      height: '110px'
    }, 'slow')
    .animate({
      borderRadius: '900px',
      marginTop: '80px'
    }, 'slow')
    .animate({
      borderRadius: '0px',
      marginLeft: '0px'
    }, 'slow')
    .animate({
      borderRadius: '100px',
      marginTop: '0px'
    }, 'slow')
    .animate({
      marginLeft: '500px',
      fontSize: '40px',
      height: '110px'
    }, 'slow');
  });

});
