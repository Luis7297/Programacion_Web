/* 

CLASES

    Es una estructura de Es6, funciona como una plantilla o molde para crear objetos.


Definimos una clase usando la palabra 'class' seguido de nombre de la clase.
Cuando creamos un objeto a través de una clase se le llama 'instancear' (instance).

Para poder crear una 'clase' necesitamos de una 'functionn' constructora. Llamada de manera obligatoria 'constructor' y se ejecuta cada vez que instanceamos o creamos un objeto.


class Pokemon {
    constructor (nombre, tipo, poder){
        this.nombre = nombre
    }
    // Aquí van los métodos (funciones)
}


·Cuando definimos clases la primera letra de su nombre va en MAYÚSCULAS.
·Los parámetros van entre los paréntesis y son las propiedades que van a tener los objetos.
·Para asignar los parámetros al objetos, utilizamos la palaba reservada 'this' ->  Que hace refernecia al objeto

    'Esta propiedad del objeto' = 'Este parámetro'

Estamos asociando las propiedades de objeto con los valores que enviamos por parámetros.


MÉTODOS

    Son funciones asociadas a los objetos. 
    Los métodos se declaran dentro de la clase, pero fuera del contructor.

pokedex(){
    // return `Este es ${this.nombre}` // ``  acentitos  con 'Alt Gr +  c}'
}

No se usa la palabra 'function', ni flecha. Esta es la sintaxis de un método dentro de la clase.




CREAR UN OBJETO

    Para crear un objeto necesitamos usar la palabra 'new' y el nombre de la clase.

const pikachu = new Pokemon ('Pikachu','Eléctrico', '1000');

    Una vez instanciado el objeto, podremos acceder a sus propiedades y métodos utilizando la nomenclatura del punto '.'


pikachu.nombre;
pikachu.poder;
pikachu.tipo;
pikachu.pokedex();



*/

class Pokemon {
    constructor (nombre, tipo, poder){
        this.nombre = nombre
        this.tipo = tipo
        this.poder = poder
    }
    pokedex(){
        //Método
        return `Este es ${this.nombre} es un pokemon de tipo ${this.tipo} y su poder es de ${this.poder}` 
    }
}



//Crear Objetos a tráves de una clase

const ditto = new Pokemon ('Ditto', 'Mimo', 800);
const metapod = new Pokemon ('Metapod', 'Planta', 50);

console.log(ditto);
console.log(metapod);

console.log(ditto.nombre);
console.log(metapod.tipo);

console.log(ditto.pokedex());
console.log(metapod.pokedex()); 