const moment = require('moment');

let ahora = moment();

/* Nos permite parsear la fecha que nos devuelve del sistema */
console.log(ahora.toString());

/* Nos permite darle formato a la fecha */
console.log(ahora.format('YYYY/MM/DD - HH:mm'));