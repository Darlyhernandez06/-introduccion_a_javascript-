// 32.  Pablo compro 5 productos los dos primeros con un 5% de descuento y los 2 últimos con un 
// 2% de descuento, realice un algoritmo que indique cuanto fue el valor a pagar por cada 
// producto y el total de la compra. 

function calcularTotal() {
    // Solicitar al usuario que ingrese los precios de los productos
    const precioProducto1 = parseFloat(prompt("Ingrese el precio del primer producto:"));
    const precioProducto2 = parseFloat(prompt("Ingrese el precio del segundo producto:"));
    const precioProducto3 = parseFloat(prompt("Ingrese el precio del tercer producto:"));
    const precioProducto4 = parseFloat(prompt("Ingrese el precio del cuarto producto:"));
    const precioProducto5 = parseFloat(prompt("Ingrese el precio del quinto producto:"));
  
    const descuentoPrimeros = 0.05; // Descuento del 5% para los dos primeros productos
    const descuentoUltimos = 0.02;  // Descuento del 2% para los dos últimos productos
  
    // Calcular el precio con descuento para los dos primeros productos
    const precioConDescuento1 = precioProducto1 * (1 - descuentoPrimeros);
    const precioConDescuento2 = precioProducto2 * (1 - descuentoPrimeros);
  
    // Calcular el precio con descuento para los dos últimos productos
    const precioConDescuento4 = precioProducto4 * (1 - descuentoUltimos);
    const precioConDescuento5 = precioProducto5 * (1 - descuentoUltimos);
  
    // Calcular el total de la compra sumando los precios de todos los productos con y sin descuento
    const totalCompra = precioConDescuento1 + precioConDescuento2 + precioProducto3 + precioConDescuento4 + precioConDescuento5;
  
    // Mostrar los resultados mediante alertas
    alert("Precio a pagar por el primer producto: $" + precioConDescuento1.toFixed(2));
    alert("Precio a pagar por el segundo producto: $" + precioConDescuento2.toFixed(2));
    alert("Precio a pagar por el tercer producto: $" + precioProducto3.toFixed(2));
    alert("Precio a pagar por el cuarto producto: $" + precioConDescuento4.toFixed(2));
    alert("Precio a pagar por el quinto producto: $" + precioConDescuento5.toFixed(2));
    alert("Total de la compra: $" + totalCompra.toFixed(2));
}
  
// Asociar el evento de clic al botón "Iniciar Cálculo"
  document.getElementById("startButton").addEventListener("click", calcularTotal);

// EXPLICACION DEL EJERCICIO

// Función calcularTotal(): Esta función se encarga de realizar todo el cálculo y la presentación de los resultados.

// Solicitud de precios de productos al usuario: Utiliza la función prompt() para solicitar al usuario que ingrese el precio de cinco productos diferentes. Estos precios ingresados se almacenan en las variables precioProducto1, precioProducto2, precioProducto3, precioProducto4 y precioProducto5.

// Definición de los descuentos: Se definen dos variables descuentoPrimeros y descuentoUltimos, que representan los porcentajes de descuento del 5% 
// para los dos primeros productos y del 2% para los dos últimos productos.

// Cálculo del precio con descuento: Se calcula el precio con descuento para los dos primeros productos (precioConDescuento1 y precioConDescuento2) y 
// para los dos últimos productos (precioConDescuento4 y precioConDescuento5), aplicando los descuentos correspondientes a los precios ingresados 
// por el usuario.

// Cálculo del total de la compra: Se suman los precios de todos los productos, incluidos los que no tienen descuento y los que tienen descuento, 
// para obtener el total de la compra. El resultado se guarda en la variable totalCompra.

// Mostrar los resultados mediante alertas: Se utilizan las funciones alert() para mostrar los precios a pagar por cada producto, así como el total 
// de la compra. Los precios se muestran con dos decimales utilizando el método toFixed(2).

// Evento de clic del botón "Iniciar Cálculo": Al final del código, se asocia la función calcularTotal() al evento de clic del botón "Iniciar Cálculo"
// mediante addEventListener(). Esto significa que cuando el usuario hace clic en el botón, se ejecutará la función calcularTotal(), 
// iniciando así todo el proceso de cálculo y presentación de resultados.

// La función prompt() es una función incorporada en JavaScript que muestra un cuadro de diálogo al usuario con un mensaje y un campo de entrada donde
// el usuario puede ingresar texto.

// document.getElementById("startButton").addEventListener("click", calcularTotal):
// document.getElementById("startButton") es una forma de acceder a un elemento HTML por su ID en el documento. En este caso, estamos buscando un
// elemento con el ID "startButton".
// addEventListener() es un método que permite agregar un "escuchador de eventos" a un elemento HTML. Este método toma dos argumentos: 
// el tipo de evento que se está escuchando (en este caso, "click") y la función que se ejecutará cuando ocurra ese evento.
// addEventListener("click", calcularTotal) se utiliza para asociar la función calcularTotal() al evento de clic del elemento HTML con el ID "startButton". Esto significa que cuando el usuario haga clic en el botón con el ID "startButton", se ejecutará la función calcularTotal().