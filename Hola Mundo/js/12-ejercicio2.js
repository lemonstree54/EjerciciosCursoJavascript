'use stric'

/*
Utilizando un bucle, mostrar la suma y la media de los números introducidos
hasta introducir un número negativo y ahí mostrar el resultado.
*/

var suma = 0;
var contador = 0;

do{
    var numero = parseInt(prompt("Ingresa números hasta que ingreses uno negativo", 0));
    
    if(isNaN(numero)){
        numero = 0;
    }else if(numero > 0){
        suma += numero ;
        contador += 1 ;
    }
    console.log(numero);

}while(numero >= 0)

alert("La suma de los número ingresados es " + suma );
alert("La media es igual a " + (suma / contador)) ;