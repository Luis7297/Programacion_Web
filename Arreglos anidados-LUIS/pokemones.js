//Definimos nuestro arreglo multidimensional con los datos de los pokemones.

var pokemones = [
    ['Jigglypuff', 'Hada', 1000], //Indice 0
    ['Ditto', 'Shapeshifter', 900], //Indice 1
    ['Metapod', 'Planta', 10] //Indice 2
    //    0         1      2
];

// Creamos las variables que traeran el id de HTML

var miImagen = document.getElementById('imagen');
var miNombre = document.getElementById('nombre');
var miTipo = document.getElementById('tipo');
var miPoder = document.getElementById('poder');

//Definimos Variable que sustituya numeros asignados
var numero = prompt ("Elige un numero del 0 al 2");

//Insertar texto dentro del elemento HTML

miImagen.innerHTML = '<img src="IMAGENES/' + pokemones[numero][0] + '.png">';
miNombre.innerText = 'Pokemon: ' + pokemones[numero][0];
miTipo.innerText = 'Pokemon: ' + pokemones[numero][1];
miPoder.innerText = 'Poder: ' + pokemones[numero][2];

