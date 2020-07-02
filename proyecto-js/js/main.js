$(document).ready(function(){

  //SLIDER
  if(window.location.href.indexOf('index') > -1 ) {
    $('.galeriaImagenes').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200,
        responsive: true,
        tickerHover: true,
        alturaadaptativa: true
      });
  }

  //POSTS
  if(window.location.href.indexOf('index') > -1) {
    var posts = [
      {
        title: "Prueba de titulo 1",
        date: "Publicado: " +  moment().format("DD") + " " + moment().format("MMMM") + " " +  moment().format("YYYY"),
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit..Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
      },
      {
        title: "Prueba de titulo 2",
        date: "Publicado: " +  moment().format("DD") + " " + moment().format("MMMM") + " " +  moment().format("YYYY"),
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
      },
      {
        title: "Prueba de titulo 3",
        date: "Publicado: " +  moment().format("DD") + " " + moment().format("MMMM") + " " +  moment().format("YYYY"),
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
      },
      {
        title: "Prueba de titulo 4",
        date: "Publicado: " +  moment().format("DD") + " " + moment().format("MMMM") + " " +  moment().format("YYYY"),
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
      },
      {
        title: "Prueba de titulo 5",
        date: "Publicado: " +  moment().format("DD") + " " + moment().format("MMMM") + " " +  moment().format("YYYY"),
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
      }
    
    ]

    posts.forEach((item, index) => {
      var post = `
          <article class="post">
              <h2>${item.title}</h2>
              <span class="fecha">${item.date}</span>
              <p>${item.content}</p>
              <a href="#" class="boton_leermas">Leer más</a>
          </article>
      `;
        $("#posts").append(post);
    });
  }
  
  //Selector de tema
  var theme = $("#theme");
  $("#cambiar_verde").click(function(){
      theme.attr("href", "css/green.css");
  });

  $("#cambiar_rojo").click(function(){
    theme.attr("href", "css/red.css");
  });

  $("#cambiar_azul").click(function(){
    theme.attr("href", "css/blue.css");
  });

  //Scroll para subir a la parte superior del sitio.
  $('.subir').click(function(){
    e.preventDefault();  //para que no vaya a otro sitio. NO REDIRIGIR.

    $('html, body').animate({
      scrollTop: 0
    }, 500);
    
    return false;

  });

  //Login falso
  $("#login form").submit(function(){
    var form_name = $("#form_name").val();
    localStorage.setItem("form_name", form_name);
  });

    var form_name = localStorage.getItem("form_name");

  if(form_name != "" && form_name != null && form_name != "undefined"){
    var about_parrafo = $("#about p");

    about_parrafo.html("</br><strong> Bienvenido, " +  form_name + "</strong>");
    about_parrafo.append("<a href='#' id='logout'> Cerrar sesión</a>");

    $("#login form").hide();

    $("#logout").click(function(){
      localStorage.clear();
      location.reload();

    });

  };

  //Acordeón
  if(window.location.href.indexOf('about') > -1 ){
    $("#acordeon").accordion();

  }


    //RELOJ
     if(window.location.href.indexOf('reloj') > -1) {
       setInterval(function(){
          var reloj = moment().format("hh:mm:ss");
          $('#reloj').html(reloj); 
       }, 1000);
      
     }


     //VALIDACIÓN DE LOS CAMPOS DEL FORMULARIO CONTACT
     if(window.location.href.indexOf('contact') > -1) {

        $("form Input[name='date']").datepicker({
          dateFormat: 'dd-mm-yy'
        });

        $.validate({
          lang: 'es',
          errorMessagePosition: 'top',
          scrollToTopOnError: true
        });
     
    }

});
