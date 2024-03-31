// 71. Escribir un programa que pida al usuario un número entero y muestre por pantalla si es un número primo o no.

// Función para verificar si un número es primo
function esPrimo(numero) {
    // Comprobar si el número es menor o igual a 1
    if (numero <= 1) {
        return false; // Si es menor o igual a 1, no es primo
    }

    // Bucle para verificar si el número es divisible por algún número entre 2 y su raíz cuadrada
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        // Si el número es divisible por i, no es primo
        if (numero % i === 0) {
            return false;
        }
    }
    // Si no se encontraron divisores, el número es primo
    return true;
}

// Función para verificar si un número es primo y mostrar el resultado
function verificarPrimo() {
    // Obtener el número ingresado por el usuario
    const numero = parseInt(document.getElementById("numeroInput").value);
    let mensaje;

    // Verificar si el valor ingresado no es un número válido
    if (isNaN(numero)) {
        mensaje = "Por favor, ingrese un número válido.";
    } else {
        // Si el valor ingresado es un número, llamar a la función esPrimo(numero)
        if (esPrimo(numero)) {
            mensaje = `${numero} es un número primo.`; // Mensaje si el número es primo
        } else {
            mensaje = `${numero} no es un número primo.`; // Mensaje si el número no es primo
        }
    }

    // Mostrar el mensaje en el elemento HTML con el id "resultado"
    document.getElementById("resultado").textContent = mensaje;
}

// EXPLICACION DEL EJERCICIO

// función esPrimo(numero):
// Esta función recibe un número como argumento y verifica si es primo.
// Comienza comprobando si el número es menor o igual a 1, ya que los números menores o iguales a 1 no son primos. Si lo son, la función devuelve false.
// Luego, utiliza un bucle for para verificar si el número es divisible por algún número entre 2 y su raíz cuadrada (inclusive). Si encuentra algún divisor,
// el número no es primo y la función devuelve false.
// Si el bucle completa su ejecución sin encontrar ningún divisor, significa que el número es primo y la función devuelve true.

// Función verificarPrimo(numero):
// Esta función recibe un número como argumento y verifica si es primo, luego muestra un mensaje con el resultado.
// Declara una variable mensaje para almacenar el mensaje que se mostrará al usuario.
// Verifica si el valor ingresado no es un número utilizando isNaN(numero). Si no es un número, establece el mensaje de error correspondiente.
// Si el valor ingresado es un número, llama a la función esPrimo(numero) para determinar si es primo.
// Dependiendo del resultado de esPrimo(numero), se establece el mensaje indicando si el número es primo o no.

// muestra el mensaje en un elemento HTML con el id "resultado" utilizando document.getElementById("resultado").textContent.
