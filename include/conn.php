<?php


// Archivo de credenciales
include_once('./config.php');


// Clase PDOManager sera la encargada de manejar la conexion con la base de datos
class PDOManager {
    protected $host;
    protected $dbname;
    protected $user;
    protected $password;
    protected $charset;
    protected $pdo;


    // Credenciales para la conexion con la DB
    public function __construct(){
        $config = include('config.php');
        $this->host = $config['host'];
        $this->dbname = $config['dbname'];
        $this->user = $config['user'];
        $this->password = $config['password'];
        $this->charset = $config['charset'];
    }

    // Metodo de conexion hacia la base de datos
    public function connect() {
        if (!$this->pdo) {
            $dsn = "mysql:host=$this->host;dbname=$this->dbname;charset=$this->charset";
            $this->pdo = new PDO($dsn, $this->user, $this->password);
            $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        }
        return $this->pdo;
    }
}
?>
