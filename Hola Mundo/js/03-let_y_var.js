'use strict'
//Variables con let y var
//let: define variables limitando alcane al bloque, declaración o expresión donde se usa.
//var: define variables global o local en una función sin importar el ámbito del bloque.

//Pruebas con var
var numero = 88;
console.log (numero);

if (true){
    var numero = 77;
    console.log(numero);
} 

console.log(numero);


//Pruebas con let
var texto ="Leonardo Monsalve" ;
console.log(texto);

if(true){
    let texto="Otra vez" ;
    console.log(texto);    
}
console.log(texto);