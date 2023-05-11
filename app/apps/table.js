//Obtener elementos del DOOM
const table_head = document.getElementById('table_head');
const table = document.querySelector('.menu-table');
const table_body = document.querySelector('tbody');

// Crear elementos del DOOM
const array_tr = document.createElement('tr')


// Funcion de encabezado encabezados
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


// Esta funcion sirve para que el json que le mande, me lo regrese con 1 solo objeto y a su vez que me sume los plazos y montos
function show_client(lista) {
    const result = lista.reduce((acc, { id_cliente, nombre_cliente, monto }) => {
        acc[nombre_cliente] = acc[nombre_cliente] || { id_cliente, nombre_cliente, monto_total: 0, plazos: 0};
        acc[nombre_cliente].monto_total += monto;
        acc[nombre_cliente].plazos += 1;
        return acc;
    }, {});
    return Object.values(result);
};
  

// Funcion que genera el cliente en la tabla
export function show_table(array){
    table_body.innerHTML = '';

    // Genera el encabezado
    let array_titles = ['Clientes', 'Montos de préstamos', 'Plazos', 'Acciones'];
    title_generator(array_titles)

    // Mandamos la funcion para que lo la retorne a como la usaremos
    let array_complete = show_client(array)

    // Generar cuerpo
    array_complete.forEach(data => {
        let array_tr = document.createElement('tr');
        let celdaCliente = document.createElement('td');
        celdaCliente.textContent = data.nombre_cliente;
    
        let celdaPrestamo = document.createElement('td');
        celdaPrestamo.textContent = data.monto_total;
    
        let celdaPlazos = document.createElement('td');
        celdaPlazos.textContent = data.plazos;
    
        const button_img = document.createElement('img');
        button_img.src = '../static/resource/svg/menu.svg'
    
        let celdaAcciones = document.createElement('td');
        let btn_action = document.createElement('button');
        btn_action.appendChild(button_img)
        btn_action.value = data.id_cliente
        celdaAcciones.appendChild(btn_action)

        celdaAcciones.addEventListener('click', function() {
            window.location.href = '../template/amortization_table.html?id=' + data.id_cliente;
        });
    
        array_tr.append(celdaCliente, celdaPrestamo, celdaPlazos, celdaAcciones)
        table_body.appendChild(array_tr);
    });
}


// Funcion que genera un parrafo en caso de no encontrar al cliente
export function error_404(){
    let alert = document.createElement('p');
    alert.id = 'nofound'
    alert.textContent = 'Cliente no encontrado'

    table.appendChild(alert);
};




