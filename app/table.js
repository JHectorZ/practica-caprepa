const table_head = document.getElementById('table_head');
const table_body = document.getElementById('table_body');
const array_tr = document.createElement('tr')
const form_client = document.getElementById('form-client');
const search_client = document.getElementById('search_client');

function table_generator(array){
    for (titles of array){
        let elem = document.createElement('th')
        elem.textContent = titles
        
        table_head.appendChild(elem)
    };
};

//Formulario



//Generar encabezados
const array_titles = ['Clientes', 'Montos de préstamos', 'Plazos', 'Acciones'];
table_generator(array_titles)


//Generar cuerpo
const array_data = [
    {cliente: 'Cliente 1', monto: '$1000', plazo: '12 meses', id:1},
    {cliente: 'Cliente 2', monto: '$2000', plazo: '24 meses', id:2},
    {cliente: 'Cliente 3', monto: '$3000', plazo: '36 meses', id:3}
];

array_data.forEach(data => {
    let array_tr = document.createElement('tr');
    let celdaCliente = document.createElement('td');
    celdaCliente.textContent = data.cliente;

    let celdaPrestamo = document.createElement('td');
    celdaPrestamo.textContent = data.monto;

    let celdaPlazos = document.createElement('td');
    celdaPlazos.textContent = data.plazo;

    const button_img = document.createElement('img');
    button_img.src = '../static/resource/svg/menu.svg'

    let celdaAcciones = document.createElement('button');
    celdaAcciones.appendChild(button_img)
    celdaAcciones.value = data.id


    array_tr.append(celdaCliente, celdaPrestamo, celdaPlazos, celdaAcciones)
    table_body.appendChild(array_tr);
});

