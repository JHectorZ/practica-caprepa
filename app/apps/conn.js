//Exportacion de la funcion para obtener el nombre y el ID del la base de datos
export function getDataNames() {
  return new Promise((resolve, reject) => {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4) {
        if (this.status == 200) {
          const response = JSON.parse(this.responseText);
          resolve(response);
        } else {
          reject(new Error('Error en la solicitud'));
        }
      }
    };
    xhttp.open("GET", "../include/survey.php?func=getDataNames", true);
    xhttp.send();
  });
}



//Exportacion de la funcion que te retorna los prestamos de todos los clientes
export function getDataAll() {
  return new Promise((resolve, reject) => {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4) {
        if (this.status == 200) {
          const response = JSON.parse(this.responseText);
          resolve(response);
        } else {
          reject(new Error('Error en la solicitud'));
        }
      }
    };
    xhttp.open("GET", "../include/survey.php?func=getDataAll", true);
    xhttp.send();
  });
}


//Exportacion de la funcion que te retorna los prestamos de 1 cliente en particular
export function getDataById(client_id) {
  return new Promise((resolve, reject) => {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4) {
        if (this.status == 200) {
          const response = JSON.parse(this.responseText);
          resolve(response);
        } else {
          reject(new Error('Error en la solicitud'));
        }
      }
    }; 
    xhttp.open("GET", '../include/survey.php?func=getDataById&client_id=' + client_id, true);
    xhttp.send();
  });
}


//Exportacion de la funcion que guarda los prestamos de las peronas 
export function setDataLoan(client_id, amount, term) {
  return new Promise((resolve, reject) => {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4) {
        if (this.status == 200) {
          const response = JSON.parse(this.responseText);
          resolve(response);
        } else {
          reject(new Error('Error en la solicitud'));
        }
      }
    };
    query_string = '&client=' + client_id + '&amount=' + amount + '&term=' + term;
    xhttp.open("GET", '../include/survey.php?func=setDataLoan' + query_string, true);
    xhttp.send();
  });
}