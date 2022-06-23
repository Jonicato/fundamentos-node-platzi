const { exec, spawn } = require('child_process');

/* La función exec nos permite ejecutar un proceso ajeno o no ajeno al proyecto */
exec('node modulos/consola.js', (err, stdout, sterr) => {
    if(err) {
        console.error(err);
        return false;
    }

    console.log(stdout);
});

/* Esto nos funciona como si se ejecutar la línea de comandos */
let proceso = spawn('cmd.exe', ['/c', 'dir']);

console.log(proceso.pid);
console.log(proceso.connected);

/* También hay módulos que nos permiten monitorear todas las propiedades de los procesos */
proceso.stdout.on('data', function(dato) {
    console.log('¿Está muerto?');
    console.log(process.killed);
    console.log(dato.toString());
});

proceso.on('exit', function() {
    console.log('El proceso terminó');
    console.log(proceso.killed);
});