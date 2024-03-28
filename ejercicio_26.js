// 26. Hacer un diagrama para convertir de grados centígrados a grados Fahrenheit. 
// formula: (Celsius °C × 9/5) + 32 

function convertirCelsiusAFahrenheit() {
    // Obtener el valor de grados Celsius desde el input HTML
    let Celsius = parseFloat(document.getElementById("celsius").value);

    // Convertir grados Celsius a grados Fahrenheit
    let Fahrenheit = (Celsius * 9 / 5) + 32;

    document.getElementById("resultado").innerText= Celsius+ " °C grados Celsius son" + Fahrenheit.toFixed(2) + " grados Fahrenheit °F.";
}

// EXPLICACION DEL EJERCICIO

// Obtención del valor de grados Celsius desde el input HTML:
// Se obtiene el valor ingresado por el usuario en grados Celsius desde un elemento de entrada en el HTML con el ID "celsius". Utilizamos 
// document.getElementById() para obtener este elemento y luego accedemos a su valor con la propiedad value. Este valor se almacena en la variable Celsius.

// Conversión de grados Celsius a grados Fahrenheit:
// Se realiza la conversión de grados Celsius a grados Fahrenheit utilizando la fórmula de conversión: (Celsius * 9 / 5) + 32. 
// este resultado se almacena en la variable Fahrenheit.

// Mostrar el resultado en la página HTML:
// Utilizando document.getElementById(), se actualiza un elemento HTML con el ID "resultado" para mostrar el resultado de la conversión. 
// Se utiliza la propiedad innerText para establecer el texto que se mostrará en la página. En este caso, se muestra la temperatura en grados
// Celsius ingresada por el usuario junto con su equivalente en grados Fahrenheit.