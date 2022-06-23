const os = require('os');

/* Arquitectura del SO */
console.log(os.arch());

/* Plataforma o SO */
console.log(os.platform());

/* Cantidad de núcleos del equipo */
console.log(os.cpus().length);

/* Constantes de error del SO */
console.log(os.constants);

/* Conversiones para la cantidad de memoria */
const size = 1024;
function kb(bytes) {
    return bytes / size;
}

function mb(bytes) {
    return kb(bytes) / size;
}

function gb(bytes) {
    return mb(bytes) / size;
}

/* Cantidad de memoria disponible */
console.log(os.freemem());
console.log(kb(os.freemem()));
console.log(mb(os.freemem()));
console.log(gb(os.freemem()));

/* Cantidad total de memoria */
console.log(gb(os.totalmem()));

/* Directorio raiz */
console.log(os.homedir());

/* Directorio de archivos temporales */
console.log(os.tmpdir());

/* Nombre del equipo host */
console.log(os.hostname());

/* Redes a las que se encuentra conectado */
console.log(os.networkInterfaces());