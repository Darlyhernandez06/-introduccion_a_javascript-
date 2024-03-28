// 27.Elaborar un algoritmo para calcular el promedio final de la materia de algoritmos. dicha 
// calificación se compone de los siguientes porcentajes: 
// a. 55% del promedio final de sus calificaciones de los tres (3) parciales. 
// b. 30% de la calificación examen final. 
// c. 15% de la calificación trabajo final.

function calcularPromedioFinal() {
    // Obtener las calificaciones de los tres parciales, el examen final y el trabajo final
    let parcial1 = parseFloat(document.getElementById("parcial1").value);
    let parcial2 = parseFloat(document.getElementById("parcial2").value);
    let parcial3 = parseFloat(document.getElementById("parcial3").value);
    let examenfinal = parseFloat(document.getElementById("examenFinal").value);
    let trabajofinal = parseFloat(document.getElementById("trabajoFinal").value);

    // Calcular el promedio de los tres parciales
    let promedioParciales = (parcial1 + parcial2 + parcial3) /3;

    // Calcular el promedio final según los porcentajes dados
    let promedioFinal = 0.55 * promedioParciales + 0.3 *  examenfinal  + 0.15 * trabajofinal;

    // Mostrar el promedio final en la página HTML
    document.getElementById("promedioFinal").innerText = "El promedio final de la materia es: " + promedioFinal.toFixed(2);
}

// EXPLICACION DEL EJERCICIO

// Obtención de las calificaciones:
// Se utilizan las funciones document.getElementById() para obtener los valores ingresados por el usuario en los campos de entrada correspondientes
// a las calificaciones de los tres parciales, el examen final y el trabajo final. Estos valores se almacenan en las variables parcial_1, parcial_2, 
// parcial_3, examen_final y trabajo_final.

// Cálculo del promedio de los parciales:
// Se calcula el promedio de los tres parciales sumando las calificaciones de los parciales y dividiendo el resultado entre 3. 
// El promedio se almacena en la variable promedioParciales.

// Cálculo del promedio final:
// Se utiliza la fórmula proporcionada para calcular el promedio final de la materia de algoritmos, que toma en cuenta los porcentajes 
// de cada componente (55% de los parciales, 30% del examen final y 15% del trabajo final). Se multiplica cada calificación por su respectivo 
// porcentaje y se suman los resultados. El promedio final se almacena en la variable promedioFinal.

// Mostrar el promedio final en la página HTML:
// Finalmente, se utiliza document.getElementById() para encontrar el elemento HTML con el ID "promedioFinal" y se establece su propiedad innerText
// para mostrar el promedio final calculado. El método toFixed(2) se utiliza para redondear el resultado a dos decimales antes de mostrarlo en la página.