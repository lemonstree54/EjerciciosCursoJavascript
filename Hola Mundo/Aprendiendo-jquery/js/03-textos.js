$(document).ready(function(){
    
    /*
    //Adiciona el texto ingresado como un hipervinculo y borra lo demás de la lista.
    reloadLinks();
    $('#add_button').click(function(){
        $('#menu').html('<li><a href="' + $("#add_link").val() + '"></a></li>');
        reloadLinks();
    });
    */

    
    //Añade al final de la lista el enlace ingresado en el cuadro de texto. https://www.leonisa.com 
    reloadLinks();
    $('#add_button')
        .removeAttr('disabled')
        .click(function(){
        $('#menu').append('<li><a href="' + $("#add_link").val() + '"></a></li>');

        $("#add_link").val(''); //limpiar el cuadro de texto.
        reloadLinks();
    });
    

    /*
    //Añade al inicio de la lista el enlace ingresado en el cuadro de texto. https://www.leonisa.com 
    reloadLinks();
    $('#add_button').click(function(){
        $('#menu').prepend('<li><a href="' + $("#add_link").val() + '"></a></li>');
        reloadLinks();
    });
    */

    /*
    //Añade al inicio fuera de la lista el enlace ingresado en el cuadro de texto. https://www.leonisa.com 
    reloadLinks();
    $('#add_button').click(function(){
        $('#menu').before('<li><a href="' + $("#add_link").val() + '"></a></li>');
        reloadLinks();
    });
    */

    /*
    //Añade al final fuera de la lista el enlace ingresado en el cuadro de texto. https://www.leonisa.com 
    reloadLinks();
    $('#add_button').click(function(){
        $('#menu').after('<li><a href="' + $("#add_link").val() + '"></a></li>');
        reloadLinks();
    });
    */

    function reloadLinks(){
        $('a').each(function(index){
            var texto = $(this);
            var enlace = $(this).attr("href");

            texto.attr('target', '_blank');

            texto.text(enlace);
        });
    };

    







    
});