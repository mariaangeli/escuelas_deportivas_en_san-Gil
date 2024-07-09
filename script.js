// Ejemplo de cambiar la imagen de fondo cuando se hace clic en un botón
const container = document.querySelector('.container');

document.addEventListener('DOMContentLoaded', function() {
  // Cargar una imagen diferente al principio
  container.style.backgroundImage = "url('deportes_3.jpg')";
});

// Ejemplo de cambiar la imagen al hacer clic en un botón
const botonCambiarImagen = document.getElementById('cambiar-imagen');

botonCambiarImagen.addEventListener('click', function() {
  container.style.backgroundImage = "url('deportes_3.jpg')";
});
