/* 
Scope o ambito es la zona donde existe una variable o constante

Contexto de variables y constantes
Global: Podemos acceder a ellas desce cualquier parte del cádigo
Local: Cuando variables con creadas dentro de uns funcíon,dolo se puede acceder a ellas dentro de la función o funciónanidada

REPASO
Variables son espacios que reservamos para almacenar información que podria cambiar a lo laaego frl programa.

-Se declaran. var nombre;
-Se indicializan -> var nombre = 'luis';
-se modifican -> nomre = 'wicho'

Con ECMA script 6 (Ultima versión de JS) se usa para declarar variables la palabra 'let'. No se recomienda usar 'var', porque es un concepto reciente llamado 'hoisting'


*/

let nombre = 'Luis'; //Variable Global

console.log(`Mi nombre es ${nombre}`);

function saludar() {
    console.log(`Hola ${nombre}`)
    let apellido = 'Olivares'; //Variable de ámbito local
    console.log(`Tu nombre completo es ${nombre} ${apellido}`);

    //Función anidada
function despedida(){
        //Codigo que ejecuta mi función anidada
        nombre = 'Andrés';
        console.log(nombre);
    }
    despedida();
}

saludar(); //Invocamos a la función

/* console.log(apellido) */ //ERROR
/* despedida();  Error*/


