/* 
    
Bucles For Off y For Inn

    Son dos ciclos nuevos determinados ES6. Simplifican el bucle for tradicional.
    
    For traducional:

        f or( i = 0 ; i < 3 ; i++ ){
            //Codigo que se ejecuta
        }

    Estos nuevos ciclos permiten recorrer estructuras e datos como Los Arrays o Los Objetos

For On:

        for(variable of esctructura) {
            Cosigo que se ejecuta
        }

For In:

        for(variable in esctructura) {
            Cosigo que se ejecuta
        }

· La variable que definimos toma el siguiente valor de la estructura en cada iteración
· No es necesario especificar el numero de iteraciones (vueltas)
·El bucle incrementa solo
· El bucle se detiene automaticamente

*/

// Estructura

let pokemones = ['Pikachu', 'Togepi','Ditto'];

// Ciclo For Tradicional

/* for( i = 0 ; i<3 ; i++) {
    console.log(pokemones[i]);
} */

//Ciclo for of
for (let nombre of pokemones) {
    console.log(nombre); //Imprime el valor de cada posición de la estrycrtyra
}

//Ciclo For In
for(let numero in pokemones) {
    console.log(numero); //El indice de los valores de la esytuctura
}