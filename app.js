//Sirve para chequear que se conecto mi archivo JS
console.log("Conectado");

//Para que el usuario ingrese su nombre, parte de la base que mientras el nombre sea falso (que el usuario no haya escrito nada), te va a tirar alerta y luego vuelve a darte el prompt.
let nombreUsuario;

while (!nombreUsuario) {
  nombreUsuario = prompt("Escribe tu nombre:").trim();
  if (!nombreUsuario) {
    alert("Por favor, escribe tu nombre.");
  }
}
//Para que el usuario ingrese su apellido, parte de la base que mientras el input sea falso (que el usuario no haya escrito nada), te va a tirar alerta y luego vuelve a darte el prompt.
let apellidoUsuario;

while (!apellidoUsuario) {
  apellidoUsuario = prompt("Escribe tu apellido:").trim();
  if (!apellidoUsuario) {
    alert("Por favor, escribe tu apellido.");
  }
}
let bienvenidoUsuario =
  "Ahora tienes acceso a la página " +
  nombreUsuario +
  " " +
  apellidoUsuario +
  "!";
alert(bienvenidoUsuario);

//Para que el usuario ingrese un numer, parte de la base que mientras el nombre sea falso (que el usuario no haya escrito nada), te va a tirar alerta y luego vuelve a darte el prompt.
let userName;

do {
  userName = prompt("Elige un nombre de usuario");
} while (!userName);

alert("Tu usuario es: " + userName);
