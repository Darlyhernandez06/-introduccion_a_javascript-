// 29.  Un estudiante realiza cuatro exámenes. Realizar un algoritmo correspondiente para 
// obtener el promedio de las calificaciones obtenidas. Las calificaciones van 1 a 5 puntos.

function calcularPromedio() {
    // Obtener las calificaciones de los cuatro exámenes
    let Calificacion1 = parseFloat(document.getElementById("calificacion1").value);
    let Calificacion2 = parseFloat(document.getElementById("calificacion2").value);
    let Calificacion3 = parseFloat(document.getElementById("calificacion3").value);
    let Calificacion4 = parseFloat(document.getElementById("calificacion4").value);

    // Calcular el promedio de las calificaciones
    let Promedio = (Calificacion1 + Calificacion2 + Calificacion3 + Calificacion4) / 4;

    // Mostrar el promedio en la página HTML
    document.getElementById("promedio").innerText = "El promedio de las calificaciones es: " + Promedio.toFixed(2);
}

// EXPLICACION DEL EJERCICIO

// Obtención de las calificaciones: Utiliza document.getElementById("calificacion1").value, document.getElementById("calificacion2").value, 
// document.getElementById("calificacion3").value y document.getElementById("calificacion4").value para obtener los valores de las cuatro
// calificaciones ingresadas por el usuario en los campos de entrada del formulario HTML.

// Conversión a números flotantes: Utiliza parseFloat() para convertir las cadenas de texto obtenidas en el paso anterior a números flotantes.
// Esto asegura que podamos realizar operaciones matemáticas con estas calificaciones.

// Cálculo del promedio: Calcula el promedio de las cuatro calificaciones sumándolas y dividiendo el resultado entre 4 (el número total de calificaciones).

// Mostrar el resultado: 
// Utiliza document.getElementById("promedio").innerText para establecer el contenido del elemento HTML con el id "promedio"
// con el mensaje que indica el promedio calculado. El método toFixed(2) se utiliza para redondear el promedio a dos decimales
// antes de mostrarlo en la página.