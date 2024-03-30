// 20.Escriba un algoritmo que permita obtener las raíces reales de la ecuación de segundo 
// grado: a * x2 + b + x + c, siendo X un valor constante. 

// Para encontrar las raíces reales de una ecuación cuadrática de la forma ax2 + bx + c = 0 podemos usar la fórmula cuadrática:
// x = −b ± b2−4ac / 2a
// Donde: a,b,c son los coeficientes de la ecuacion cuadratica, ± indica que hay dos soluciones posibles,
// b2−4ac es la parte dentro de la razi cuadrada

function encontrarRaices() {
    // Obtener los coeficientes A, B y C desde los elementos de entrada HTML
    let A = parseFloat(document.getElementById("coeficienteA").value);
    let B = parseFloat(document.getElementById("coeficienteB").value);
    let C = parseFloat(document.getElementById("coeficienteC").value);

    // Calcular el discriminante de la ecuación cuadrática
    let discriminante = B * B - 4 * A * C;

    // Determinar el tipo de raíces y mostrar el resultado en el HTML
    if (discriminante > 0) {
        // Dos raíces reales distintas
        let raiz1 = (-B + Math.sqrt(discriminante)) / (2 * A);
        let raiz2 = (-B - Math.sqrt(discriminante)) / (2 * A);
        document.getElementById('resultado').innerText = "Las raíces son: " + raiz1.toFixed(2) + " y " + raiz2.toFixed(2);
    } else if (discriminante === 0) {
        // Raíz doble
        let raiz = -B / (2 * A);
        document.getElementById('resultado').innerText = "La raíz doble es: " + raiz.toFixed(2);
    } else {
        // Sin raíces reales
        document.getElementById('resultado').innerText = "La ecuación no tiene raíces reales.";
    }
}

// EXPLICACION DEL EJERCICIO

// Función encontrarRaices(): Esta función se llama cuando se hace clic en el botón "Calcular Raíces" en la interfaz de usuario.

// La función obtiene los valores de los coeficientes A,B y C e la ecuación cuadrática desde los campos de entrada del HTML. Utiliza 
// document.getElementById() para obtener los elementos HTML con los ID "coeficienteA", "coeficienteB" y "coeficienteC", 
// y luego obtiene sus valores con la propiedad value.

// El discriminante de la ecuación cuadrática se calcula utilizando la fórmula B2 - 4AC Esto nos permite determinar la naturaleza de las raíces de la ecuación.

// Si el discriminante es mayor que cero, significa que hay dos raíces reales distintas. En este caso, la función calcula las raíces utilizando la
// fórmula cuadrática y luego muestra estas raíces en el elemento HTML con el ID "resultado".
// Si el discriminante es igual a cero, significa que hay una raíz real doble. En este caso, la función calcula la raíz única y la muestra 
// en el elemento "resultado".
// Si el discriminante es menor que cero, significa que no hay raíces reales. En este caso, la función muestra un mensaje indicando que la 
// ecuación no tiene raíces reales.

// La función utiliza document.getElementById('resultado').innerText para mostrar el resultado de los cálculos en la interfaz de usuario.
// Dependiendo del caso (dos raíces reales, raíz real doble o falta de raíces reales), se muestra un mensaje diferente.