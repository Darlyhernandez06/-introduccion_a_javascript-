// 49. Escriba un algoritmo que calcule el área de un rectángulo siempre y cuando los lados sean positivos: área triangulo= lado * lado 

function AreaRectangulo() {
     // Obtener los valores de los lados del rectángulo ingresados por el usuario
    let lado1 = parseFloat(document.getElementById("lado1").value);
    let lado2 = parseFloat(document.getElementById("lado2").value);

    // Verificar si los lados son positivos
    if (lado1 > 0 &&  lado2 > 0) {
        // Calcular el área del rectángulo
        let area = lado1 * lado2;

        // Mostrar el resultado del área en el HTML
        document.getElementById("resultado").textContent = "El área del rectángulo es: " + area.toFixed(2);
    } else {
        // Mostrar un mensaje de error si alguno de los lados no es positivo
        document.getElementById("resultado").textContent = "Los lados del rectángulo deben ser positivos.";
    }
}

// EXPLICACION DEL EJERCICIO

// Obtención de los valores de los lados del rectángulo: Utiliza document.getElementById("lado1").value y document.getElementById("lado2").value
// para obtener los valores de los lados del rectángulo ingresados por el usuario. Estos valores se convierten a números decimales utilizando
// parseFloat para poder realizar cálculos con ellos.

// Verificación de los lados positivos: Comprueba si ambos lados del rectángulo son positivos. Esto se hace con la condición if (lado1 > 0 && lado2 > 0).
// Si uno o ambos lados no son positivos, se muestra un mensaje de error.

// Cálculo del área: Si los dos lados son positivos, se calcula el área del rectángulo multiplicando la longitud de los lados (lado1 y lado2). 
// El resultado se almacena en la variable area.

// Mostrar el resultado: Si los lados son positivos, se muestra el área calculada en el HTML utilizando document.getElementById("resultado").textContent. 
// El área se redondea a dos decimales usando toFixed(2) para que tenga una apariencia más ordenada.
