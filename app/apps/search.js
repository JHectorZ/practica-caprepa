//Importaciones de modulos que ocuparemos
import { show_table, error_404 } from './table.js';
import { getDataAll, getDataNames } from './conn.js';

// Obtenemos elementos del DOOM
const input_search = document.getElementById('autoComplete');
const list_suggestions = document.getElementById('suggestions');


//Funcionamiento interno
export function search_client(frame){
    getDataAll().then((clients)=>{
        const search_frame = clients.filter(client=>client.nombre_cliente === frame);
        if(search_frame != undefined){
            show_table(search_frame);
            // return search_frame;
        } else {
            error_404();
        };
    })
};

const autoCompleteJS = new autoComplete({
  placeHolder: "Buscar cliente.",
  data: {
    src: async (query) => {
      try {
        const array_names = await getDataAll().then((client)=>{
          return client.map(name => name.nombre_cliente);
        });

        return array_names;
      } catch (error) {
        return error;
      }
    },
},
  resultItem: {
      highlight: true,
  }
});
