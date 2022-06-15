/* 
Template strings

Cadenas de texto qque permiten simplificar el codigo cuando queremos concatenar datos.

Se delimitan con dos tildes invertidas o acentos graves:

    `Template String`

Pueden tener "expresiones, se identifican con el signo del dolar y envueltas en llaves"

    ${}  <- Marcador

Una expresión es cualquier unidad de código válido que se resuelve en un valor. 

    x = 'gato'  -   Asignación
    3 + 4       -   Aritmética
    true == true   -    Lógica
${expresion}

*/

var nombre = Luis;
var apellido = Olivares;
var edad = 20;
console.log('Hola' + nombre + ' ' + apellido + 'tienes ' + años + edad); 

//Así itilizamos Template strings
console.log(`Hola ${nombre} ${apellido} tienes ${edad} años`);

document.write (`El siguiente año tendras ${edad + 1 } años`);

