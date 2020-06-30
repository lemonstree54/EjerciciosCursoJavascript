'use strict'

$(document).ready(function(){
 
//Selector de ID
$("#rojo").css("background","green")
          .css("color","yellow");

$("#amarillo").css("background","blue")                     
              .css("color","black")  ;

$("#azul").css("background","yellow")
          .css("color","dark blue");

console.log(rojo);

//Selectores de clase
var clases = $('.leo');
clases.css("border","15px dashed blue");

$('.sin').click(function(){
    console.log("Has presionado click boludo!!!");
    $(this).addClass('leo');
});



//Selectores de etiquetas
var parrafos = $('p').css('cursor', 'pointer');
parrafos.click(function(){
    var thiss = $(this);
    if(!thiss.hasClass('leito')){
        thiss.addClass('leito');
    }else{
        thiss.removeClass('leito')
    }
    
});


//Selectores de atributo. Permite seleccionar etiquetas html que tienen atributos asignados
$('[title="Google"]').css('background', 'green');
$('[title="Brave"]').css('background', 'blue');
$('[title="Firefox"]').css('background', 'yellow');
$('[title="Edge"]').css('background', 'brown');


//Otros 
//Asignar la misma clase a varias etiquetas del DOM.
$('p, a').addClass('margen_superior');

//para buscar cualquier elemento html que están asociados a una clase específica.
var busqueda = $('#caja .resaltar').eq(0).parent().parent().parent().find('[title="Firefox"]');
console.log(busqueda);

});





