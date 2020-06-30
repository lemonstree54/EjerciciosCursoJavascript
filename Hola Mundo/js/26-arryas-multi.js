'use strict'

//Arrasy multidimensionales

var categorias = ['Acción','Terror','Comedia'] ;
var peliculas = ['Avengers','Transformer','El padrino', "1"] ;
var cine = [categorias, peliculas];

//console.log(cine[0][1]);    
//console.log(cine[1][1]);    

//Push = permite añadir elementos al arreglo.
//peliculas.push = "Superman" ;

/*
var dato = "";

do{
    dato = prompt("Ingresa una película:") ;
    peliculas.push(dato);

}while(dato != "TERMINAR")
 
peliculas.pop(); //elimina el último elemento del arreglo.
*/

var indice  = peliculas.indexOf('1');
if(indice > -1){
    peliculas.splice(indice, 3); //Permitir en base a un indice borrar a partir de este el número de elementos que le indique
}
/*
var peliculas_string = peliculas.join();
console.log(peliculas);
*/

var cadena = "texto1, texto2, texto3";

var cadena_array = cadena.split(", ") ;
console.log(cadena_array);

//Ordenar arreglos

console.log(peliculas.sort());  //ascendente
console.log(peliculas.reverse()); //Inverso


//For in 
for(let pel in peliculas){
    console.log(peliculas[pel]);
}

