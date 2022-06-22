function hola(nombre, miCallback) {
    setTimeout(function() {
        console.log('Hola, ' + nombre);
        miCallback(nombre);
    }, 1000);
}

function adios(nombre, otroCallback) {
    setTimeout(function() {
        console.log('Adios, ' + nombre);
        otroCallback();
    }, 1000)
}
//Aquí mando llamar las funciones que ya he hecho, pasándole los parámetros correspondientes para que sea un callback
console.log('Iniciando proceso hdtpm...');
hola('Jonathan', function(nombre) {
    adios(nombre, function() {
        console.log('Terminando proceso hdtpm...');
    })
});

/* hola('Jonathan', function() {})
adios('Jonathan', function() {})
 */