console.log(setInterval);
let i = 0;

/* Es algo parecido a un ciclo. La instrucción que haya dentro de él se estará repitiendo hasta que se limpie el intérvalo */
let intervalo = setInterval(function() {
    console.log('Hola usuario');
    if(i === 3) {
        clearInterval(intervalo);
    }
    i++
}, 1000);

/* Esta insturcción hace que el código dentro se ejecute inmediatamente */
setImmediate(function() {
    console.log('Hola mundo');
})

/* Esto es un ejemplo de cómo usar una variable global */
globalThis.miVariable = 'elValor';
console.log(miVariable);