// 52. En cierta empresa se les paga a sus trabajadores de la siguiente forma: si el empleado es 
// de planta, la hora trabajada se le paga a $20000, si el empleado es administrativo, la hora 
// trabajada se le paga a $10000. Para calcular su pago es necesario conocer el total de 
// horas trabajadas. 

function EmpresaPaga (){
    let TipodeEmpleado = document.getElementById("tipoEmpleado").value;
    let HorasTrabajadas = parseFloat(document.getElementById("horasTrabajadas").value);
    let pagoPorHora = 0;

    if (TipodeEmpleado === "planta") {
        pagoPorHora = 20000;
    } else if (TipodeEmpleado === "administrativo"){
        pagoPorHora = 10000;
    }

    let TotalPago = pagoPorHora *  HorasTrabajadas;

    let resultadoHTML = '<p>Tipo de empleado: ' + TipodeEmpleado+ '</p>';
    resultadoHTML += '<p>Horas trabajadas: ' + HorasTrabajadas + '</p>';
    resultadoHTML += '<p>Pago por hora: $' + pagoPorHora.toFixed(2) + '</p>';
    resultadoHTML += '<p>Total a pagar: $' + TotalPago.toFixed(2) + '</p>';
  
    document.getElementById("resultado").innerHTML = resultadoHTML;
}

// EXPLICACION DEL EJERCICIO 

// Obtención de los valores del formulario:
// document.getElementById("tipoEmpleado").value obtiene el valor seleccionado del elemento con el id "tipoEmpleado", que es un <select> en el HTML.
// parseFloat(document.getElementById("horasTrabajadas").value) obtiene el valor ingresado en el campo de texto con el id "horasTrabajadas" y 
// lo convierte a un número decimal (flotante) utilizando parseFloat().

// Determinación del pago por hora:
// Se inicializa la variable pagoPorHora en 0.
// Usando una estructura if...else if..., se determina el valor de pagoPorHora según el tipo de empleado seleccionado. Si el tipo de empleado es "planta",
// se asigna un valor de $20000 a pagoPorHora. Si el tipo de empleado es "administrativo", se asigna un valor de $10000.

// Cálculo del total a pagar:
// Se calcula el total a pagar multiplicando el valor de pagoPorHora por el número de HorasTrabajadas.

// Generación del resultado en HTML:
// Se crea una cadena de texto resultadoHTML que contiene la información del tipo de empleado, las horas trabajadas, el pago por hora y el total a pagar.
// Esta cadena se construye concatenando cadenas de texto con los valores de las variables.

// Actualización del HTML:
// El contenido de resultadoHTML se asigna al elemento con el id "resultado" en el HTML utilizando document.getElementById("resultado").innerHTML = 
// resultadoHTML;. Esto actualiza el contenido visible en la página web con los resultados del cálculo.