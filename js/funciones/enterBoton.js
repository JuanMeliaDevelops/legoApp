/* Funcion para que el enter active el boton de los formularios */

function enterBoton(event) {
    if (event.keyCode === 13) {
      document.getElementById("botonFormulario").click();
    }
  }
  