// 67. Escribir un programa que pida al usuario un número entero y muestre por pantalla un 
// triángulo rectángulo como el de más abajo, de altura el número introducido. 

const PantallaTrianguloRectangulo = () => {
    // Obtener la altura del triángulo ingresada por el usuario
    const Altura = parseInt(document.getElementById("alturaInput").value);

    // Validar si se ingresó un número entero positivo
    if (isNaN(Altura) || Altura <= 0) {
        alert("Por favor, ingrese un número entero positivo para la altura.");
        return;
    }

    // Variable para almacenar el triángulo
    let triangulo = "";

    // Construir el triángulo con la altura especificada
    for (let i = 1; i <= Altura; i++) {
        // Generar una fila del triángulo con asteriscos
        let fila = "*".repeat(i);
        
        // Agregar la fila al triángulo
        triangulo += fila + "<br>";
    }
    
    // Mostrar el triángulo en el elemento con id "triangulo"
    document.getElementById("triangulo").innerHTML = triangulo;
}

// EXPLICACION DEL EJERCICIO

// Obtención de la altura del triángulo ingresada por el usuario:

// Se utiliza document.getElementById("alturaInput").value para obtener el valor ingresado por el usuario en el campo de entrada con el id "alturaInput".
// La función parseInt() se utiliza para convertir el valor obtenido en un número entero.

// Validación del número entero positivo:
// Se verifica si el valor obtenido es un número entero positivo. Si no lo es, se muestra una alerta al usuario solicitando que ingrese un número 
// entero positivo válido.
// Se utiliza isNaN() para verificar si el valor no es un número.
// Se utiliza el operador <= para verificar si el valor es menor o igual a cero.

// Construcción del triángulo:
// Se inicializa la variable triangulo como una cadena vacía, que se utilizará para almacenar el triángulo.
// Se utiliza un bucle for para iterar desde 1 hasta la altura especificada por el usuario.
// En cada iteración del bucle, se genera una fila del triángulo con asteriscos (*). La cantidad de asteriscos en cada fila aumenta en una unidad en cada
// iteración.
// La función repeat() se utiliza para generar la cantidad adecuada de asteriscos en cada fila.

// Mostrar el triángulo en la pantalla:
// Se utiliza document.getElementById("triangulo").innerHTML para seleccionar el elemento HTML con el id "triangulo" donde se mostrará el triángulo.
// Se asigna la cadena triangulo, que contiene el triángulo construido, como el contenido HTML del elemento seleccionado. 
// Esto muestra el triángulo en la pantalla.



