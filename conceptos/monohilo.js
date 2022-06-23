console.log('Hola mundo');

setInterval(function() {
    console.log('Soy el devorador de memoria. Si no me detienes, consumiré toda tu memoria >:3');
}, 1000);

let i = 0;
setInterval(function() {
    console.log(i);
    i++;

    /* if (i === 5 ) {
        Aquí se forza un error porque z no está declarado por ningún lado
        let a = 3 + z;
    } */
}, 1000);

console.log('Última instrucción');