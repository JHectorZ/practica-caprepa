<?php

// Clase PDOManager sera la encargada de manejar la conexion con la base de datos
class PDOManager {
    private $host;
    private $dbname;
    private $user;
    private $password;
    private $charset;


    // Asignacion de valores a los atriburos de la clase, son privados para que solo puedan acceder por dentro
    public function __construct(){
        $this->host = '127.0.0.1';
        $this->dbname = 'proyecto';
        $this->user = 'dev';
        $this->password = 'K/yFpTF5!9!L0Gn2';
        $this->charset = 'utf8mb4';

    }


    // Metodo de conexion hacia la base de datos
    public function connect(){
        try {
            $connection = "mysql:host=" . $this->host . ";dbname=" . $this->dbname;

            $options = [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_EMULATE_PREPARES => false
            ];

            $pdo = new PDO($connection, $this->user, $this->password, $options);

            return $pdo;
        } catch (PDOException $e) {
            echo("Error connection: " . $e->getMessage());
        }
    }


}
?>
