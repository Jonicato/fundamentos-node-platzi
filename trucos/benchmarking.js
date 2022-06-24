let suma = 0;

console.time('todo');
console.time('bucle');

for (let i = 0; i < 100000000; i++) {
    suma += 1;
}

console.timeEnd('bucle');

console.time('bucle2');

for (let j = 0; j < 1000000000; j++) {
    suma += 1;
}

console.timeEnd('bucle2');

console.time('asincrono');
console.log('Empieza el proceso asíncrono');
asincrona()
    .then(() => {
        console.timeEnd('asincrono');
    });

console.timeEnd('todo');

function asincrona() {
    return new Promise((resolve) => {
        setTimeout(function() {
            console.log('Termino el proceso asíncrono');
            resolve();
        }, 1000);
    });
}