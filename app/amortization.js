//Importamos herramientas necesarias
import { getPrestamosByIdCliente } from './conn.js';

//Obtenemos elementos del DOOM
const table_body = document.querySelector('tbody');
const client_parr = document.getElementById('client');
const btn_exit = document.getElementById('btn_exit');


//Boton de salida
btn_exit.addEventListener('click', (()=>{
    window.location.href = '/'
}))


//Funcion para generar la tabla del cliente particular
function show_client(array){
    table_body.innerHTML = '';
    let count = 1
    
    // Generar cuerpo
    array.forEach(data => {
        client_parr.innerText = data.nombre
        let array_tr = document.createElement('tr');
        
        let celdaNPago = document.createElement('td');
        celdaNPago.textContent = count++

        let celdaFecha = document.createElement('td');
        celdaFecha.textContent = data.fecha_inicio;
    
        let celdaPrestamo = document.createElement('td');
        celdaPrestamo.textContent = data.monto;
    
        let celdaIntereses = document.createElement('td');
        celdaIntereses.textContent = data.interes;    
    
        let celdaPlazos = document.createElement('td');
        celdaPlazos.textContent = data.plazos;

        let celdaAbono = document.createElement('td');
        celdaAbono.textContent = 0;
    
    
        array_tr.append(celdaNPago, celdaFecha, celdaPrestamo, celdaIntereses, celdaPlazos, celdaAbono)
        table_body.appendChild(array_tr);
    });
}


//Obtencion del ID
let queryParams = new URLSearchParams(window.location.search);
let id = queryParams.get('id');


//Generacion de la tabla
getPrestamosByIdCliente(id).then((cliente)=>{
    show_client(cliente)
});