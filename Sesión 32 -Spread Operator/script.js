/* 

Spread Operator (Operador de expansión)

Op Aritméticos -> +, -, /, *
Op Asignación  -> *
Op Comparación -> >, <, >=, <=
Op Lógicos     -> 
Op Expansión   -> ...

El operador de expansión, trabaja con los datos de un array.


*/

/* let numbers = [1,2,3,4,5];

console.log(...numbers); */

/* 

Enviar ellementos de Array a una función.

*/

/* const addNumbers = (a,b,c) => {
    console.log(a + b + c);
}

let numbers = [1,2,3];

addNumbers(...numbers); */


/* 
Añadir un Array a otro Array
*/

/* let pokemones = ['Picachu', 'Charmander', 'bulpasaur']

let newPokemones = ['Ditto', 'Snorlsx'];

pokemones.push(...newPokemones);

console.log(pokemones); */


/* Copiar un array */

/* let numbers = [1,2,3,4,5];
let copyNumbers = [...numbers];

console.log(copyNumbers); */

/* 
Concatenar arrays
*/

/* let numbers1 = [1,2,3,4,5];
let numbers2 = [6,7,8,9,10];


let concaNumbers = [...numbers1, ...numbers2];

console.log(concatNumbers); */

/* Enviar un número indefinido de argumentos de una función (parametros REST) */

/* const restParm = (...numbers) => {
    console.log(numbers);
}

restParm(1,2,3,4,5); */

/* 
Librería Math
*/

/* const numbers = [-14, 5, 4, 10, 40];

console.log(Math.max(...numbers));
console.log(Math.min(...numbers)); */

/* 
Eliminar elementos duplicados
*/

const numbers = [-14, 5, 4, 10, 40, 5, 10];

console.log(new Set (numbers) );




