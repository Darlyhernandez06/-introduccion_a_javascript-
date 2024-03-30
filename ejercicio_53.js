// 53.  Calcular el valor total del valor de 5 productos, el IVA y el subtotal, visualizar los resultados 
// de: Iva, Subtotal y Total de la compra de los artículos.

function CalcularTotal() {
    // Obtener los valores de los productos desde el formulario
    let producto1 = parseFloat(document.getElementById("producto1").value);
    let producto2 = parseFloat(document.getElementById("producto2").value);
    let producto3 = parseFloat(document.getElementById("producto3").value);
    let producto4 = parseFloat(document.getElementById("producto4").value);
    let producto5 = parseFloat(document.getElementById("producto5").value);

    // Calcular el subtotal sumando el valor de todos los productos
    let subtotal = producto1 + producto2 + producto3 + producto4 + producto5;

    // Calcular el IVA (asumimos un 19%)
    let iva = subtotal * 0.19;

    // Calcular el total de la compra sumando el subtotal y el IVA
    let TotalCompra = subtotal + iva;

    // Crear el contenido HTML para mostrar los resultados
    let resultadoHTML = '<p>Subtotal: $' + subtotal.toFixed(2) + '</p>';
    resultadoHTML += '<p>IVA (19%): $' + iva.toFixed(2) + '</p>';
    resultadoHTML += '<p>Total de la compra: $' + TotalCompra.toFixed(2) + '</p>';

    // Mostrar los resultados en el elemento con id "resultado"
    document.getElementById("resultado").innerHTML = resultadoHTML;
}

// EXPLICACION DEL EJERCICIO 

// Obtención de los valores de los productos:
// Utiliza document.getElementById("productoX").value para obtener el valor de cada producto, donde "X" es el número del producto.
// Utilizar parseFloat() para convertir los valores obtenidos a números flotantes.

// Cálculo del subtotal:
// Suma los valores de los cinco productos para obtener el subtotal.

// Cálculo del IVA:
// Calcula el IVA asumiendo una tasa del 19% sobre el subtotal.

// Cálculo del total de la compra:
// Calcula el total de la compra sumando el subtotal y el IVA.

// Mostrar los resultados en la página:
// Crea una cadena de texto (resultadoHTML) que contiene los resultados del subtotal, el IVA y el total de la compra.
// Utiliza document.getElementById("resultado").innerHTML para actualizar el contenido del elemento con el ID "resultado" en el HTML con la cadena de texto,
// de modo que los resultados se muestren en la página web.