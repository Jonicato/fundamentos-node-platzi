let nombre = process.env.NOMBRE || 'amigo, no ingresó ningún nombre :3';
let web = process.env.MI_WEB || 'no tengo web';

console.log('Hola ' + nombre);
console.log('Mi web es ' + web);