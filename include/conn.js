// Petición AJAX para obtener los datos de la tabla "usuarios"
$.ajax({
  url: 'conn.php', // La URL del archivo PHP
  type: 'GET', // El tipo de petición que se está realizando
  data: { table: 'usuarios' }, // Los datos que se envían al archivo PHP
  success: function(response) {
      // Manejar la respuesta del servidor
      console.log(response);
  },
  error: function(xhr, status, error) {
      // Manejar el error de la petición
      console.log(error);
  }
});
