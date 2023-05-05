<?php
class PDOManager {
    private $host;
    private $dbname;
    private $user;
    private $password;
    private $charset;


    public function __construct(){
        $this->host = '127.0.0.1';
        $this->dbname = 'proyecto';
        $this->user = 'dev';
        $this->password = 'K/yFpTF5!9!L0Gn2';
        $this->charset = 'utf8mb4';

    }


    public function connect(){
        try {
            $connection = "mysql:host=" . $this->host . ";dbname=" . $this->dbname;

            $options = [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_EMULATE_PREPARES => false
            ];

            $pdo = new PDO($connection, $this->user, $this->password, $options);
        } catch (PDOException $e) {
            print_r("Error connection: " . $e->getMessage());
        }
    }


}
?>
