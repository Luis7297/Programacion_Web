/* 
    ID

    document.getelEmentById('id') ->
    Accedemos a un elemento a traves de su id.

    - Los id´s de escriben como strings " o ".
    -Se recomiendo que el elemento sea guardado en una constante.

*/

//const titulo = document.getElementById('title');
//console.log(titulo);
//console.log(titulo.textContent);

/* 

.textContent -> Nos va a servir para mostrar el contenido de tecto y/o modificarlo

*/

//titulo.textContent = 'Cambio de información';
//console.log(titulo.textContent);


/* 

    SELECTOR CSS

    document.querySelector('selectorCSS') -> vamos a acceder al primer elemento que coincida con el selector CSS.

    -Los selecyores se escriben como strings entre '' o ""
    -Se guardan en una constante

*/

//const title = document.querySelector(´h1´); //tag
//const title = document.querySelector('#title'); //ID
//const title = document.querySelector('.title');
console.log(title);


/* 

    Acceso a traves de clases, pseudo clases y pseudo elemtos.

*/

//const parrafo = document.querySelector('.paragraph');
//console.log(parrafo.textContent);

//const parrafo = document.querySelector('.paragraph:nth-child(3)');
//console.log(parrafo.textContent);

//const parrafo = document.querySelector('.paragraph :: after'); //No funciona con pseudo elementos
//console.log(parrafo.textContent);

/* 

    Tener acceso a través de la sucesión de id y selectores CSS    

*/

//const titulo = document.getElementById('title').querySelector('span');
//console.log(titulo.textContent);

/* 

    TODOS LOS SELECTORES CSS

    document.querySelectorAll('selectorCSS') -> Accedemos a todos los elementos que coincidan con el selector CSS.

    -Nos devuelve un nodelist
    -Los selectores se escriben como strings " o "
    -Hay que guardarlos en una constante

*/

//const parrafos = document.querySelectorAll('p'); //Tags
const parrafos = document.querySelectorAll('.paragraph');
console.log(parrafos);

/*  Index  */

console.log(parrafos[0].textContent);
console.log(parrafos[1].textContent);
console.log(parrafos[2].textContent);