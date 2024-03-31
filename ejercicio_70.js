// 70.  Escribir un programa que almacene la cadena de caracteres contraseña en una variable, 
// pregunte al usuario por la contraseña hasta que introduzca la contraseña correcta.

// Contraseña correcta almacenada en una variable
const ContrasenaCorrecta = "Migue062912";

// Función para solicitar la contraseña
const SolicitarContrasena = () => {
    let ContrasenaIngresada;

    // Solicitar al usuario que ingrese la contraseña hasta que sea correcta
    do {
        ContrasenaIngresada = prompt("Por favor, ingrese la contraseña:");
    } while (ContrasenaIngresada !== ContrasenaCorrecta);

    alert("¡Contraseña correcta! Bienvenido.");
}

SolicitarContrasena(); // Llamar a la función para comenzar el proceso de ingreso de contraseña

// EXPLICACION DEL EJERCICIO

// Definición de la contraseña correcta: Se define la contraseña correcta almacenada en una variable llamada ContrasenaCorrecta. En este caso, la 
// contraseña es "Migue062912".

// Función para solicitar la contraseña: Se declara una función llamada SolicitarContrasena. Dentro de esta función:
// Se inicializa una variable ContrasenaIngresada para almacenar la contraseña que ingrese el usuario.
// Se utiliza un bucle do-while para solicitar al usuario que ingrese la contraseña repetidamente hasta que la contraseña ingresada coincida con la 
// contraseña correcta.
// Dentro del bucle, se utiliza la función prompt para mostrar un cuadro de diálogo al usuario y permitirle ingresar la contraseña.
// El bucle se ejecuta mientras la contraseña ingresada por el usuario sea diferente a la contraseña correcta.
// Una vez que el usuario ingresa la contraseña correcta, se muestra un mensaje de alerta que indica que la contraseña es correcta y da la bienvenida 
// al usuario.

// Llamada a la función principal: Al final del código, se llama a la función SolicitarContrasena() para iniciar el proceso de ingreso de la contraseña.