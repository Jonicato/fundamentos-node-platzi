//const process = require('process');

process.on('beforeExit', () => {
    console.log('El proceso va a terminar');
});

process.on('exit', () => {
    console.log('Oye, el proceso acabó');
    setTimeout(() => {
        console.log('Esto no se va a ver nunca');
    }, 0);
});

setTimeout(() => {
    console.log('Esto sí se va a ver');
}, 0);

/* Esto me ayuda a atrapar un error que no se haya controlado */
process.on('uncaughtException', (err, origen) => {
    console.error('Se nos ha olvidado capturar un error');
    setTimeout(() => {
        console.log('Esto viene desde las excepciones');
    }, 0);
    console.error(err);
})
//process.on('unhandleRejection');

//functionQueNoExiste();

console.log('Esto si el error no se recoge, no sale');