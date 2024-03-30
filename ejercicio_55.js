// 55.  En una tienda de HELADO da un descuento por compra a sus clientes con membresía 
// dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los 
// descuentos son los siguientes: Tipo A 10% de descuento Tipo B 15% de descuento Tipo C 
// 20% de descuento. 

function TiendadeHelado () {
    let Membresía = document.getElementById('tipoMembresia').value;
    let descuento = 0;

    if (Membresía === "tipo A") {
        descuento = 0.1; // Aplica un descuento del 10% para la membresía tipo A
    } else if (Membresía === "tipo B") {
        descuento = 0.15; // Aplica un descuento del 15% para la membresía tipo B
    } else if  (Membresía === "tipo C") {
        descuento = 0.20; // Aplica un descuento del 20% para la membresía tipo C
    } else {
        alert("No se ha seleccionado una membresía válida");
        return; // Detiene la ejecución de la función si no se ha seleccionado una membresía válida
    }

    // Obtener el monto de la compra
    let montoCompra = parseFloat(document.getElementById('montoCompra').value);

    // Calcular el monto a pagar con el descuento aplicado
    let montoConDescuento = montoCompra * (1 - descuento);

    // Mostrar el resultado en la página
    let resultadoHTML = '<p>Monto de la compra: $' + montoCompra.toFixed(2) + '</p>';
    resultadoHTML += '<p>Tipo de membresía: ' + Membresía + '</p>';
    resultadoHTML += '<p>Descuento aplicado: ' + (descuento * 100) + '%</p>';
    resultadoHTML += '<p>Monto a pagar con descuento: $' + montoConDescuento.toFixed(2) + '</p>';

    document.getElementById("resultado").innerHTML = resultadoHTML;
}


// EXPLICACION DEL EJERCICIO

// Obtención del valor de la membresía seleccionada:
// Se utiliza document.getElementById('tipoMembresia').value para obtener el valor seleccionado en el elemento con el ID "tipoMembresia". Este valor 
// corresponde al tipo de membresía seleccionada por el usuario.

// Asignación del descuento según el tipo de membresía:
// Se inicializa la variable descuento en 0.
// Se utiliza una serie de declaraciones if...else if para verificar el valor de Membresía y asignar el descuento correspondiente según el tipo de 
// membresía seleccionada.
// Si la membresía es "tipo A", se asigna un descuento del 10% (0.1).
// Si la membresía es "tipo B", se asigna un descuento del 15% (0.15).
// Si la membresía es "tipo C", se asigna un descuento del 20% (0.20).
// Si la membresía no es ninguna de las anteriores, se muestra un mensaje de alerta indicando que no se ha seleccionado una membresía válida y 
// se detiene la ejecución de la función con return.

// Obtención del monto de la compra:
// Se utiliza parseFloat(document.getElementById('montoCompra').value) para obtener el valor ingresado por el usuario en el campo de entrada con el ID 
// "montoCompra". Este valor corresponde al monto de la compra.

// Cálculo del monto a pagar con descuento:
// Se calcula el monto a pagar con el descuento aplicado multiplicando el monto de la compra por (1 - descuento).

// Mostrar el resultado en la página:
// Se crea una cadena de texto (resultadoHTML) que contiene la información de la compra, el tipo de membresía, el descuento aplicado y el monto a 
// pagar con descuento.
// Se utiliza document.getElementById("resultado").innerHTML para actualizar el contenido del elemento con el ID "resultado" en el HTML con la cadena 
// de texto generada, de modo que los resultados se muestren en la página web.

// Por ejemplo, si el descuento es del 10%, entonces (1 - 0.1) = 0.9, lo que significa que se pagará el 90% del precio original después del descuento.