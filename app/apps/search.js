//Importaciones de modulos que ocuparemos
import { show_table, error_404 } from './table.js';
import { getDataAll } from './conn.js';

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


// Funcion de sugerencia de busquedas
const autoCompleteJS = new autoComplete({
    placeHolder: "Search for Food...",
    data: {
        src: ["Sauce - Thousand Island", "Wild Boar - Tenderloin", "Goat - Whole Cut"]
    },
    resultItem: {
        highlight: true,
    }
});

