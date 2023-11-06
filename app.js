//Sirve para chequear que se conecto mi archivo JS
console.log("Conectado");

jugarJuego();
function eligeMovimientoComputadora() {
  const randomNumber = Math.random();
  let eleccionComputadora = "";
  // genero una eleccion al azar para la computadora
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    eleccionComputadora = "Piedra";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    eleccionComputadora = "Papel";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    eleccionComputadora = "Tijera";
  }
  //tiro el return para que el resultado pueda ser usado fuera del scope del condicional de la eleccionComputadora
  return eleccionComputadora;
}

function jugarJuego() {
  const inputUsuario = prompt("Elige Piedra, Papel o Tijera:");
  //Aca declaramos una variable para la seleccion de usuario que tenga un formato mas uniforme y valida, pasamos lo que escribio ('string') a 'Piedra' 'Papel' o 'Tijera' especificamente.
  const eleccionUsuario =
    inputUsuario.trim().charAt(0).toUpperCase() +
    inputUsuario.slice(1).toLowerCase();

  if (
    eleccionUsuario === "Piedra" ||
    eleccionUsuario === "Papel" ||
    eleccionUsuario === "Tijera"
  ) {
    const eleccionComputadora = eligeMovimientoComputadora();

    let resultado = "";
    if (eleccionUsuario === "Tijera") {
      if (eleccionComputadora === "Piedra") {
        resultado = "PERDISTE";
      } else if (eleccionComputadora === "Papel") {
        resultado = "GANASTE";
      } else {
        resultado = "EMPATE";
      }
    } else if (eleccionUsuario === "Papel") {
      if (eleccionComputadora === "Piedra") {
        resultado = "GANASTE";
      } else if (eleccionComputadora === "Papel") {
        resultado = "EMPATE";
      } else {
        resultado = "PERDISTE";
      }
    } else if (eleccionUsuario === "Piedra") {
      if (eleccionComputadora === "Piedra") {
        resultado = "Empate";
      } else if (eleccionComputadora === "Papel") {
        resultado = "PERDISTE";
      } else {
        resultado = "GANASTE";
      }
    }

    alert(
      `${resultado}. Elegiste ${eleccionUsuario}. Computadora eligió ${eleccionComputadora}.`
    );
  } else {
    alert("Por favor, elige Piedra, Papel o Tijera.");
  }
}
