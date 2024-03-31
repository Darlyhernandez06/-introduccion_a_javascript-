// 74.  Escribir un programa que muestre el eco de todo lo que el usuario introduzca hasta que el 
// usuario escriba “salir” que terminará.

// Función para mostrar el eco de lo que el usuario introduzca
const mostrarEco = () => {
    // Obtener el valor del input del usuario
    const entradaUsuario = document.getElementById("inputUsuario").value.trim();

    // Verificar si el usuario escribió "salir"
    if (entradaUsuario.toLowerCase() === "salir") {
        // Si escribió "salir", mostrar un mensaje de despedida y limpiar el input
        document.getElementById("resultado").textContent = "¡Hasta luego!";
        document.getElementById("inputUsuario").value = "";
    } else {
        // Si no escribió "salir", mostrar el eco de lo que escribió el usuario
        document.getElementById("resultado").textContent = "Eco: " + entradaUsuario;
    }
};

// EXPLICACION DEL EJERCICIO

// Declaración de la función mostrarEco: Esta línea define una función llamada mostrarEco. Se utiliza la sintaxis de funciones de
// flecha de JavaScript (() => {}) para crear una función anónima.

// Obtención del valor del input del usuario:
// Utilizamos document.getElementById("inputUsuario") para obtener el elemento HTML con el ID "inputUsuario", que es el campo de entrada donde el 
// usuario escribe.
// Luego, accedemos a la propiedad value para obtener el valor actualmente ingresado por el usuario en ese campo.
// El método trim() se utiliza para eliminar los espacios en blanco al principio y al final del texto ingresado por el usuario.

// Verificación si el usuario escribió "salir":
// Aquí se compara el valor ingresado por el usuario con la cadena "salir". Se utiliza toLowerCase() para convertir el texto ingresado a minúsculas y
// asegurar que la comparación sea insensible a mayúsculas y minúsculas.

// Manejo del caso "salir":
// Si el usuario escribe "salir", establecemos el texto del elemento HTML con el ID "resultado" en "¡Hasta luego!". Esto muestra un mensaje de despedida 
// al usuario.
// También establecemos el valor del campo de entrada ("inputUsuario") en una cadena vacía para limpiar el campo después de que el usuario escribe "salir".

// Mostrar el eco de lo que escribió el usuario:
// Si el usuario no escribe "salir", mostramos el eco de lo que escribió. Concatenamos la cadena "Eco: " con el texto ingresado por el usuario 
// (entradaUsuario) y establecemos este valor como el texto del elemento con el ID "resultado".