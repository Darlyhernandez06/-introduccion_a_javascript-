// 3. Escribir un programa que pida al usuario dos números y muestre por pantalla su división, si
// el divisor es cero el programa debe mostrar un error, se debe manejar mediante
// excepciones y el mensaje debe ser personalizado.

function dividir() {
    // Obtener los números ingresados por el usuario
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);
    let resultadoElement = document.getElementById("resultado");

    try {
        // Verificar si el divisor es cero
        if (numero2 === 0) {
            throw new Error("¡Error! No se puede dividir por cero.");
        }
        
        // Realizar la división
        let resultado = numero1 / numero2;

        // Mostrar el resultado
        resultadoElement.textContent = `El resultado de la división es: ${resultado}`;
    } catch (error) {
        // Manejar la excepción si se produce un error
        resultadoElement.textContent = error.message;
    }
}


// EXPLICACION DEL EJERCICIO 

// Obtención de valores:
// Se utiliza parseFloat() para obtener los valores de los números ingresados por el usuario desde los elementos de entrada en el HTML. 
//Estos valores se almacenan en las variables numero_1 y numero_2.

// Definición de elementos HTML:
// Se asigna el elemento HTML con el ID "resultado" a la variable resultadoElement, el cual será utilizado para mostrar el resultado de la 
// operación o mensajes de error.

// Manejo de excepciones con try-catch:
// Se utiliza un bloque try-catch para manejar posibles errores que puedan surgir durante la ejecución de la función.

// Verificación de división por cero:
// Dentro del bloque try, se verifica si el segundo número (numero_2) es igual a cero. Si es cero, se lanza una excepción utilizando throw new Error() 
// con un mensaje de error personalizado. Esto evita que la división por cero cause un error en la aplicación.

// Realización de la división:
// Si no se lanza ninguna excepción, se realiza la división de numero_1 entre numero_2 y se almacena el resultado en la variable resultado.

// Mostrando el resultado o mensaje de error:
// Si no se produce ningún error durante la ejecución, se establece el texto del elemento resultadoElement para mostrar el resultado de la división.
// Si ocurre un error durante la ejecución (por ejemplo, si numero_2 es cero), se maneja dentro del bloque catch y se establece el texto del elemento 
// resultadoElement para mostrar el mensaje de error correspondiente.

// El operador === devuelve true si los valores y los tipos de datos de los operandos son iguales. De lo contrario, devuelve false.
// En este caso específico, ${resultado} se utilizaría para incrustar el valor de la variable resultado dentro de una cadena de texto.