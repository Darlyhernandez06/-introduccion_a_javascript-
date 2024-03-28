// 25. Una farmacia aplica el precio de los remedios el 10% de descuento, hacer un programa 
// que ingresando el costo de los medicamentos calcule el descuento y el precio final.

function calcularDescuento() {
    // Obtener el costo de los medicamentos desde el input HTML
    let costoMedicamentos = parseFloat(document.getElementById("costoMedicamentos").value);

    // Calcular el descuento (10% del costo de los medicamentos)
    let descuento = 0.1 * costoMedicamentos;

    // Calcular el precio final (costo de los medicamentos menos el descuento)
    let preciototal = costoMedicamentos - descuento;

    // Mostrar el descuento y el precio final en la página
    document.getElementById("descuento"). innerText = "El descuento de los medicamentos es: $" + descuento.toFixed(2);
    document.getElementById("precioFinal"). innerText = "El precio total de los medicamentos es: $" + preciototal.toFixed(2);
}

// EXPLICACION DEL EJERCICIO

// Función calcularDescuento():
// Esta función se llama cuando el usuario hace clic en un botón en la interfaz de usuario. Presumiblemente, este botón estaría vinculado al evento 
// onclick y llamaría a esta función.

// Obtención del costo de los medicamentos desde el input HTML:
// El costo de los medicamentos ingresado por el usuario se obtiene del elemento de entrada en el HTML con el ID "costoMedicamentos".
// Utilizamos document.getElementById() para obtener este elemento y luego accedemos a su valor con la propiedad value.

// Cálculo del descuento:
// Se calcula el descuento aplicando un 10% al costo de los medicamentos. Esto se hace multiplicando el costo de los medicamentos por 0.1.

// Cálculo del precio final:
// Se calcula el precio final restando el descuento del costo original de los medicamentos.

// Mostrar el descuento y el precio final en la página:
// Utilizando document.getElementById(), se actualizan los elementos HTML con los ID "descuento" y "precioFinal" para mostrar el descuento y
// el precio final calculados, respectivamente.