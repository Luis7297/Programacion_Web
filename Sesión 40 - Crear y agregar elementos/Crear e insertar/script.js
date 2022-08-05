/* 

DOM · Crear e insertar elementos

Crear un elemento

    document.createElement('ELEMENT'); 
    Escribir elemento en mayúsculas y guardarlo en una constante

Añadir contenido

    element.textContent = 'text' -> Escribe solo texto
    element.innerHTML = '<i>text</i>' -> Escriben etiquetas html y son interpretadas por el navegador.
    element.innerText = 'text' -> Está en desuso (ie) 

Añadimos al DOM 

    parent.appendChild(element);

    El elemento siempre tiene que ser hijo de alguien.

*/

/* Añadir contenidos a un elemento existente */

//const title = document.getElementById('title');

//title.textContent = '¡Hola nariz de bola!';
//title.innerHTML = '<i>¡Hola nariz de bola!</i>';
//title.innerText = 'Estoy Obsoleto';

/* 

Crear elemento

*/

//const paragraph = document.createElement ('P');
//paragraph.textContent = "Yo sólo sé, que no sé nada...";
//document.body.appendChild(paragraph);

/* 

Localizamos al papá por id y le agregamos a su hijo

*/

const main = document.getElementById('main');

const subtitle = document.createElement('h2');
subtitle.textContent = 'Woohoo! Ya es viernes...';

main.appendChild(subtitle);