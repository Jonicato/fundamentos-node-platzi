function otraFuncion() {
    seRompe();
}

function seRompe() {
    return 3 + z;
}

/* Cuando se trata de una función asíncrona, es necesario hacer el try catch adentro del proceso, debido a que ya no está dentro de nuestro event loop, sino en el thread */
function seRompeAsincrona(cb) {
    setTimeout(function() {
        try {
            return 3 + z;
        } catch(err) {
            console.error('Error en mi función asíncrona');
            cb(err);
        }
    });
}

try {
    //otraFuncion();
    seRompeAsincrona(function(err) {
        console.log(err.message);
    });
} catch(err) {
    console.log('Ups! Parece que algo se ha roto D:');
    console.error(err);
    console.log('Pero no pasa nada, lo hemos capturado nwn');
}

console.log('Esto de aquí está al final ;3');