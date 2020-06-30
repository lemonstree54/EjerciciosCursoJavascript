'use strict'

//Bucle WHILE. Se comprueba una condición y luego ejecutamos el código.
var year = 2019 ;

while(year <= 2000){
    console.log("El año es " + year); 
    
    if(year == 2010){
        break;
    }
    year-- ;
}

/*
//Bucle DO WHILE. Se ejecuta el código y luego comprobamos una condición.
var years = 21 ;

do{
    alert("El usuario tiene " + years + " años.")
    years = 20 ;
}while (years != 20)
*/