/* 

Métodos array 2

    Son funciones que van a recorrer el arreglo, modifican su comportamiento, nos pueden regresar arrays y se usa la nomenclatura del punto '.'


    array.metodo(callback);

Los métodos usaran un cllback dentro de los parentesis

Un callback es una función que se ejecuta dentro de otrafunción

*/

/* 

FROM


.from (iterable)

Convierte en array el elemento iterable (recorrer).


*/

/* let word = "Hola Mundo";

Array.from(word);

console.log (Array.from(word) ); */

/* 

SORT

.sort()

Organiza los elementos del array deacuerdo a su valor único 
(Orden alfabético)


*/

/* let games = ['Mario Bros', 'Zelda', 'Donkey Kong','Street fighter', 'Ms Pacman'];

games.sort();

console.log (games.sort());

let score = [1000, 800, 234, 10, 4000, 2];

console.log(score.sort( (a,b) => a - b  ) );
console.log(score.sort( (a,b) => b - a  ) ); */


/* 

CALLBACK de comparación - Orden Asecendente

    
(a - b) < 0 = -1
(a - b) == 0 = 0
(a - b) > 0 = 1

1000 - 800 = 200 = 1
800 - 234 = 566 = 1
234 * 10 = 234
10- 4000 = -3990 = -1
4000 - 1 = 3999 = 1
1   - 0 = 1 = 1

*/


/* 
FOR EACH

    .FOReach(callback (currentValue, [index]))

    Ejecuta la función indicada una vez por cada elemento del array

*/


/* let pokemones = ['Ditto', 'Snorlax', 'Chikorita', 'Arcanine', 'Cubone'];

// pokemones.forEach( (pokemon) => console.log(pokemon) );

pokemones.forEach ( (pokemon, index) => console.log (`${pokemon} está en la posición ${index}`) ) ; */

/* 

SOME

    .some(callback)

    Comprueba si al menos UNO de los elementos del array cumple con la condición del collback

EVERY

    .every(callback)

    Comprueba si TODOS los elementos del array cumplen con la condición

    Resukltado será

    True => si cumple
    False => si no cumple

*/

/* let words = ['HTML', 'CSS', 'PHP', 'JavaScript', 'Git'];

// console.log( words.some( (word) => word.length == 10 ) );
console.log( words.every( (word) => word.length > 2 ) ); */

/* 
MAP

    .map(callback)

    Transforma todos los elementos del Array y devolver un nuevo Array

*/


/* let numbers = [1, 2, 3, 4, 5];

let numbersDoble = numbers.map( (number)  => number * 2);

console.log(numbersDoble); */

/* 

FILTER

    .filter(callback)

    Filtra todos los elementos del Array que cumplan con la condición del callback y devuelve un nuevo Array

*/

/* let numbers = [10, 20, 30, 40, 50];

let numberFilter = numbers.filter ( (number) => number => 30); 

console.log (numberFilter); */


/* 

REDUCE

    .reduce(callback)

    Reduce todos los elementos del array a un único valor

*/

let numbers = [1, 2, 3, 4, 5];

console.log(numbers.reduce( (a, b)=> a + b ) );
console.log(numbers.reduce( (a, b)=> a - b ) );