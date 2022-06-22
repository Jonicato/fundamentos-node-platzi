function hola(nombre, miCallback) {
    setTimeout(function() {
        console.log('Hola, ' + nombre);
        miCallback(nombre);
    }, 1000);
}

function hablar(callbackHablar) {
    setTimeout(function() {
        console.log('Bla bla bla bla...');
        callbackHablar();
    }, 1000)
}

function adios(nombre, otroCallback) {
    setTimeout(function() {
        console.log('Adios, ' + nombre);
        otroCallback();
    }, 1000)
}
//Aquí mando llamar las funciones que ya he hecho, pasándole los parámetros correspondientes para que sea un callback

function conversacion(nombre, veces, callback) {
    if(veces > 0){
        hablar(function() {
            conversacion(nombre, --veces, callback);
        })
    } else {
        adios(nombre, callback);
    }
}

console.log('Iniciando proceso hdtpm...');
hola('Jonathan', function(nombre) {
    conversacion(nombre, 3, function() {
        console.log('Proceso terminado')
    });
});


/* hola('Jonathan', function(nombre) {
    hablar(function() {
        hablar(function() {
            hablar(function() {
                adios(nombre, function() {
                    console.log('Terminando proceso hdtpm...');
                });
            });
        });
    });
}); */
