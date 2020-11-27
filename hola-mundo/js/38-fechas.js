'use estrict'

var fecha = new Date();
var year = fecha.getFullYear();
var mes = fecha.getMonth();
var dia= fecha.getDate();
var hora= fecha.getHours();


var textoHora = `
  el año es: ${year}
  el mes es: ${mes}
  el día es: ${dia}
  la hora es: ${hora}
`;

console.log(textoHora);
console.log(Math.ceil(Math.random() * 10000));
