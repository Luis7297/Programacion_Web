/* 
    Eventos

    Cualquier cosa que sucede en el documento

    *El contenido se ha leído
    *El contenido se ha cargado
    *El usuario mueve el ratón
    *El usuario pulsa una tecla
    *El usuario cierra la ventana
    *Es una lista larga de eventos 

    sintaxis

    element.addEventListener('event', callback) 
    
    Escuchador de eventos -> Qué evento queremos escuchar y que va a ejecutar: callback -> Función que se "dispara" al ocurrir el evento.


*/

/* 
Localizamos los elementos con Id
*/

const button = document.getElementById('button');
const box = document.getElementById('box');
const input = document.getElementById('input');

/* 
Eventos del ratón

click -> Pulsar el botón izquierdo
dobleclick -> Pulsar dos veces el boton izquierdo
mouseenter -> Entramos en la zona que tiene el evento
mouseleave -> Salimos de la zona que tiene el evento
mousedown -> Pulsamos el botón izquierdo en la zona del evento
mouseup - Soltamos el boton izquierdo en la zona del evento
mousemove -> Movemos el ratón en la zona del evento

*/

/* button.addEventListener('click' , () =>  console.log('Pulsaste un click') ); */

/* button.addEventListener('dblclick' , () => console.log('Diste doble click') ); */

//box.addEventListener('mouseenter' , () => console.log('Entraste') );
//box.addEventListener('mouseleave' , () => console.log('Saliste') );

//box.addEventListener('mousedown' , () => console.log('Puchaste') );
//box.addEventListener('mouseup' , () => console.log('Despuchaste') );

//box.addEventListener('mousemove' , () => console.log('Te mueves') )

/* 

Eventos del teclado

keydown -> Pulsamos una tecla
keyup -> Soltamos una tecla
keypress ->  Pulsamos una tecla y no la soltamos

*/


//input.addEventListener('keydown' , () => console.log('Pulsaste una tecla') );
input.addEventListener('keyup' , () => console.log('Soltaste una tecla') );
input.addEventListener('keypress' , () => console.log('Mantienes presionado') );