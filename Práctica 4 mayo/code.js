//Guardamos el numero de pokemones elegidos por el usuario
var numero = prompt ("¿Cuántos pokemones quieres");

//Declaramos array vacio
var pokemones = [];

//Declaramos nuestro sitio
for(var i = 0; i < numero; i++){
    //Traigo dato del usuario
    var pokemon = prompt ("Agrega un pokemon");
    //Agrego dato del usuario al array
    pokemones.push(pokemon);
    //Imprimir en el documento
    document.write("<strong>" + pokemones[i] + "</strong>" + " yo te elijo!" + "<br>");
};

//Imprimimos la línea final en el documento
document.write ("<br>" + "Ya elejiste tus " + numero + " pokemones!");


