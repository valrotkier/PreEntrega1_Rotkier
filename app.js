//Sirve para chequear que se conectó mi archivo JS
console.log("Conectado");

// LLamo a la función de jugarJuego para que se inicie una vez cargada la página.
jugarJuego();
function eligeMovimientoComputadora() {
  const randomNumber = Math.random();
  let eleccionComputadora = "";
  // Aca se genera una elección al azar para la computadora
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    eleccionComputadora = "Piedra";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    eleccionComputadora = "Papel";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    eleccionComputadora = "Tijera";
  }
  // Return para que el resultado pueda ser usado fuera del scope del condicional de la eleccionComputadora
  return eleccionComputadora;
}

function jugarJuego() {
  let usuarioGana = 0;
  let computadoraGana = 0;

  while (usuarioGana < 2 && computadoraGana < 2) {
    const inputUsuario = prompt(
      "Gana el mejor de 3.\nEscribe Piedra, Papel o Tijera:"
    );
    if (inputUsuario === null) {
      break; // El usuario canceló el juego
    }

    // Aca declaramos una variable para la selección de usuario que tenga un formato más uniforme y válido, pasamos lo que escribió ('string') a 'Piedra' 'Papel' o 'Tijera' especificamente.
    const eleccionUsuario =
      inputUsuario.trim().charAt(0).toUpperCase() +
      inputUsuario.trim().slice(1).toLowerCase();

    // Comprobación de elección válida del jugador
    if (
      eleccionUsuario === "Piedra" ||
      eleccionUsuario === "Papel" ||
      eleccionUsuario === "Tijera"
    ) {
      const eleccionComputadora = eligeMovimientoComputadora();

      let resultado = "";
      // Esto determina el resultado de la ronda
      if (eleccionUsuario === "Tijera") {
        if (eleccionComputadora === "Piedra") {
          resultado = "PERDISTE";
          computadoraGana++;
        } else if (eleccionComputadora === "Papel") {
          resultado = "GANASTE";
          usuarioGana++;
        } else {
          resultado = "EMPATE";
        }
      } else if (eleccionUsuario === "Papel") {
        if (eleccionComputadora === "Piedra") {
          resultado = "GANASTE";
          usuarioGana++;
        } else if (eleccionComputadora === "Papel") {
          resultado = "EMPATE";
        } else {
          resultado = "PERDISTE";
          computadoraGana++;
        }
      } else if (eleccionUsuario === "Piedra") {
        if (eleccionComputadora === "Piedra") {
          resultado = "EMPATE";
        } else if (eleccionComputadora === "Papel") {
          resultado = "PERDISTE";
          computadoraGana++;
        } else {
          resultado = "GANASTE";
          usuarioGana++;
        }
      }

      alert(
        `${resultado}. Elegiste ${eleccionUsuario}. Computadora eligió ${eleccionComputadora}.`
      );
    } else {
      alert(
        "Lo que escribiste no es aceptable para poder jugar. Por favor, elige entre Piedra, Papel o Tijera."
      );
    }
  }
  // Sale del bucle
  if (usuarioGana >= 2) {
    alert("Ganaste el mejor de 3!");
  } else {
    alert("La computadora te gano el mejor de 3.");
  }
}
