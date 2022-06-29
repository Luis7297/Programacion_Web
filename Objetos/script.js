/* 

Instrucciones Práctica objetos

· Crear una clase Movie con las propiedades: pelicula,  genero, año.

    class NombreClase {
     constructor(propiedades){
        this.propiedad = propiedad
        }
    }

· Crear un método que nos regrese la pelicula.

    nombreMetodo () {
        return codigo que devuelve
    }

· Crear un método que nos regrese toda la información concatenada en un strin 

    "Esta pelicula se llama 'Nombre pelicula' es de genero 'genero película creada en el año 'año de pelicula'"

· Solicitar al usuario tres peliculas y agregarlas a un array.

    prompt('mensaje')

    let nombreArray = [Objeto{}, Dato-1, Dato-2, Dato-3];

· Crear una función que muestre (Por consola) el titulo de todas las películas.

    cons nombreFuncion = () => {
        codigo a ejecutar
    }

    for (const nombre of array) {
        codigo que ejecuta
    }

    nombreFunction();

· Crea una funcion que muestre (Por consola) toda la información concatenada en un string de las películas.


*/

class Movie {
    constructor(title, gender, year){
        this.title = title
        this.gender = gender
        this.year = year
    }

//Métodos

    getTitle() {
        return this.title
    }

    getInfo() {
        return `Ésta película se llama ${this.title} es de género ${this.gender} y se estrenó el año ${this.year}.` 
    }
}

let films = [];

while(films.length < 3){ 

    let title = prompt ("Agrega un titulo de pelicula");
    let gender = prompt ("¿Cual es su genero?");
    let year = prompt ("¿En que año se estrenó?");

    films.push(new Movie(title, gender, year));
}

//Funciones

const showNames = () => {
    for(const film of films){
        console.log(film.getTitle());
    }
}

showNames();