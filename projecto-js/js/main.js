$(document).ready(function() {

  // Slider.
  $('.galeria').bxSlider({
    mode: 'fade',
    captions: true,
    slideWidth: 1200,
    pager: false

  });

  // posts.
  var posts = [
    {
      title: 'Prueba de titulo 1',
      date: "Publicado el " + moment().format("DD") + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sollicitudin lectus non mi iaculis, a eleifend velit venenatis. Donec nec aliquet felis. Sed ut augue ligula. Ut porta faucibus sollicitudin. Aliquam tincidunt sapien vitae lorem fringilla, ac consectetur dolor condimentum. Nam dapibus tincidunt urna a pellentesque. Nunc id tellus at massa feugiat fermentum id nec tortor. Integer consequat mollis arcu id placerat. Quisque feugiat rutrum tortor, non hendrerit mauris vulputate vel. Phasellus a convallis nunc, in tincidunt leo. Maecenas ullamcorper nisl ac nisl mollis tempor. Fusce vel enim dictum nisl consectetur hendrerit. Vestibulum scelerisque massa eu arcu viverra condimentum. Curabitur nec neque leo. Etiam feugiat enim ac tincidunt fermentum. Aenean vel pretium sapien.'

    },
    {
      title: 'Prueba de titulo 2',
      date: "Publicado el " + moment().format("DD") + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sollicitudin lectus non mi iaculis, a eleifend velit venenatis. Donec nec aliquet felis. Sed ut augue ligula. Ut porta faucibus sollicitudin. Aliquam tincidunt sapien vitae lorem fringilla, ac consectetur dolor condimentum. Nam dapibus tincidunt urna a pellentesque. Nunc id tellus at massa feugiat fermentum id nec tortor. Integer consequat mollis arcu id placerat. Quisque feugiat rutrum tortor, non hendrerit mauris vulputate vel. Phasellus a convallis nunc, in tincidunt leo. Maecenas ullamcorper nisl ac nisl mollis tempor. Fusce vel enim dictum nisl consectetur hendrerit. Vestibulum scelerisque massa eu arcu viverra condimentum. Curabitur nec neque leo. Etiam feugiat enim ac tincidunt fermentum. Aenean vel pretium sapien.'

    },
    {
      title: 'Prueba de titulo 3',
      date: "Publicado el " + moment().format("DD") + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sollicitudin lectus non mi iaculis, a eleifend velit venenatis. Donec nec aliquet felis. Sed ut augue ligula. Ut porta faucibus sollicitudin. Aliquam tincidunt sapien vitae lorem fringilla, ac consectetur dolor condimentum. Nam dapibus tincidunt urna a pellentesque. Nunc id tellus at massa feugiat fermentum id nec tortor. Integer consequat mollis arcu id placerat. Quisque feugiat rutrum tortor, non hendrerit mauris vulputate vel. Phasellus a convallis nunc, in tincidunt leo. Maecenas ullamcorper nisl ac nisl mollis tempor. Fusce vel enim dictum nisl consectetur hendrerit. Vestibulum scelerisque massa eu arcu viverra condimentum. Curabitur nec neque leo. Etiam feugiat enim ac tincidunt fermentum. Aenean vel pretium sapien.'

    },
    {
      title: 'Prueba de titulo 4',
      date: "Publicado el " + moment().format("DD") + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sollicitudin lectus non mi iaculis, a eleifend velit venenatis. Donec nec aliquet felis. Sed ut augue ligula. Ut porta faucibus sollicitudin. Aliquam tincidunt sapien vitae lorem fringilla, ac consectetur dolor condimentum. Nam dapibus tincidunt urna a pellentesque. Nunc id tellus at massa feugiat fermentum id nec tortor. Integer consequat mollis arcu id placerat. Quisque feugiat rutrum tortor, non hendrerit mauris vulputate vel. Phasellus a convallis nunc, in tincidunt leo. Maecenas ullamcorper nisl ac nisl mollis tempor. Fusce vel enim dictum nisl consectetur hendrerit. Vestibulum scelerisque massa eu arcu viverra condimentum. Curabitur nec neque leo. Etiam feugiat enim ac tincidunt fermentum. Aenean vel pretium sapien.'

    },
    {
      title: 'Prueba de titulo 5',
      date: new Date(),
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sollicitudin lectus non mi iaculis, a eleifend velit venenatis. Donec nec aliquet felis. Sed ut augue ligula. Ut porta faucibus sollicitudin. Aliquam tincidunt sapien vitae lorem fringilla, ac consectetur dolor condimentum. Nam dapibus tincidunt urna a pellentesque. Nunc id tellus at massa feugiat fermentum id nec tortor. Integer consequat mollis arcu id placerat. Quisque feugiat rutrum tortor, non hendrerit mauris vulputate vel. Phasellus a convallis nunc, in tincidunt leo. Maecenas ullamcorper nisl ac nisl mollis tempor. Fusce vel enim dictum nisl consectetur hendrerit. Vestibulum scelerisque massa eu arcu viverra condimentum. Curabitur nec neque leo. Etiam feugiat enim ac tincidunt fermentum. Aenean vel pretium sapien.'

    },
  ];

  posts.forEach((item, index) => {
    var post = `
      <article class = "post">
        <h2>${item.title}</h2>
        <span class = "date">${item.date}</span>
        <p>
          ${item.content}
        </p>
      </article>
    `;

    $("#posts").append(post);
  });

  // Selector de tema.
  var theme = $("#theme");
  $("#to-blue").click(function() {
    theme.attr("href","css/blue.css");
  });

  $("#to-green").click(function() {
    theme.attr("href","css/green.css");
  });

  $("#to-red").click(function() {
    theme.attr("href","css/red.css");
  });

  // Scroll arriba de la web.
  $('.subir').click(function(e) {
    e.preventDefault();

    $('html, body').animate({
      scrollTop: 0
    }, 500);

    return false;
  });

});
