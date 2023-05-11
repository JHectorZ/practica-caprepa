// Elementos del DOOM
const btn_search = document.getElementById('btn_search');
const input_search = document.getElementById('autoComplete');
const btn_append_loan = document.getElementById('btn_append_loan');
const btn_append_client = document.getElementById('btn_append_client');
const suggestions_selection = document.querySelector("#autoComplete");


// Importaciones de modulos necesarios
import { search_client } from './apps/search.js';
import { getDataAll, getDataNames } from './apps/conn.js'


// Funcion de suggestions en el input
suggestions_selection.addEventListener("selection", function (event) {
    input_search.value = event.detail.selection.value
});


// Generacion de tabla
btn_search.addEventListener('click', (()=>{
    if (input_search.value != ''){
        search_client(input_search.value);
    };
}));


// Boton para redirigirse a registro de prestamo
btn_append_loan.addEventListener('click', (() =>{
    window.location.href = '../template/register_loan.html'
}));

// Boton para redirigirse a registro de cliente
btn_append_client.addEventListener('click', (() =>{
    window.location.href = '../template/register_client.html'
}));
