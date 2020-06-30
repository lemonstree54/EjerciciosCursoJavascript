$(document).ready(function(){
    //alert("Efectos JQUERY...")
    
    $("#caja").show(); //ocultar elemento con el id caja.
    $("#mostrar").hide();

    var caja = $("#caja");  
    $("#mostrar").click(function(){
        $(this).hide();
        $("#ocultar").show();

        //caja.show('fast');    //muestra control oculto con efecto.
        //caja.fadeIn('fast');    //muestra control oculto con efecto de desvanecer. Visualizar en la consola.
        //caja.fadeTo('fast', 1);    //muestra control oculto con efecto de desvanecer. Visualizar en la consola.
        caja.slideDown('fast');    //muestra control oculto con efecto de desvanecer. Visualizar en la consola.
    });

    $("#ocultar").click(function(){
        $(this).hide();
        $("#mostrar").show();

        //caja.hide('fast');   //oculta control visible con efecto.
        //caja.fadeOut('fast');   //oculta control visible de desvanecer.
        //caja.fadeTo('fast', 0);   //oculta control visible de desvanecer.
        //caja.slideUp('fast');                      //oculta control visible de desvanecer
        //console.log("Se ocultó el control...");    //Esto muestra el texto antes de que se ejecute toda la animación.

        //para solucionar esa situación se puede implementar así:                
        caja.slideUp('fast', function(){   
            console.log("Se ocultó el control....");   //oculta control visible de desvanecer y con una 
        });                                           //función anónima de callback se controla en qué momento
    });                                               //se muestra el mensaje con el console.log

    $("#todo").click(function(){
        //$("#caja").toggle('fast');
        //$("#caja").fadeToggle('fast');
        caja.slideToggle('fast');
    });

    $("#animar").click(function(){
        caja.animate({
                        marginLeft: '500px',
                        fontsize:   '50px',
                        height: '40px'
                    }, 'slow')            
            .animate({
                borderRadius: '900px',
                marginTop: '100px',
            }, 'slow')
            .animate({
                borderRadius: '900px',
                marginLeft: '0px',
            }, 'slow')
            .animate({
                borderRadius: '900px',
                marginTop: '0px',
            }, 'slow')
            caja.animate({
                marginLeft: '500px',
                fontsize:   '50px',
                height: '40px'
            }, 'slow')  
  
    });


});