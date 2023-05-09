//Exportacion de la funcion para obtener el nombre y el ID del la base de datos
export function getTableNames() {
  return new Promise((resolve, reject) => {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4) {
        if (this.status == 200) {
          const response = JSON.parse(this.responseText);
          resolve(response);
        } else {
          reject(new Error('Error en la petición AJAX'));
        }
      }
    };
    xhttp.open("GET", "../include/survey.php?func=getTableNames", true);
    xhttp.send();
  });
}

//Exportacion de la funcion que te retorna los prestamos de todos los clientes
export function getPrestamos() {
  return fetch('../include/survey.php?func=getPrestamos')
    .then(response => response.json())
}


//Exportacion de la funcion que te retorna los prestamos de 1 cliente en particular
export function getPrestamosByIdCliente(idCliente) {
  return new Promise(function(resolve, reject) {
      $.ajax({
          url: '../include/survey.php?func=getPrestamosByIdCliente&idCliente=' + idCliente,
          type: 'GET',
          dataType: 'json',
          success: function(response) {
                var jsonResponse = JSON.parse(response);
                resolve(jsonResponse);
          },
          error: function(xhr, status, error) {
              console.error(error);
              // Rechaza la promesa si la llamada AJAX falla
              reject(error);
          }
      });
  });
}


//Exportacion de la funcion que te retorna un array con los nombres de las personas
export function getArrayNames() {
  return new Promise((resolve, reject) => {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4) {
        if (this.status == 200) {
          const response = JSON.parse(this.responseText);
          resolve(response);
        } else {
          reject(new Error('Error en la petición AJAX'));
        }
      }
    };
    xhttp.open("GET", "../include/survey.php?func=getTableNames", true);
    xhttp.send();
  });
}
