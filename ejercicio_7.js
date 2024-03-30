// 7. los tramos impositivos para la declaración de la renta en un determinado país son: 
// a. entre 10000 y 20000 ---- 5% 
// b. entre 20000 y 35000 ---- 10% 
// c. entre 35000 y 60000 ---- 20% 
// d. más de 60000 ---- 45% 
// escribir un programa que pregunte al usuario su renta anual y muestre por pantalla el tipo de impositivo que le corresponde.

function calcularImpuesto() {
    // Obtener el valor de la renta ingresado por el usuario
    let renta = parseInt(document.getElementById("rentaInput").value);
    let tipoImpositivo;
    let resultadoElement = document.getElementById("resultado");

    // Determinar el tipo impositivo según el valor de la renta
    if (renta >= 10000 && renta < 20000) {
        // Si la renta está entre 10000 y 19999, el tipo impositivo es del 5%
        tipoImpositivo = "5%";
    } else if (renta >= 20000 && renta < 35000){
        // Si la renta está entre 20000 y 34999, el tipo impositivo es del 10%
        tipoImpositivo = "10%";
    } else if (renta >= 35000 && renta < 60000 ){
        // Si la renta está entre 35000 y 59999, el tipo impositivo es del 20%
        tipoImpositivo = "20%";
    } else if (renta >= 60000 ){
        // Si la renta es igual o mayor a 60000, el tipo impositivo es del 45%
        tipoImpositivo = "45%";
    } else  {
        // Si la renta es menor a 10000, no se aplica impuesto
        tipoImpositivo = "No se aplica impuesto para esta renta.";
    }
    
    // Paso 4: Mostrar el tipo impositivo correspondiente
    resultadoElement.innerText = "El tipo impositivo que le corresponde es: " + tipoImpositivo;
}

// EXPLICACION DEL EJERCICIO 

// Obtención del valor de la renta:
// let renta = parseInt(document.getElementById("rentaInput").value);: Esta línea de código obtiene el valor de la renta anual ingresada por 
// el usuario desde el campo de entrada del formulario con el id "rentaInput". El valor se convierte a un número entero utilizando parseInt() y 
// se guarda en la variable renta.

// Declaración de variables:
// let tipoImpositivo;: Se declara una variable tipoImpositivo que se utilizará para almacenar el tipo de impuesto correspondiente a la renta ingresada por el usuario.
// let resultadoElement = document.getElementById("resultado");: Se declara una variable resultadoElement para hacer referencia al elemento HTML donde 
// se mostrará el resultado del cálculo del impuesto.

// Cálculo del tipo de impuesto:
// Se utiliza unas series de if-else if-else para verificar en qué rango de renta se encuentra la renta ingresada por el usuario y asignar el tipo 
// de impuesto correspondiente.
// Si la renta está entre 10000 y 20000, se asigna el tipo de impuesto del 5%.
// Si la renta está entre 20000 y 35000, se asigna el tipo de impuesto del 10%.
// Si la renta está entre 35000 y 60000, se asigna el tipo de impuesto del 20%.
// Si la renta es mayor o igual a 60000, se asigna el tipo de impuesto del 45%.
// Si la renta no se encuentra en ninguno de estos rangos, se asigna el mensaje "No se aplica impuesto para esta renta." a la variable tipoImpositivo.

// Actualización del resultado:
// Después de determinar el tipo de impuesto correspondiente, se actualiza el contenido del elemento con id "resultado" utilizando la propiedad innerText.
// Se concatena el resultado con el mensaje indicando el tipo de impuesto que le corresponde al usuario.