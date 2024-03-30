// 5. Para tributar un determinado impuesto se debe ser mayor de 16 años y tener unos 
// ingresos iguales o superiores a 1000 mensuales, escribir un programa que pregunte al 
// usuario su edad e ingresos mensuales y muestre por pantalla si el usuario debe tributar o no. 

function verificarTributacion() {
    // Obtener los valores de edad e ingresos ingresados por el usuario
    let edad = document.getElementById("edadInput").value;
    let ingresos = document.getElementById("ingresosInput").value;
    let resultadoElement = document.getElementById("resultado");

    // Verificar si la edad es mayor que 16 y los ingresos son mayores o iguales a 1000
    if (edad > 16 && ingresos >= 1000 ) {
        // Si se cumple la condición, mostrar "Debe tributar."
        resultadoElement.innerText = "Debe tributar.";
    } else {
        // Si no se cumple la condición, mostrar "No debe tributar."
        resultadoElement.innerText = "No debe tributar.";
    }
}


// EXPLICACION DEL EJERCICIO 

// La edad del usuario debe ser mayor que 16 años y los ingresos mensuales del usuario deben ser iguales o superiores a $1000.
// primero se le pide al usuario que ingrese su edad y sus ingresos mensuales a través de un formulario HTML. Una vez que el usuario hace clic 
// en el botón "Verificar", se ejecuta una función de JavaScript llamada verificarTributacion().
// Variables edad e ingresos: Estas variables se inicializan utilizando document.getElementById("edadInput").value 
// y document.getElementById("ingresosInput").value, respectivamente. Estas líneas de código obtienen los valores ingresados 
// por el usuario en los campos de entrada correspondientes a la edad y los ingresos mensuales.
// Variable resultadoElement: Esta variable se inicializa utilizando document.getElementById("resultado"). Se utiliza para hacer 
// referencia al elemento HTML donde se mostrará el resultado de la verificación (si debe tributar o no).

// Dentro de esta función:
// Condición if: Se evalúa si la edad ingresada por el usuario es mayor que 16 (edad > 16) y si los ingresos mensuales son iguales o 
// superiores a $1000 (ingresos >= 1000).
// Bloque if: Si la condición se cumple, es decir, si la edad es mayor que 16 y los ingresos son iguales o superiores a $1000, entonces 
// se ejecuta el bloque de código dentro del if. En este bloque, se establece el texto del elemento con id "resultado" 
// utilizando resultadoElement.innerText como "Debe tributar.".
// Bloque else: Si la condición del if no se cumple, se ejecuta el bloque de código dentro del else. En este caso, 
// se establece el texto del elemento con id "resultado" como "No debe tributar."