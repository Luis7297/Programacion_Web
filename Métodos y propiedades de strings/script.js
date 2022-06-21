/* 
    Propiedades y métodos de Strings

    Propiedades:Son las características que tiene un elemento:

        Ej. los script tienen una longitud (Cantidad de caracteres)
        -> 'length'

    Método: Son las accones o comportamientos que un elemento puede hacer o tener.

        Ej. Los strings pueden convertirse en MAYUSCULAS
        -> 'toUpperCase'

    Para utilizar las propiedades y métodos se usa ña nomenclatura del punto '.'

        cadena.propiedad
        cadena.metodo(parametro) <-m En los métodos usamos paréntesis porque pueden recibir parámetros

*/

/* 
    Asignar el string
*/

let cadena = 'Hola Mundo';

/* 
    Propiedades

    length -> Devolver la longitud de la cadena

    Devolver: Respuesta a petición
*/

/* console.log(cadena.length); */

/* 
    Diferencia entre el index y el número de caracter de unistring

    H o l a _ M u n d o
    1 2 3 4 5 6 7 8 9 10 <- Lonitud de String (lenght)
    0 1 2 3 4 5 6 7 8 9  <-Indice (index)

*/

/* 

    Métodos

    Todos los métodos devuelven una cadena nueva. La cadena original no será modificada

    toUpperCase() -> Devuekve la cadena en MAYÚSCULAS.

*/

/* console.log(cadena.toUpperCase());

let cadenaMayus = cadena.toUpperCase(); */   // Guardamos el resultado del método en una nueva variable

/* 

    toLowerCase() -> devuelve la cadena en minúsculas

*/

/* console.log(cadena.toLowerCase() ); //-> JS es un lenguaje Case Sensitive, es decir hace diferencia entre MAYÚSCULAS y minúsculas. */

/* 

    indexod(string) -> Devuelve la posición en la que se encuentra el string o el caracter, si no lo encuentra devolvera -1.

    H o l a _ M u n d o
    0 1 2 3 4 5 6 7 8 9  <-Indice (index)

*/

/* console.log(cadena.indexOf('m') );
console.log(cadena.indexOf('Mundo') ); */

/* 

    replace(valor a buscar, valor nuevo); -> Remplaza la cadena que le indiquemos y coloca el nuevo valor

*/

/* console.log( cadena.replace('Mundo', 'Mamá') ); */

/* 

    substring(inicio [,fin]); // [] -> El dato es opcional

    Extrae los caracteres desde el inicio y hasta el final.
    Si no se incluye el 'fin' extrae hasta el final de la cadena

    H o l a _ M u n d o
    0 1 2 3 4 5 6 7 8 9  <-Indice (index)

*/

/* console.log(cadena.substring(4) );
console.log(cadena.substring(2,7) ); */

/* 

    slice(inicio [, fin]); -> Igual que substring pero admite valores negativos

    Si ponemos valores negativos comienza desde atrás.

    Si no incluye 'fin' se extiende hasta el final de la cadena.


    H  o l a _ M u n d o
    1  2 3 4 5 6 7 8 9 10 <- Longitud de String (lenght)
    10 9 8 7 6 5 4 3 2 1 <- Longitud en valores negativos

*/

/* console.log(cadena.slice(2) );
console.log(cadena.slice(-3) );
console.log(cadena.slice(1, 6) );
console.log(cadena.slice(5, -2) ); */

/* 

trim() -> Elimina los espacios al inicio y al final de la cadena

*/

let cadena2 = '      Hola Mundo      ';
console.log(cadena2.trim() );
let cadenaSinespacios = cadena2.trim();