/* Declaramos los valores que se van a imprimir en la tabla */
var tabla = [
    {
        a: 1,
        b: 'Z'
    },
    {
        a: 2,
        b: 'Otra'
    }
]

console.table(tabla);

/* Agrupamos console.log para identarlos */
console.group('Conversación');
console.log('Hola');
console.group('Bla');
console.log('Blablabla');
console.log('Blablabla');
console.log('Blablabla');
console.log('Blablabla');
console.groupEnd('Bla');
console.log('Adiós');
console.groupEnd('Conversación');

console.log('Otra cosa de otra función');

/* Los groups pueden ser útiles en las funciones y procesos */
function funcion1() {
    console.group('funcion 1');
    console.log('Esto es de la función 1');
    console.log('Esto también es de la función 1');
    funcion2();
    console.log('He vuelto a la funcion 1');
    console.groupEnd('funcion 1');
}

function funcion2(){
    console.group('funcion 2');
    console.log('Ahora estamos en la función 2');
    console.groupEnd('funcion 2');
}

console.log('Empezamos');
funcion1();

/* Podemos llevar una impresión de contador */
console.count('veces');
console.count('veces');
console.count('veces');
console.count('veces');
console.countReset('veces');
console.count('veces');