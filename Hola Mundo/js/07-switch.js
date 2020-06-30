'use strict'

//Switch

var edad = 60;
var imprime = "" ;
switch(edad){
    case 18:
        imprime= "Eres mayor de edad";
    break;
    case 49:
        imprime= "Eres Leo";    
    break;
    case 60:
        imprime= "Eres anciano";    
    default:
        imprime= "Hola" ;
    break;
}

console.log(imprime);
