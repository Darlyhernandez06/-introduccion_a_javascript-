// 28. Calcular el sueldo de un empleado dados como datos de entrada:  
// a. Nombre. 
// b. horas de trabajo. 
// c. pago en hora. 

function calcularSueldo() {
    // Obtener los datos de entrada: nombre, horas de trabajo y pago por hora
    let nombre = document.getElementById("nombre").value;
    let horasdetrabajo = parseFloat (document.getElementById("horasTrabajo").value);
    let pagoenhora = parseFloat (document.getElementById("pagoHora").value);

    // Calcular el sueldo multiplicando las horas de trabajo por el pago por hora
    let sueldo = horasdetrabajo * pagoenhora;

    // Mostrar el sueldo en la página HTML
    document.getElementById("sueldo").innerText = "El sueldo de " + nombre + " es: $" + sueldo.toFixed(2);
}

// EXPLICACION DEL EJERCICIO

// Obtención de los datos de entrada:
// Utiliza document.getElementById() para obtener los valores ingresados por el usuario en los campos del formulario HTML. Se obtienen el 
// nombre del empleado, las horas de trabajo y el pago por hora. Estos valores se almacenan en las variables nombre, horasdetrabajo y pagoenhora.

// Cálculo del sueldo:
// Multiplica las horas de trabajo por el pago por hora para calcular el sueldo del empleado. El resultado se almacena en la variable sueldo.

// Mostrar el sueldo en la página HTML:
// Utiliza document.getElementById() para encontrar el elemento HTML con el ID "sueldo" y establece su propiedad innerText para mostrar el sueldo
// calculado. Se utiliza concatenación de cadenas para crear un mensaje descriptivo que incluye el nombre del empleado y el sueldo calculado. 
// El método toFixed(2) se utiliza para redondear el sueldo a dos decimales antes de mostrarlo en la página.