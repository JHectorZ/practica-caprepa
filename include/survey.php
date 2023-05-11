<?php

// Traemos el PDO para que asi mismo podamos trabajar con el nuestra clase que nos servira para el manejo de datos
include_once './conn.php';

class Surver extends PDOManager {


    // Metodo para la obtencion de objetos mediante el "string_query" 
    public function getDataObjects($query) {
        $query = $this->connect()->prepare($query);
        $query->execute();
        $tableNames = $query->fetchAll(PDO::FETCH_ASSOC);
        return $tableNames;
    }
    

    // Metodo para enviar datos de clientes a la DB mediante el "query_string"
    public function saveClient($name, $age, $domicile, $email){
        $query = $this->connect()->prepare("INSERT INTO clientes (nombre, edad, domicilio, correo) VALUES (:nombre, :edad, :domicilio, :correo)");
        $query->bindParam(':nombre', $name);
        $query->bindParam(':edad', $age);
        $query->bindParam(':domicilio', $domicile);
        $query->bindParam(':correo', $email);
        $query->execute();
    }


    // Metodo para enviar los datos a la DB mediante el "query_string"
    public function saveLoan($client, $amount, $term) {
        $query = $this->connect()->prepare("INSERT INTO prestamos (id_cliente, monto, interes,plazos, fecha_inicio) VALUES (:cliente, :monto, 0, :plazo, :fecha_inicio)");
        $query->bindParam(':cliente', $client);
        $query->bindParam(':monto', $amount);
        $query->bindParam(':plazo', $term);
        $query->bindParam(':fecha_inicio', date("Y-m-d"));
        $query->execute();
    }
    

    // Metodo para obtencion de objetos mediante el "string_query" en base al id
    public function getDataObjectsById($client_id) {
        $query = $this->connect()->prepare("SELECT c.id, c.nombre, p.monto, p.interes, p.plazos, p.fecha_inicio FROM clientes c JOIN prestamos p ON c.id = p.id_cliente WHERE c.id = :idCliente");
        $query->bindParam(':idCliente', $client_id);
        $query->execute();
        $results  = $query->fetchAll(PDO::FETCH_ASSOC);
        return $results;
    }
}


//Creamos objeto y recibidor de peticiones
$survey_connect = new Surver(); 
$func = isset($_GET['func']) ? $_GET['func'] : ''; 


// Medianteel recibidor del URL 
switch ($func) {
    case 'getDataNames':
        $response = $survey_connect->getDataObjects("SELECT nombre, id FROM clientes;");
        break;

    case 'getDataAll':
        $response = $survey_connect->getDataObjects("SELECT c.id AS id_cliente, c.nombre AS nombre_cliente, p.id AS id_prestamo, p.monto, p.interes, p.plazos, p.fecha_inicio FROM clientes c INNER JOIN prestamos p ON c.id = p.id_cliente ORDER BY c.id, p.id;");
        break;

    case 'setDataLoan':
        // $response = [$_POST['client'], $_POST['amount'], $_POST['term']];
        $survey_connect->saveLoan($_POST['client'], $_POST['amount'], $_POST['term']);
        $response = "El prestamo fue ingresado con exito";
        break;
        
    case 'getDataById':
        $client_id = isset($_GET['client_id']) ? $_GET['client_id'] : '';
        // $response = 'El ID que enviaste es el: ' . $client_id;
        $response = $survey_connect->getDataObjectsById($client_id);
        break;

    case 'setDataClient':
        // $query_string = [$_POST['name'] , $_POST['age'], $_POST['domicile'], $_POST['email']];
        // $response = 'Los datos que enviaste fueron: ' . $_POST['name'] . $_POST['age'] . $_POST['domicile'] . $_POST['email'];
        $survey_connect->saveClient($_POST['name'], $_POST['age'], $_POST['domicile'], $_POST['email']);
        $response = "El cliente fue ingresado con exito";
        break;

    default:
        $response = 'Error en la solicitud de metodo, metodo solicitado: ' . $func;
}

// Se regresa en json
echo json_encode($response);

?>
