const fs = require('fs').promises;

async function escribir(path, contenido) {
    try{
        await fs.writeFile(path, contenido);
        console.log('Archivo escrito correctamente');
    } catch(error) {
        console.error(error);
    }
}

async function leer(path) {
    try {
        const data = await fs.readFile(path);
        return data.toString();
    } catch(error) {
        console.error(error);
    }
}

function borrar(path) {
    try {
        fs.unlink(path);
        console.log('Se ha borrado exitosamente');
    } catch(error) {
        console.error(error);
    }
}

exports.escribir = escribir;
exports.leer = leer;
exports.borrar = borrar;