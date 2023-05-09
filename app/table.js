//Obtener elementos del DOOM
const table_head = document.getElementById('table_head');
const btn_append = document.getElementById('btn_append');
const search_client = document.getElementById('search_client');
const btn_search = document.getElementById('btn_search');
const table_body = document.querySelector('tbody');


//Crear elementos del DOOM
const array_tr = document.createElement('tr')


//Funcion de encabezado encabezados
function title_generator(array_titles) {
    let table_header = document.querySelector('thead');
    table_header.innerHTML = '';

    let array_th = document.createElement('tr');
    array_titles.forEach(title => {
        let th = document.createElement('th');
        th.textContent = title;
        array_th.appendChild(th);
    });
    table_header.appendChild(array_th);
}    



//Genera el cliente en la tabla
export function show_client(array){
    table_body.innerHTML = '';

    // Genera el encabezado
    const array_titles = ['Clientes', 'Montos de préstamos', 'Plazos', 'Acciones'];
    title_generator(array_titles)

    // Generar cuerpo
    array.forEach(data => {
        let array_tr = document.createElement('tr');
        let celdaCliente = document.createElement('td');
        celdaCliente.textContent = data.nombre_cliente;
    
        let celdaPrestamo = document.createElement('td');
        celdaPrestamo.textContent = data.monto;
    
        let celdaPlazos = document.createElement('td');
        celdaPlazos.textContent = data.plazos;
    
        const button_img = document.createElement('img');
        button_img.src = '../static/resource/svg/menu.svg'
    
        let celdaAcciones = document.createElement('button');
        celdaAcciones.appendChild(button_img)
        celdaAcciones.value = data.id_cliente

        celdaAcciones.addEventListener('click', function() {
            window.location.href = '../template/amortization_table.html?id=' + data.id_cliente;
        });
    
        array_tr.append(celdaCliente, celdaPrestamo, celdaPlazos, celdaAcciones)
        table_body.appendChild(array_tr);
    });
}


//Filter para la generacion de tabla
export function filter(data, nombre) {
    return data.filter(objeto => objeto.nombre_cliente === nombre);
  }
  




