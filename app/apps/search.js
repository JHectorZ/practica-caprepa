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


async function createAutoComplete() {
    const array_names = await getDataAll().then((client)=>{
        return client.map(name => name.nombre_cliente);
    });
    const autoCompleteJS = new autoComplete({
      placeHolder: "Search for Food...",
      data: {
        src: array_names
      },
      resultItem: {
        highlight: true,
      }
    });
}


createAutoComplete();
  


// const lista = document.getElementById("completeList");

// const show_suggestions = (sugerencias) => {
//   lista.innerHTML = sugerencias.map(sugerencia => `<li>${sugerencia}</li>`).join("");
// };

// export function suggestions(valor, sugerencias){
//     if (valor.length < 3) return;
//     const sugerenciasCoincidentes = sugerencias.filter(sugerencia => sugerencia.includes(valor));
//     show_suggestions(sugerenciasCoincidentes);
// }


