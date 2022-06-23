function hola(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log('Hola, ' + nombre);
            resolve(nombre);
        }, 1000);
    });
}

function hablar(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log('Bla bla bla bla...');
            resolve(nombre);
            //reject('Hay un error');
        }, 1000);
    });
}

function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log('Adios, ' + nombre);
            console.log('Terminando el proceso');
            resolve();
        }, 1000);
    });
}

console.log('Iniciando el proceso...');
hola('Jonathan')
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(adios)
    .catch(error => {
        console.error('Ha habido un error:');
        console.error(error);
    });