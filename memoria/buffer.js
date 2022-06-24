//let buffer = Buffer.alloc(4);
//let buffer = Buffer.from([1, 2, 5]);
let buffer = Buffer.from('Hola');

console.log(buffer);

// --

/* Esto nos permite asignarle un espacio en la memoria al dato */
let abc = Buffer.alloc(26);
console.log(abc);

/* Aquí asignamos el número correspondiente a la letra en código ASCII */
for(let i = 0; i <26; i++) {
    abc[i] = i + 97;
}

console.log(abc.toString());