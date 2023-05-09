//Importaciones de modulos que ocuparemos
import { filter , show_client } from './table.js';
import { getPrestamos } from './conn.js';


// Funcionamiento de busqueda de clientes
btn_search.addEventListener('click', () => {
    getPrestamos().then((clientes) => {
      const clienteBuscado = clientes.find(cliente => cliente.nombre_cliente === search_client.value);
      if (clienteBuscado) {
        show_client(filter(clientes, search_client.value));
      } else {
        console.log('No está en la lista');
      }
    });
  });

//Funcionamiento del prestamo
btn_append.addEventListener('click', (() =>{
    window.location.href = '../template/register.html'
}));
