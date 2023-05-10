//Elementos del DOOM
const btn_search = document.getElementById('btn_search');
const input_search = document.getElementById('search_client');


//Importaciones de modulos necesarios
import { search_client } from './apps/search.js';
import { getDataAll } from './apps/conn.js'


// Generacion de tabla
btn_search.addEventListener('click', (()=>{
    search_client('JESUS HECTOR ZAVALA INZUNZA');
}));


//Funcionamiento del prestamo
btn_append.addEventListener('click', (() =>{
    window.location.href = '../template/register.html'
}));
