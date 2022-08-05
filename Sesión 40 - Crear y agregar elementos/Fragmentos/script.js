/* 

Fragmentos de Código

    document.createDocumentFragment()

Un contenedor de codigo HTML que 'inyectamos' de una sola vez al documento.

*/

/* Array */

const pokemones = ['Charmander', 'Pikachu', 'Snorlax', 'Ditto', 'Psyduck', 'Bulbasaur', 'Mewtwo'];

/*  Elemento de lista <ul> a través de su id  */

const pokeList = document.getElementById('pokeList');

/*  Fragmento de código */

const fragPokes = document.createDocumentFragment();    

/*  Bucle  */

for (const pokemon of pokemones){
    const listItem = document.createElement('LI');
    listItem.textContent = pokemon;
    fragPokes.appendChild(listItem);
};

//console.log(fragPokes);

/* Agregar el fragmento al DOM */

pokeList.appendChild(fragPokes);    

/* Forma no optima */

/* for(const pokemon of pokemones){
    pokeList.innerHTML =  `<li>${pokemon}</li>`;
    //Template strings se declaran dentro de backtick o acentos graves
    //Asigna el valor en cada vuelta 
    // +=Asigna y agrega el valor de cada vuelta
    //Redibujar el documento en cada iteración 
    //No es optimo 
}; */