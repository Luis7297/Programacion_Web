/* 

Objetos:
Son estructuras de datos que representan propiedades, valores y acciones.

Propiedades o atributos:

    · Son las caracteristicas del objeto.
    · Se repredrntan por pares de 'clave' (key) : 'valor (value)'
    · Datos: Stings, numbers, (int o float), Booleans, estructuras, Arrays

Comportamientos o acciones 
    · Es aquello que puede hacer un objeto
    · Se definen a traves de funciones

----

Para declarar un objeto se escribe lo siguiente:

const nombreObjeto = {
    //Pares clave : valor
    key :  value
}

Para acceder a las propiedades y acciones utilizamos la nomenclatura del punto '.'

nombreObjeto.key


*/

const pokemon = {
    nombre : 'Pikachu',
    poder : 1000,
    capturado : true,
    habilidades : ['Impactrueno',
    'Rayo', 'Chispitas']
}

/* console.log(pokemon.nombre);
console.log(pokemon.poder);
console.log(pokemon.capturado);
console.log(pokemon.habilidades);
console.log(pokemon.habilidades[0]);
console.log(pokemon.habilidades[1]);
console.log(pokemon.habilidades[2]); */

//Ciclo For In -> Objetos

for(let key in pokemon) {
    console.log(key)
}

for(let value in pokemon) {
    console.log(pokemon[value])
}

//Ciclo For Of -> Arrays

for(let key of pokemon.habilidades) {
    console.log(key)
}

