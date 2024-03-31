// 69.  Escribir un programa que pida al usuario un número entero y muestre por consola un 
// triángulo rectángulo como el de más abajo.

const PantallaTrianguloRectangulo = () => {
    // Obtener la altura del triángulo ingresada por el usuario
    const altura = parseInt(document.getElementById("alturaInput").value);

    // Validar si se ingresó un número entero positivo
    if (isNaN(altura) || altura <= 0) {
        console.log("Por favor, ingrese un número entero positivo para la altura.");
        return;
    }

    // Variable para almacenar el triángulo
    let triangulo = "";

    // Construir el triángulo con la altura especificada
    for (let i = 1; i <= altura; i++) {
        // Generar una fila del triángulo con asteriscos
        let fila = "*".repeat(i);
        
        // Agregar la fila al triángulo
        triangulo += fila + "\n";
    }
    
    // Mostrar el triángulo en la consola
    console.log(triangulo);
}

// EXPLICACION DEL EJERCICIO

// Obtener la altura del triángulo ingresada por el usuario: Utiliza document.getElementById("alturaInput").value para obtener el valor del campo de 
// entrada con el id "alturaInput", que es donde el usuario ingresa la altura del triángulo. Luego, lo convierte a un número entero utilizando parseInt() y
// lo almacena en la variable altura.

// Validar si se ingresó un número entero positivo: Verifica si el valor de altura es un número y si es mayor que cero. Si no cumple con estas condiciones,
// muestra un mensaje de error en la consola y finaliza la ejecución de la función utilizando return.

// Variable para almacenar el triángulo: Declara una variable llamada triangulo para almacenar el patrón de asteriscos que formará el triángulo.

// Construir el triángulo con la altura especificada: Utiliza un bucle for para generar cada fila del triángulo. El bucle comienza en 1 y continúa hasta 
// la altura ingresada por el usuario (altura). En cada iteración, genera una fila de asteriscos utilizando el método repeat() de las cadenas, 
// donde la cantidad de asteriscos en cada fila está determinada por el valor de i. Luego, agrega esta fila al patrón del triángulo (triangulo).

// Mostrar el triángulo en la consola: muestra el patrón del triángulo en la consola utilizando console.log(triangulo). Cada fila del triángulo se 
// imprimirá en una línea separada, creando la forma del triángulo rectángulo.