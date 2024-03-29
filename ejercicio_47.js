// 47. Desarrollar un diagrama que lea 3 valores diferentes e indique cual es el mayor de ellos, el menor o si son iguales. 

function calcular() {
    // Obtener los valores ingresados por el usuario
    let valor1 = parseFloat(document.getElementById("valor1").value);
    let valor2 = parseFloat(document.getElementById("valor2").value);
    let valor3 = parseFloat(document.getElementById("valor3").value);

    // Verificar si los valores son iguales
    if (valor1 === valor2 && valor2 === valor3) {
        document.getElementById("resultado").textContent = "Los tres valores son iguales.";
    } else {
        // Encontrar el mayor valor
        let mayor = valor1;
        if (valor2 > mayor) {
            mayor = valor2;
        }
        if (valor3 > mayor) {
            mayor = valor3;
        }

        // Encontrar el menor valor
        let menor = valor1;
        if (valor2 < menor) {
            menor = valor2;
        }
        if (valor3 < menor) {
            menor = valor3;
        }

        // Mostrar el resultado con saltos de línea
        document.getElementById("resultado").innerHTML = "El mayor valor es: " + mayor + "<br>" +
                                                           "El menor valor es: " + menor;
    }
}

// EXPLICACION DEL EJERCICIO

// Obtención de los valores ingresados: Con document.getElementById("valorX").value para obtener los valores ingresados por el usuario 
// en tres campos de entrada HTML, donde X representa el número de cada campo (valor1, valor2 y valor3). Estos valores se convierten
//  a números de punto flotante utilizando parseFloat() para realizar cálculos matemáticos con ellos.

// Verificación de igualdad: Comprueba si los tres valores son iguales utilizando el operador de igualdad estricta (===). Si lo son, 
// se establece el texto del elemento HTML con id resultado para indicar que los tres valores son iguales.

// Encontrar el mayor y el menor valor: Si los valores no son iguales, el código determina cuál es el mayor y el menor de los tres valores mediante 
// una serie de comparaciones condicionales. Para ello, inicializa las variables mayor y menor con el primer valor (valor1), luego compara cada 
// valor con estas variables y las actualiza si encuentra un valor mayor o menor.

// Mostrar el resultado: Una vez que se ha encontrado el mayor y el menor valor, se actualiza el contenido del elemento HTML con id resultado 
// utilizando la propiedad innerHTML. Se muestra el mayor y el menor valor utilizando saltos de línea (<br>) para mejorar la presentación del resultado.