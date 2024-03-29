// 42. Una papelería vende libros a $10.000, cuadernos $ 7.550, y lapiceros a $5.550. Calcular el 
// monto total de la venta, según la cantidad de artículos solicitados durante el día. 

function PapeleriaVenta (){
    // Obtener la cantidad de libros, cuadernos y lapiceros vendidos
    let CantidadLibros = parseFloat(document.getElementById("cantidadLibros").value);
    let CantidadCuadernos = parseFloat(document.getElementById("cantidadCuadernos").value);
    let CantidadLapiceros = parseFloat(document.getElementById("cantidadLapiceros").value);

    // Definir los precios de cada artículo
    let Libros = 10000;
    let Cuadernos = 7550;
    let Lapiceros = 5550;

    // Calcular el monto total de la venta
    let MontoTotal = (CantidadLibros * Libros ) + (CantidadCuadernos * Cuadernos ) + (CantidadLapiceros * Lapiceros);

    // Mostrar el monto total de la venta
    document.getElementById("resultado").textContent = "El monto total de la venta es: $" + MontoTotal.toFixed(2);
}

// EXPLICACION DEL EJERCICIO

// Obtención de la cantidad de productos vendidos:

// Se obtiene la cantidad de libros, cuadernos y lapiceros vendidos del HTML mediante document.getElementById("cantidadLibros").value,
// document.getElementById("cantidadCuadernos").value y document.getElementById("cantidadLapiceros").value, respectivamente.

// La función parseFloat se utiliza para convertir los valores de entrada en números decimales.

// Definición de precios:
// Se definen los precios de cada artículo en variables: Libros, Cuadernos y Lapiceros.

// Cálculo del monto total de la venta:
// Se multiplica la cantidad de cada artículo vendido por su respectivo precio y se suman estos subtotales para obtener el monto total de la venta.

// Mostrar el monto total de la venta:
// Se utiliza document.getElementById("resultado").textContent para mostrar el monto total de la venta en un elemento HTML con el ID "resultado".
// toFixed(2) se usa para redondear el monto total a dos decimales.