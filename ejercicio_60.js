// 60. Hacer un programa que permita ingresar n cantidad de cursos, si la cantidad de cursos que 
// lleva el alumno es menor que 6 el pago será $2.000.000 por cada curso, pero si la cantidad 
// de cursos es mayor que 6 el pago será únicamente de $1.200.000. 

function ProgramaCantidadCursos() {
    // Obtener la cantidad de cursos ingresados por el usuario
    let cantidadCursos = parseInt(document.getElementById("cantidadCursos").value);

    let pagoTotal;

    // Verificar la cantidad de cursos y calcular el pago total
    if (cantidadCursos < 6) {
        // Si la cantidad de cursos es menor que 6, el pago será $2.000.000 por curso
        pagoTotal = 2000000 * cantidadCursos;
    } else {
        // Si la cantidad de cursos es 6 o más, el pago será $1.200.000 por curso
        pagoTotal = 1200000 * cantidadCursos;
    }

    // Mostrar el resultado en el elemento con id "resultado"
    document.getElementById("resultado").textContent = "El pago total por los cursos es: $" + pagoTotal.toLocaleString();
}


// EXPLICACION DEL EJERCICIO

// La función ProgramaCantidadCursos se define sin parámetros.

// Se obtiene la cantidad de cursos ingresados por el usuario desde el elemento de entrada HTML con el id "cantidadCursos" utilizando 
// document.getElementById("cantidadCursos").value. La función parseFloat se utiliza para asegurarse de que el valor obtenido sea interpretado 
// como un número decimal.

// Se declara una variable pago para almacenar el resultado del cálculo del pago total.

// Se utiliza una estructura condicional if...else if para determinar el cálculo del pago:

// Si la cantidad de cursos (CantidadCursos) ingresada es menor que 6, se calcula el pago multiplicando 2.000.000 por la cantidad de cursos.
// Si la cantidad de cursos es mayor que 6, se calcula el pago multiplicando 1.200.000 por la cantidad de cursos.
// Se actualiza el contenido del elemento HTML con el id "resultado" utilizando document.getElementById("resultado").textContent.
// Se muestra un mensaje que indica el pago total por los cursos, utilizando la variable pago calculada en el paso anterior. El método toLocaleString() 
// se utiliza para formatear el número como una cadena con separadores de mil para facilitar la lectura.
