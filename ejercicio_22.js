// 22.  Escribir un programa que muestre el pago de una llamada telefónica sabiendo que cada minuto cuesta $355 pesos y un IVA 20%.

function calcularPagoLlamada() {
    // Obtener la duración de la llamada en minutos desde el input HTML
    let duracionLlamada = parseFloat(document.getElementById("duracionLlamada").value);

    // Calcular el costo total de la llamada (sin IVA)
    let costo_SinIVA = duracionLlamada * 355;

    // Calcular el IVA (20% del costo sin IVA)
    let iva =  0.2 * costo_SinIVA;

    // Calcular el costo total de la llamada (incluyendo IVA)
    let costoTotal = costo_SinIVA + iva;

    document.getElementById("resultado").innerText = "El costo total de la llamada sin IVA es: $" + costo_SinIVA.toFixed(2) + "\n" +
    "El costo total de la llamada con IVA es: $" + iva.toFixed(2) + "\n" +
    "El costo total de la llamada es: $" + costoTotal.toFixed(2);

}

// EXPLICACION DEL EJERCICIO

// Función calcularPagoLlamada(): Esta función se llama cuando se hace clic en un botón en la interfaz de usuario. este botón está vinculado al evento
// onclick y llama a esta función.

// Obtención de la duración de la llamada: 
// La duración de la llamada se obtiene del elemento de entrada en el HTML con el ID "duracionLlamada". Se utiliza document.getElementById() 
// para obtener este elemento y luego se accede a su valor utilizando la propiedad value. Este valor se convierte a un número de punto 
// flotante (float) usando parseFloat().

// Cálculo del costo sin IVA:
// Se calcula el costo total de la llamada multiplicando la duración de la llamada por el costo por minuto, que es de $355. 
// Esto da el costo total de la llamada antes de aplicar el IVA.

// Cálculo del IVA:
// Se calcula el monto del IVA multiplicando el costo total de la llamada sin IVA por el 20%, que es el porcentaje del impuesto al valor agregado.

// Cálculo del costo total de la llamada con IVA:
// Se suma el costo total de la llamada sin IVA y el monto del IVA calculado previamente para obtener el costo total de la llamada con el impuesto incluido.

// Mostrar el resultado en el HTML:
// Se actualiza el contenido del elemento con el ID "resultado" para mostrar el costo total de la llamada sin IVA, el monto del IVA y 
// el costo total de la llamada (incluyendo el impuesto). Los resultados se muestran con dos decimales utilizando toFixed(2) para una mejor presentación.