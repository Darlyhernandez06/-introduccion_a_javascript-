// 51.  Calcular todos los pagos hechos de un restaurante y que si el consumo ingresado excede 
// los $130.000 el descuento será del 15%, de lo contrario no hay descuento. 

function calcularPago() {
    // Obtener el consumo ingresado por el usuario
    let consumo = parseFloat(document.getElementById("consumo").value);
    let descuento = 0;
    let totalPagado = 0;

    // Calcular el descuento si el consumo supera los $130,000
    if (consumo > 130000) {
        descuento = consumo * 0.15;
    } 

    // Calcular el total a pagar restando el descuento del consumo
    totalPagado = consumo - descuento;

    // Crear el contenido HTML para mostrar el resultado
    let resultadoHTML = "<p>Monto del consumo: $" + consumo.toFixed(2) + "</p>";
    if (descuento > 0) {
        resultadoHTML += "<p>Descuento aplicado: $" + descuento.toFixed(2) + "</p>";
    } else {
        resultadoHTML += "<p>" + "No hay descuento" + "</p>";
    }
    resultadoHTML += "<p>Total a pagar: $" + totalPagado.toFixed(2) + "</p>";

    // Mostrar el resultado en el elemento HTML correspondiente
    document.getElementById("resultado").innerHTML = resultadoHTML;
}

// EXPLICACION DEL EJERCICIO 

// Obtención del consumo: La función calcularPago() comienza obteniendo el valor ingresado por el usuario en el campo de entrada con el id "consumo". 
// Este valor se convierte a un número de punto flotante utilizando parseFloat() para asegurarse de que sea un número decimal válido.

// Cálculo del descuento: Se inicializa la variable descuento en 0. Luego, se verifica si el monto del consumo (consumo) es mayor que $130,000. 
// Si es así, se calcula el descuento como el 15% del monto del consumo. Si el consumo no excede los $130,000, el descuento permanece en 0.

// Cálculo del total pagado: Se calcula el total pagado restando el descuento del monto del consumo.

// Generación del resultado en HTML: Se crea una cadena de texto resultadoHTML que contiene información sobre el monto del consumo, 
// el descuento aplicado (si corresponde) y el total a pagar. Se utiliza toFixed(2) para asegurarse de que los números tengan dos decimales.
// Además, se incluye una verificación para determinar si se aplicó un descuento. Si se aplicó un descuento (es decir, si descuento es mayor que 0), 
// se muestra el monto del descuento en el resultado. En caso contrario, se muestra un mensaje indicando que no hubo descuento.

// Actualización del HTML: el contenido de resultadoHTML se asigna al elemento con el id "resultado" en el documento HTML utilizando
//  document.getElementById("resultado").innerHTML = resultadoHTML;. Esto actualiza el contenido visible en la página web con los resultados del cálculo.

