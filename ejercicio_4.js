// 4. Escribir un programa que pida al usuario un numero entero y muestre por pantalla si es par o impar.

function verificarParImpar() {
    // Obtener el número ingresado por el usuario
    let numero = parseInt(document.getElementById("numeroInput").value);
    let resultadoElement = document.getElementById("resultado");

    // Verificar si el número es par o impar
    if (numero % 2 === 0){
        // Si el número es par, mostrar "es un número par."
        resultadoElement.textContent = `${numero} es un número par.`;
    } else { 
        // Si el número es impar, mostrar "es un número impar."
        resultadoElement.textContent = `${numero} es un número impar.`;
   }
}

// EXPLICACION DEL EJERCICIO 

// Obtención del número ingresado:
// Utilizamos document.getElementById("numeroInput").value para obtener el valor ingresado por el usuario en el campo de entrada identificado por el ID "numeroInput".
// Este valor se almacena en la variable numero después de convertirlo a un número entero utilizando parseInt().

// Definición del elemento de resultado:
// Utilizamos document.getElementById("resultado") para obtener el elemento HTML donde se mostrará el resultado de si el número es par o impar.
// Este elemento se almacena en la variable resultadoElement.

// Verificación de par o impar:
// Utilizamos la expresión numero % 2 === 0 para verificar si el número es par o impar.
// Si el residuo de dividir numero entre 2 es igual a cero, significa que el número es par, por lo que establecemos el contenido del elemento 
// resultadoElement para mostrar que el número es par.
// Si el residuo no es cero, significa que el número es impar, por lo que establecemos el contenido del elemento resultadoElement 
// para mostrar que el número es impar.

// Mostrando el resultado:
// Se utiliza resultadoElement.textContent para establecer el texto que se mostrará dentro del elemento HTML identificado por "resultado".
// Dependiendo de si el número es par o impar, mostramos un mensaje indicando el resultado correspondiente, utilizando la interpolación de cadenas para incluir el valor del número.