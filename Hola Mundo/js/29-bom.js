'use strict'

//BOM

function getBom(){
console.log(innerHeight);
console.log(innerWidth);
console.log(screen.width);
console.log(screen.height);
console.log(window.location);
}

function redirect(url){
    window.location.href = url ;
}

//redirect("https://google.com");

getBom();

function abrirVentana(url){
    //window.open(url);
    window.open(url,"","width=500, height=400");
}

abrirVentana("https://www.leonisa.com");