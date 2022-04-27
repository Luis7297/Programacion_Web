/* 
    Ciclo while sirve para ejecutar un codigo de forma ciclica mientras su condición se cumpla
*/

/* 
    Necesitamos definir la variable i
*/

/* var i = 1; 
var numero = prompt ("Elije un número");


while(i <= numero){
    // Aqui va el codigo que se ejecuta
    document.write("Hola, soy un ciclo <br>");
// Sumamos una unidad a la variable para que la condicion deje de cumplirse
    // i = i + 1 ;
    i++;
} */

/* 
    El ciclo Do/While ejecuta un codigo al menos una vez y si se cumple la condición volverá a iterarlo
*/

var i = 0;
var numero = prompt ("Elige un número");

do{
    // Aquí el codigo que se ejecuta en el ciclo.
    document.write("¿Terminaste los deberes Calamardo? <br>");
    i++;
} while(i < numero);