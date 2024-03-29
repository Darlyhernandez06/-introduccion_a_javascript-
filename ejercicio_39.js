// 39.  Pinturas “La brocha gorda” requiere determinar cuánto cobrar por trabajos de pintura 
// Considere que se cobra por m2 y realice el código que representen el algoritmo que le 
// permita ir generando presupuestos para cada cliente. 

function calcularPresupuesto() {
    const metrosCuadrados = parseFloat(prompt("Ingrese la cantidad de metros cuadrados a pintar:"));
    const precioPorMetro = parseFloat(prompt("Ingrese el precio por metro cuadrado:"));

    if (isNaN(metrosCuadrados) || isNaN(precioPorMetro) || metrosCuadrados <= 0 || precioPorMetro <= 0) {
        alert("Por favor, ingrese valores válidos para metros cuadrados y precio por metro.");
        return;
    }

    const costoTotal = metrosCuadrados * precioPorMetro;

    document.getElementById("resultado").textContent = "El costo total del trabajo de pintura es: $" + costoTotal.toFixed(2);
}

// EXPLICACION DEL EJERCICIO

// vconst metrosCuadrados = parseFloat(prompt("Ingrese la cantidad de metros cuadrados a pintar:"));: Esta línea utiliza la función prompt() 
// para solicitar al usuario que ingrese la cantidad de metros cuadrados a pintar. El valor ingresado se convierte a un número de punto flotante (float) 
// utilizando parseFloat() y se almacena en la variable metrosCuadrados.

// const precioPorMetro = parseFloat(prompt("Ingrese el precio por metro cuadrado:"));: Similar al paso anterior, esta línea solicita al usuario
// que ingrese el precio por metro cuadrado. El valor ingresado también se convierte a un número de punto flotante (float) y se almacena en la
// variable precioPorMetro.

// if (isNaN(metrosCuadrados) || isNaN(precioPorMetro) || metrosCuadrados <= 0 || precioPorMetro <= 0) {: Esta condición verifica si alguno de los 
// valores ingresados no es un número válido (isNaN()) o si son menores o iguales a cero. Si se cumple alguna de estas condiciones, 
// se muestra una alerta indicando al usuario que ingrese valores válidos y se finaliza la ejecución de la función con return;.

// const costoTotal = metrosCuadrados * precioPorMetro;: Aquí se calcula el costo total del trabajo de pintura multiplicando la cantidad de metros 
// cuadrados por el precio por metro cuadrado. El resultado se almacena en la variable costoTotal.

// document.getElementById("resultado").textContent = "El costo total del trabajo de pintura es: $" + costoTotal.toFixed(2);: 
// se actualiza el contenido del elemento HTML con el ID "resultado" para mostrar el costo total del trabajo de pintura. Se utiliza toFixed(2)
// para limitar el número de decimales a dos, y se agrega un símbolo de dólar ($) para indicar la moneda.
   
