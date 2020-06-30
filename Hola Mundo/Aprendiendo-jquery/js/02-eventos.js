$(document).ready(function(){

    //MouseOver y MouseOut.  Eventos que se ejecutan al pasar el mouse o retirarlo de un elemento html.
    var caja = $("#caja");

    /*
    caja.mouseover(function(){
        $(this).css("background", "blue");
    });

    caja.mouseout(function(){
        $(this).css("background", "yellow");
    });
    */

    //Hover.    Hace lo mismo que los eventos MouseOver y MouseOut pero más efectivo.
    function cambioAzul(){
        $(this).css("background", "blue");
    };

    function cambioAmarillo(){
        $(this).css("background", "yellow");
    };

    caja.hover(cambioAzul, cambioAmarillo);


    //Click y dobleClick

    caja.click(function(){
        $(this).css("background", "blue")
                .css("color", "white");
    });

    caja.dblclick(function(){
        $(this).css("background", "green")
                .css("color", "yellow");
    });

    //Focus y blur
    var nombre = $("#nombre");
    var datos = $("#datos");

    nombre.focus(function(){
        $(this).css("border", "4px solid green");
    });

    nombre.blur(function(){
        $(this).css("border", "1px solid gray");
        datos.text($(this).val()).show();

    });

    //MouseUp y MouseDown
    datos.mousedown(function(){
        $(this).css("border-color", "red");
    });

    datos.mouseup(function(){
        $(this).css("border-color", "blue");
    });


    //Mousemove
    $(document).mousemove(function(){
        $('body').css("cursor", "none"); //ocultar el cursor.

        var sigueme = $("#sigueme");  // cambiar la apariencia del cursor.
        sigueme.css("left", event.clientX)
               .css("top", event.clientY);
    });



});