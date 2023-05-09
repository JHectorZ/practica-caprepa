<?php
include_once './include/conn.php'
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="robots" content="index,follow">
    <meta name="description" content="Se debe desarrollar un Sistema Web que permita realizar préstamos a clientes. A cada cliente se le 
    debe de seleccionar el monto a prestar y plazo de pago. ">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/static/styles/styles.css?v=<?php echo(rand()); ?>" />
    <title>Sistema web - Prestamos</title>
</head>
<body>
    <main>
        <h4>REGISTRO DE PRESTAMOS</h4>
        <menu class="menu">
            <section class="menu-index">
                <div class="container">
                    <label>Cliente</label><br>
                    <input type="text" id="search_client">
                </div>
                <div class="container">
                    <input type="button" id="btn_search" value="Buscar">
                    <input type="submit" id="btn_append" value="Agregar Préstamo">                    
                </div>
            </section>
            <section class="menu-table">
                <table>
                    <thead>
                        <tr class="table_head" id="table_head"></tr>
                    </thead>
                    <tbody class="table_body" id="table_body">
                    </tbody>
                </table>
                  
            </section>
        </menu>
    </main>
    <script src="./app/main.js" type="module"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</body>
</html>