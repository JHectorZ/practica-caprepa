<?php

// Traemos el PDO para que asi mismo podamos trabajar con el nuestra clase que nos servira para el manejo de datos
include_once './conn.php';

class Surver extends PDOManager {
    private $query_get_names = "SELECT nombre, id FROM clientes;";
    private $query_get_all_data = "SELECT c.id AS id_cliente, c.nombre AS nombre_cliente, p.id AS id_prestamo, p.monto, p.interes, p.plazos, p.fecha_inicio FROM clientes c INNER JOIN prestamos p ON c.id = p.id_cliente ORDER BY c.id, p.id;";
    private $query_get_one_data = "SELECT c.id, c.nombre, p.monto, p.interes, p.plazos, p.fecha_inicio FROM clientes c JOIN prestamos p ON c.id = p.id_cliente WHERE c.id = :idCliente";


    // Metodo para la obtencion de objetos mediante el "string_query" 
    public function getDataObjects() {
        $query = $this->connect()->prepare();
        $query->execute();
        $tableNames = $query->fetchAll(PDO::FETCH_ASSOC);
        return $tableNames;
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
    

    public function getPrestamosByIdCliente($idCliente) {
        $query = $this->connect()->prepare();
        $query->bindParam(':idCliente', $idCliente);
        $query->execute();
        $results  = $query->fetchAll(PDO::FETCH_ASSOC);
        return $results;
    }
}

$tableNames = new TableNames();

// leer el parámetro "func" de la URL
$func = isset($_GET['func']) ? $_GET['func'] : '';

// llamar a la función correspondiente según el valor de "func"
switch ($func) {
    case 'getPrestamos':
        $response = $tableNames->getPrestamos();
        break;
    case 'getTableNames':
        $response = $tableNames->getTableNames();
        break;
    case 'guardarPrestamo':
        $response = [$_POST['client'], $_POST['amount'], $_POST['term']];
        $tableNames->guardarPrestamo($_POST['client'], $_POST['amount'], $_POST['term']);
        break;
    case 'getPrestamosByIdCliente':
        $idCliente = isset($_GET['idCliente']) ? $_GET['idCliente'] : '';
        $response = $tableNames->getPrestamosByIdCliente($idCliente);
        break;
    default:
        $response = [];
}

echo json_encode($response);

?>
