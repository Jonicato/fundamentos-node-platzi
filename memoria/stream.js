const fs = require('fs');
const stream = require('stream');
const util = require('util');

let data = '';

let readableStream = fs.createReadStream(__dirname + '/input.txt');
readableStream.setEncoding('UTF8');

/* readableStream.on('data', function(chunk) {
    //console.log(chunk);
    data += chunk;
});

readableStream.on('end', function() {
    console.log(data);
}); */

/* process.stdout.write('hola')
process.stdout.write('que')
process.stdout.write('tal') */

/* Creamos una constante que almacena la función de Transform */
const Transform = stream.Transform;

/* En esta parte del código es donde se llevará a cabo la transformación, es por ello que utiliza la función this */
function Mayus() {
    Transform.call(this);
}

/* En esta parte, creamos una instancia de Mayus, Transform. Establece la clase Transform como prototipo de la función Mayus. Node recomienda no usarla. */
util.inherits(Mayus, Transform);

/* La transformación que se realizará será personalizada */
Mayus.prototype._transform = function(chunk, codif, cb) {
    chunkMayus = chunk.toString().toUpperCase();
    this.push(chunkMayus);
    cb();
}

/* Creamos una instancia de la función Mayus */
let mayus = new Mayus();

/* pipe limita el almacenamiento en el buffer para que no haya una sobresaturación a la hora de pasar la sencuencia de datos */
readableStream
    .pipe(mayus)
    .pipe(process.stdout);