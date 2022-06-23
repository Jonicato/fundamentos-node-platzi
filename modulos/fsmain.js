const fs = require('./fspromesas');

const contenido =
`Hola amigos
nueva linea
Bienvenidos a mi código`;

main('./archivo1.txt');

async function main(path) {
    await fs.escribir(path, contenido);
    const data = await fs.leer(path);
    console.log(data);
    await esperar(path);
}

async function esperar(path) {
    setTimeout(() => {
        fs.borrar(path);
    }, 3000);
}
