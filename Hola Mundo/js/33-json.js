'use strict'

//JSON - java script object notacion

var pelicula = {
    titulo: 'Men in black',
    year: 2020,
    pais: 'USA'
} ;

var peliculas = [
    {titulo: 'Sociego', year: 2021 , pais: 'Colombia'} , 
    pelicula
] ;

var caja_peliculas = document.querySelector("#peliculas");
var index ;
for (index in peliculas){
    var parrafo = document.createElement("p");
    parrafo.append(peliculas[index].titulo + " - " + peliculas[index].year + " - " + peliculas[index].pais);
    caja_peliculas.append(parrafo);

} ;