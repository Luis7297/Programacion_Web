

/* var miArray=['Dato1','Dato2', 'Dato3'];
var arrMulti=[
    ['Dato1'], ['Dato2'], ['Dato3'], // Indice 0
    ['Dato1'], ['Dato2'], ['Dato3'], // Indice 1
    ['Dato1'], ['Dato2'], ['Dato3'], // Indice 2
    // Sub 0      Sub 1     Sub 2
]; */

/* 
Definir array vacío
 */

var pokemones=[];


/* 
Traer los datos de los inputs
 */

var nombre=document.getElementById('nombre');
var tipo=document.getElementById('tipo');
var poder=document.getElementById('poder');
var mensaje = document.getElementById('mensaje');

var agregar = document.getElementById('agregar');
agregar.addEventListener('click', agregarPokemon);

var mostrar = document.getElementById ('mostrar');
mostrar.addEventListener ('click' ,mostrarPokemon)

/* Definir la función que agrega pokemones al array */


function agregarPokemon(){
    /* Aquí va nuestro código */

/* 
Así agrgegamos datos a un array con push:
pokemones.push('Pikachu','Eléctrico', 1000);
*/

/* Puedo sustituir lo anterior con: */
pokemones.push([nombre.value, tipo.value, poder.value]);

var i = pokemones.length - 1;

// Imprimimos el mensaje de la etiqueta p id mensaje

mensaje.innerHTML = 'Se agregó a ' + pokemones[i][0];

}

/* Definir la función que mustra pokemones del array */

function mostrarPokemon (){
    document.write(
        '<ul>' +
        '<li><img src="IMAGENES/' + pokemones[0][0] + '.png" alt="Imagen Pokemon"></li>' +
        '<li>Pokemon: ' + pokemones[0][0] + '</li>' +
        '<li>Tipo: ' + pokemones[0][1] + '</li>' +
        '<li>Poder ' + pokemones[0][2] + '</li>' +
        '</ul>'
        );
}