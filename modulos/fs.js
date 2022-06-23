const fs = require('fs');

/* Leer un archivo */
function leer(ruta, cb) {
    fs.readFile(ruta, (err, data) => {
        console.log(data.toString());
    });
}

/* Escribir un archivo nuevo */
function escribir(ruta, contenido, cb){
    fs.writeFile(ruta, contenido, (err) => {
        if(err) {
            console.error('No he podido escribirlo', err);
        } else {
            console.log('Se ha escrito correctamente');
        }
    });
}

/* Eliminar un archivo */
function borrar(ruta, cb) {
    fs.unlink(ruta, (err) => {
        if(err) {
            console.error('No he podido eliminarlo', err);
        } else {
            console.log('Se ha eliminado correctamente');
        }
    });
}

//escribir(__dirname + '/archivo1.txt', 'Soy un archivo nuevo', console.log)
//leer(__dirname + '/archivo1.txt', console.log);
//borrar(__dirname + '/archivo1.txt', console.log)