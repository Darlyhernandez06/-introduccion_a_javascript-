// 66.  Escribir un programa que pregunte al usuario una cantidad a invertir, el interés anual y el número de años, y muestre por pantalla el 
// capital obtenido en la inversión cada año que dura la inversión. 

const ProgramaCantidadInvertir = () => {
    // Obtener la cantidad a invertir, el interés anual y el número de años ingresados por el usuario
    const Cantidad = parseFloat(document.getElementById("cantidad").value);
    const InteresAnual = parseFloat(document.getElementById("interes").value);
    const Anios = parseInt(document.getElementById("anios").value);

    // Validar si los valores ingresados son válidos
    if (isNaN(Cantidad) || isNaN(InteresAnual) || isNaN(Anios) || Cantidad <= 0 || InteresAnual <= 0 ||  Anios <= 0) {
        alert("Por favor, ingrese valores válidos.");
        return;
    }

    // Inicializar el capital con la cantidad a invertir y el resultado para mostrar los datos
    let capital = Cantidad;
    let resultado = "<h2>Capital obtenido cada año:</h2>";

    // Calcular el capital obtenido cada año durante el período de inversión
    for (let i = 1; i <= Anios; i++) {
        // Calcular el interés simple para el año actual
        const interesPorcentaje = InteresAnual / 100;
        const interesSimple = capital * interesPorcentaje;
        capital += interesSimple;

        // Agregar el resultado del año actual al resultado total
        resultado += `<p>Año ${i}: $${capital.toFixed(2)}</p>`;
    }

    // Mostrar los resultados en el elemento con id "resultado"
    document.getElementById("resultado").innerHTML = resultado;
}


// EXPLICACION DEL EJERCICIO

// Definición de la función ProgramaCantidadInvertir como una arrow function:
// Se define una función llamada ProgramaCantidadInvertir utilizando una arrow function, asignada a la constante ProgramaCantidadInvertir.

// Obtención de los datos ingresados por el usuario:
// Se utiliza document.getElementById("cantidad").value para obtener el valor ingresado en el campo de cantidad a invertir.
// Se utiliza document.getElementById("interes").value para obtener el valor ingresado en el campo de interés anual.
// Se utiliza document.getElementById("anios").value para obtener el valor ingresado en el campo de número de años.

// Validación de los datos ingresados:
// Se verifica si alguno de los valores ingresados no es un número o es menor o igual a cero. Si ocurre, se muestra una alerta al usuario pidiendo
// que ingrese valores válidos y se finaliza la ejecución de la función utilizando return.

// Inicialización de variables:
// Se inicializa la variable capital con el valor de la cantidad a invertir ingresada por el usuario.
// Se inicializa la variable resultado como una cadena de texto que contendrá los resultados a mostrar en la pantalla.

// Cálculo del capital obtenido cada año:
// Se utiliza un bucle for para iterar desde el año 1 hasta el número de años ingresado por el usuario.
// Dentro del bucle, se calcula el interés simple para el año actual multiplicando el capital por el interés anual (en forma de porcentaje).
// Se suma el interés simple al capital para obtener el nuevo capital al final del año.
// Se agrega al resultado la información del año actual, incluyendo el número del año y el capital obtenido, formateado como un párrafo HTML.

// Mostrar los resultados:
// Una vez finalizado el bucle, se muestra el resultado completo en el elemento con id "resultado" en la página HTML, 
// utilizando document.getElementById("resultado").innerHTML.

