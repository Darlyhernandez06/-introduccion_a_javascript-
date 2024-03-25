// 1. Escribir un programa que pregunte al usuario su edad y muestre por pantalla si es mayor o
// menor de edad, el programa debe validar que solo se puedan ingresar números positivos. 


function validarEdad() {
    let edadInput = document.getElementById("edadInput").value;
    let resultado = document.getElementById("resultado");

    // Validar si se ingresó un número positivo 
    if (isNaN(edadInput) || edadInput <= 0) {
        resultado.textContent = "Por favor, ingrese un número positivo.";
    } else {
        // Convertir la entrada a un numero entero
        let edad = parseInt(edadInput);

        // Verificar si es mayor o menor de edad 
        if (edad >= 18) {
            resultado.textContent = "Eres mayor de edad.";
        } else {
            resultado.textContent = "Eres menor de edad.";
        }
    }
}

// EXPLICACION DEL EJERCICIO 

// Obtener los elementos HTML:
// Se utiliza document.getElementById() para obtener dos elementos del documento HTML:
// edadInput: El campo de entrada donde el usuario ingresará su edad.
// resultado: El elemento <p> donde se mostrará el resultado de la validación.


// Validación de la edad:
// Se verifica si el valor ingresado en edadInput no es un número (utilizando isNaN(edadInput)) o si es menor o igual a cero 
// (edadInput <= 0). Esto se coloca para que el usuario haya ingresado un número válido y positivo que pueda representar una edad.
// Si la validación no se cumple (esto quiere decir, si el valor ingresado no es un número o es un número negativo o cero), 
// se muestra un mensaje indicando al usuario que ingrese un número positivo.


// Procesamiento de la edad:
// Si el valor ingresado en edadInput pasa la validación, se convierte a un número entero utilizando parseInt().
// Luego, se va a comparar la edad obtenida con 18, ya que generalmente se dice que es mayor de edad
// Si la edad es mayor o igual a 18, se muestra un mensaje indicando que el usuario es mayor de edad. 
// Si es menor de 18, se muestra un mensaje indicando que es menor 