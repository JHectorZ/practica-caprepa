//Importaciones de modulos que ocuparemos
import { show_table, error_404 } from './table.js';
import { getDataAll } from './conn.js';


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


