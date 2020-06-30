'use strict' ;

//Fetch y peticiones a servicios API REST //REALIZA PETICIONES ASÍNCRONAS
//De la siguiente ruta consumimos el servicio
//https://jsonplaceholder.typicode.com/users
//o de esta api también se puede
//https://reqres.in/api/users

var div_usuarios = document.querySelector("#usuarios");
var div_profesor = document.querySelector("#profesor");
var div_janeth = document.querySelector("#janeth");

getUsuarios()
    .then(data => data.json())
    .then(users =>{
        listadoUsuarios(users.data)

        return getInfo();
    })
    .then(data => {
        div_profesor.innerHTML = data;

        return getJaneth();
    })
    .then(data => data.json())
    .then(janeth =>{
        mostrarJaneth(janeth.data);

    })
    .catch(error =>{
        console.error();
        alert("Error en la petición de datos.");
    });
    

function getUsuarios(){
    return fetch('https://reqres.in/api/users');
}

function getJaneth(){
    return fetch('https://reqres.in/api/users/2');
}

function getInfo(){
    var profesor = {
        nombre: 'Leonardo',
        apellido: 'Monsalve',
        url: 'www.google.com'
    };

    return new Promise((resolve, reject) =>{
        var profesor_string = "";

        setTimeout(function(){
            profesor_string = JSON.stringify(profesor);

            if(typeof(profesor_string) != 'string' || profesor_string == '') return reject('Error....');

            return resolve(profesor_string);

        },3000);

        
    });

    
};


//Crear promesa para encadenarla a las otras promesas creadas.
//Las promesas se crean para leer archivos, enviar datos por POST, enviar y recibir datos por AJAX

function listadoUsuarios(usuarios){
    usuarios.map((user, i) => {
        let nombre = document.createElement('h3');
        nombre.innerHTML = i + " - " + user.first_name + " - " + user.last_name;
        div_usuarios.appendChild(nombre);
        document.querySelector(".loading").style.display ='none';
    })
    
};


function mostrarJaneth(user){
    let nombre = document.createElement('h4');
    let avatar = document.createElement('img');

    nombre.innerHTML = user.first_name + " - " + user.last_name;
    avatar.src = user.avatar;
    avatar.width= '200';
    avatar.height='250';

    div_janeth.appendChild(nombre);
    div_janeth.appendChild(avatar);
    document.querySelector("#janeth .loading").style.display ='none';

};