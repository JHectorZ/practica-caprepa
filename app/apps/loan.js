//Obtener los elementos del DOOM
const option_selector_client = document.getElementById('client');
const option_selector_amount = document.getElementById('amount');
const option_selector_term = document.getElementById('term');
const btn_append = document.getElementById('btn_append')
const btn_cancel = document.getElementById('btn_cancel')

//Obteniendo datos del formulario
const form = document.forms.form_client;
const client = form.elements.client;
const amount = form.elements.amount;
const term = form.elements.term;

//Importamos modulos
import { getDataNames } from './conn.js'


//Funcion para generar los selectores
function select_generator(array, selector){
    array.forEach(client => {
        let option = document.createElement('option');
        option.id = client.id
        option.value = client.id
        option.textContent = client.nombre
    
        selector.appendChild(option)
    });
}


//Funcion para enviar los datos del formulario
btn_append.addEventListener("click",(()=>{
        // Crear un objeto FormData y agregar los valores al formulario
        var formData = new FormData();
        formData.append('client', client.value);
        formData.append('amount', amount.value);
        formData.append('term', term.value);
    
        // Crear una petición XMLHttpRequest
        var xhr = new XMLHttpRequest();
    
        // Configurar la petición
        xhr.open('POST', '../include/survey.php?func=setDataLoan', true);
    
        // Cuando se complete la petición, mostrar la respuesta
        xhr.onload = function() {
            if (xhr.status === 200) {
                alert(xhr.response)
            } else {
                console.log('Error: ' + xhr.statusText);
            }
        };
    
        // Enviar la petición
        xhr.send(formData)
}))


//Funcion para boton de cancelar
btn_cancel.addEventListener('click', (()=>{
    window.location.href = '/' 
}))


//Objetos para los montos y plazos predefinidos
const array_mont = [
    { id: 1500, nombre: '1500' },
    { id: 2000, nombre: '2000' },
    { id: 2500, nombre: '2500' },
    { id: 3000, nombre: '3000' },
    { id: 3500, nombre: '3500' },
    { id: 4000, nombre: '4000' }
];

const array_pla = [
    { id: '2', nombre: 'En plazo de 2' },
    { id: '4', nombre: 'En plazo de 4' },
    { id: '6', nombre: 'En plazo de 6' },
    { id: '8', nombre: 'En plazo de 8' },
    { id: '10', nombre: 'En plazo de 10' },
    { id: '12', nombre: 'En plazo de 12' }
];


//Generacion de clientes en los selectores
getDataNames().then((clientes) => {
    select_generator(clientes, option_selector_client)
}).catch((error) => {
  console.error(error);
});


//Generacion de los montos y plazos en los selectores
select_generator(array_pla, option_selector_term)
select_generator(array_mont, option_selector_amount)