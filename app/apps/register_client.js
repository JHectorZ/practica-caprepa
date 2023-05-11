// Importamos elementos del DOOM
const btn_exit = document.getElementById('btn_cancel');
const btn_append = document.getElementById('btn_append');

// Exportacion de los modulos necesarios
import { setDataClient } from './conn.js';


// Boton de salida
btn_exit.addEventListener('click', (()=>{
    window.location.href = '/'
}));


//Obteniendo datos del formulario
const form = document.forms.form_client;
const name = form.elements.name;
const age = form.elements.age;
const domicile = form.elements.domicile;
const email = form.elements.email;


//Funcion para enviar los datos del formulario
btn_append.addEventListener("click",(()=>{
    // Crear un objeto FormData y agregar los valores al formulario
    var formData = new FormData();
    const name_value = name.value.toUpperCase()

    formData.append('name', name_value);
    formData.append('age', age.value);
    formData.append('domicile', domicile.value);
    formData.append('email', email.value);

    // Crear una petición XMLHttpRequest
    var xhr = new XMLHttpRequest();

    // Configurar la petición
    xhr.open('POST', '../include/survey.php?func=setDataClient', true);

    // Cuando se complete la petición, mostrar la respuesta
    xhr.onload = function() {
        if (xhr.status === 200) {
            alert(xhr.response)
        } else {
            console.log('Error: ' + xhr.statusText);
        }
    };

    // Enviar la petición
    xhr.send(formData);
    window.location.href = '/';
}))