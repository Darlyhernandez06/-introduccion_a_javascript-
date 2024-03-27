// 11. Escribir un programa que sume, resta, multiplique y divida dos números.

function realizarOperaciones() {
    // Obtener los números ingresados por el usuario
    let numero_1 = parseFloat(document.getElementById("num1").value);
    let numero_2 = parseFloat(document.getElementById("num2").value);

     // Calcular los resultados de las operaciones
    let suma = numero_1 + numero_2;
    let resta = numero_1 - numero_2;
    let multiplicacion = numero_1 * numero_2;
    let division = numero_1 / numero_2;

     // Mostrar los resultados en el HTML
     document.getElementById("suma").innerText = "Suma: " + suma;
     document.getElementById("resta").innerText = "Resta: " + resta;
     document.getElementById("multiplicacion").innerText = "Multiplicación: " + multiplicacion;
     
     // Verificar si el segundo número es cero antes de mostrar la división
     if (numero_2 === 0) {
         document.getElementById("division").innerText = "División: No se puede dividir por cero";
     } else {
         document.getElementById("division").innerText = "División: " + division;
     }
}

// EXPLICACION DEL EJERCICIO

// Función realizarOperaciones():
// Esta función se activa cuando el usuario hace clic en el botón de "Calcular" en una interfaz de usuario
// es realizar operaciones aritméticas básicas (suma, resta, multiplicación y división) entre dos números ingresados por el usuario y
// mostrar los resultados en el HTML.

// Obtención de los números ingresados por el usuario:
// Utiliza document.getElementById("num1").value y document.getElementById("num2").value para obtener los valores ingresados por el usuario en
// los campos de entrada con los IDs "num1" y "num2", respectivamente.
// Los valores obtenidos se convierten a números decimales utilizando parseFloat() para garantizar que se puedan realizar cálculos aritméticos correctamente.

// Cálculo de los resultados de las operaciones:
// Se calculan cuatro resultados: suma, resta, multiplicación y división.
// La suma se calcula sumando numero_1 y numero_2.
// La resta se calcula restando numero_2 de numero_1.
// La multiplicación se calcula multiplicando numero_1 por numero_2.
// La división se calcula dividiendo numero_1 por numero_2.

// Mostrar los resultados en el HTML:
// Los resultados de las operaciones se muestran en el HTML utilizando document.getElementById("idDelElemento").innerText.
// Cada resultado se asigna al contenido de un elemento HTML específico mediante su ID correspondiente ("suma", "resta", "multiplicacion", "division").
// El formato del texto muestra el tipo de operación seguido del resultado calculado.

// Verificar la división por cero:
// Antes de mostrar el resultado de la división, se verifica si el segundo número (numero_2) es igual a cero.
// Si numero_2 es cero, se muestra un mensaje indicando que la división por cero no es posible.
// En caso contrario, se muestra el resultado de la división normalmente.