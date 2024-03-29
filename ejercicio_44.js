// 44. Realice el siguiente algoritmo para convertir pesos a dolores y a euros, utilizando como constante el valor de una moneda. 

function convertirMoneda() {
    const MontodePesos = parseFloat(document.getElementById("montoPesos").value);

    const ValorDolar = 0.012; // Ejemplo: 1 peso = 0.012 dólares
    const ValorEuro = 0.011; // Ejemplo: 1 peso = 0.011 euros

    const montoDolares = MontodePesos* ValorDolar;
    const montoEuros = MontodePesos * ValorEuro;

    document.getElementById("resultado").textContent = "El equivalente en dólares es: $" + montoDolares.toFixed(2) + "\n" +
    "El equivalente en euros es: €" + montoEuros.toFixed(2);
}

// EXPLICACION DEL EJERCICIO

// Se obtiene el monto en pesos ingresado por el usuario desde un elemento de entrada en el HTML con el id "montoPesos".
// Se definen dos constantes: ValorDolar y ValorEuro, que representan el valor de un peso en dólares y euros, respectivamente.
// Se calcula el equivalente del monto en pesos en dólares y euros multiplicando el monto en pesos por los valores de conversión.
// El resultado se muestra al usuario mediante el elemento con el id "resultado". Se muestra el equivalente en dólares con el símbolo "$" y 
// en euros con el símbolo "€", ambos con dos decimales utilizando toFixed(2). Se utiliza \n para agregar una nueva línea entre las dos líneas del resultado.