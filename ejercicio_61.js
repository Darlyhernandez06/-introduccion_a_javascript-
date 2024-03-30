// 61. Hacer un programa que permita ingresar n Notas de alumnos (100 – 1), y que imprima cual 
// fue la nota alta, la nota baja y cuantos alumnos obtuvieron la máxima nota de 100, cuantos 
// obtuvieron las siguientes calificaciones: 
// a. «a» = menor que 100 y mayor igual que 90 
// b.  «b» = menor que 90 y mayor igual que 80 
// c.  «c» = menor que 80 y mayor igual que 70 
// d.  «d» = menor que 70 y mayor igual que 60 

const ProgramaNotas = () => {
    // Obtener las notas ingresadas por el usuario
    const notasInput = document.getElementById("notasInput").value;
    const notasArray = notasInput.split(",").map(nota => parseInt(nota.trim()));

    // Inicializar variables para almacenar la nota más alta, la más baja y los contadores de calificaciones
    let notaAlta = notasArray[0];
    let notaBaja = notasArray[0];
    let maximaNota = 0;
    let conteoA = 0;
    let conteoB = 0;
    let conteoC = 0;
    let conteoD = 0;

    // Bucle for para recorrer todas las notas
    for (let i = 0; i < notasArray.length; i++) {
        const nota = notasArray[i];

        // Encontrar la nota más alta y más baja
        if (nota > notaAlta) {
            notaAlta = nota;
        }
        if (nota < notaBaja) {
            notaBaja = nota;
        }

        // Contar el número de alumnos con nota máxima (100)
        if (nota === 100) {
            maximaNota++;
        }

        // Contar el número de alumnos con calificaciones A, B, C y D
        if (nota >= 90) {
            conteoA++;
        } else if (nota >= 80) {
            conteoB++;
        } else if (nota >= 70) {
            conteoC++;
        } else if (nota >= 60) {
            conteoD++;
        }
    }

    // Mostrar los resultados
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `
        <p>Nota más alta: ${notaAlta}</p>
        <p>Nota más baja: ${notaBaja}</p>
        <p>Cantidad de alumnos con nota máxima de 100: ${maximaNota}</p>
        <p>Cantidad de alumnos con calificación 'A' (90-100): ${conteoA}</p>
        <p>Cantidad de alumnos con calificación 'B' (80-89): ${conteoB}</p>
        <p>Cantidad de alumnos con calificación 'C' (70-79): ${conteoC}</p>
        <p>Cantidad de alumnos con calificación 'D' (60-69): ${conteoD}</p>
    `;
}


// EXPLICACION DEL EJERCICIO

// Obtención de las notas ingresadas por el usuario:
// const notasInput = document.getElementById("notasInput").value;: Obtiene el valor del elemento de entrada de notas del documento HTML.
// const notasArray = notasInput.split(",").map(nota => parseInt(nota.trim()));: Divide la cadena de entrada en notas en un array utilizando la coma como 
// separador. Luego, utiliza el método map para convertir cada elemento del array en un número entero utilizando parseInt(). El método trim() 
// se utiliza para eliminar los espacios en blanco alrededor de cada nota.

// Inicialización de variables:
// let notaAlta = notasArray[0];: Inicializa la variable notaAlta con el primer elemento del array de notas.
// let notaBaja = notasArray[0];: Inicializa la variable notaBaja con el primer elemento del array de notas.
// let maximaNota = 0;: Inicializa el contador de notas máximas en 0.
// let conteoA = 0;: Inicializa el contador de notas A en 0.
// let conteoB = 0;: Inicializa el contador de notas B en 0.
// let conteoC = 0;: Inicializa el contador de notas C en 0.
// let conteoD = 0;: Inicializa el contador de notas D en 0.

// Bucle for para recorrer todas las notas:
// Utiliza un bucle for para iterar sobre cada nota en el array de notas.
// for (let i = 0; i < notasArray.length; i++) {: Inicia el bucle que recorre todas las notas en el array.
// const nota = notasArray[i];: Obtiene la nota actual en cada iteración del bucle.

// Encontrar la nota más alta y más baja:
// Utiliza condicionales dentro del bucle for para comparar cada nota con las variables notaAlta y notaBaja y actualizarlas si es necesario.
// Contar el número de alumnos con nota máxima (100) y las calificaciones A, B, C y D:
// Utiliza condicionales dentro del bucle for para determinar si la nota actual es igual a 100 o está dentro de ciertos rangos (A, B, C, D) y aumenta 
// los contadores correspondientes.

// Mostrar los resultados:
// Utiliza el método getElementById() para obtener el elemento del resultado del documento HTML.
// Utiliza la propiedad innerHTML para establecer el contenido HTML del elemento resultado, mostrando la nota más alta, la nota más baja,
// el número de alumnos con nota máxima de 100 y el recuento de alumnos en las categorías A, B, C y D.
