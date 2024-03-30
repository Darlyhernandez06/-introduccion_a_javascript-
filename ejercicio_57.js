// 57. Consideramos la asignación de una calificación literal a un rango dado de calificaciones 
// numéricas de la siguiente manera: Rango de calificaciones:  9.1 a 10 Asignar la calificación 
// de A equivale a Excelente 8.1 a 9 Asignar la calificación de A equivale a Muy bien 7.5 a 8 
// Asignar la calificación de A equivale a Bien Menor a 7.5 asignar la calificación de NA No 
// Aprobado. 

function AsignacionCalificacion () {
    // Obtener el valor de la calificación numérica ingresada por el usuario
    let Calificación = parseFloat(document.getElementById("calificacion").value);

    // Asignar la calificación literal según el rango especificado
    let calificacionLiteral;
    if(Calificación >= 9.1 && Calificación <= 10){
        calificacionLiteral = "A - Excelente";
    } else if (Calificación >= 8.1 && Calificación < 9) {
        calificacionLiteral = "A - Muy bien";
    } else if (Calificación >= 7.5) {
        calificacionLiteral = "A - Bien";
    } else {
        calificacionLiteral = "NA - No Aprobado";
    }

    // Mostrar el resultado en el elemento con id "resultado"
    document.getElementById("resultado").textContent = "Calificación asignada: " + calificacionLiteral;  
}


// EXPLICACION DEL EJERCICIO

// function AsignacionCalificacion () { ... }: se define una función llamada AsignacionCalificacion.

// let Calificación = parseFloat(document.getElementById("calificacion").value);: Obtiene el valor de la calificación numérica ingresada por el usuario 
// desde un elemento HTML con el id "calificacion". El valor se convierte a tipo de dato flotante usando parseFloat().

// let calificacionLiteral;: Declara una variable llamada calificacionLiteral que se utilizará para almacenar la calificación literal correspondiente.

// if (Calificación >= 9.1 && Calificación <= 10) { ... }: Verifica si la calificación numérica está en el rango de 9.1 a 10. Si es así, asigna la 
// calificación literal "A - Excelente" a la variable calificacionLiteral.

// else if (Calificación >= 8.1 && Calificación < 9) { ... }: Si la calificación no está en el rango anterior pero está entre 8.1 y menos de 9, asigna 
// la calificación literal "A - Muy bien".

// else if (Calificación >= 7.5 && Calificación < 8) { ... }: Si la calificación no está en ninguno de los rangos anteriores pero está entre 7.5 y menos 
// de 8, asigna la calificación literal "A - Bien".

// else { ... }: Si la calificación no está en ninguno de los rangos anteriores, asigna la calificación literal "NA - No Aprobado".

// document.getElementById("resultado").textContent = "Calificación asignada: " + calificacionLiteral;: Finalmente, actualiza el contenido del elemento 
// HTML con el id "resultado" para mostrar la calificación asignada al usuario. La calificación asignada se concatena con el texto
// "Calificación asignada:" antes de ser mostrada.