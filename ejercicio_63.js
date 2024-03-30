// 63. Escribir un programa que pregunte al usuario su edad y muestre por pantalla todos los 
// años que ha cumplido (desde 1 hasta su edad).

const ProgramaEdad = () => {
    // Obtiene el valor de la edad ingresada por el usuario desde el elemento HTML correspondiente
    const Edad = parseInt(document.getElementById("edadInput").value);

    // Inicializa una cadena vacía para almacenar los resultados
    let resultado = "";

    // Utiliza un bucle for para iterar desde 1 hasta la edad ingresada por el usuario
    for (let i = 1; i <= Edad; i++ ) {
        // Agrega a la cadena resultado la frase indicando los años cumplidos en cada iteración del bucle
        resultado += `Ha cumplido ${i} años<br>`;
    }

    // Asigna la cadena resultado al contenido del elemento HTML con el id "resultado"
    document.getElementById("resultado").innerHTML = resultado;
}

// EXPLICACION DEL EJERCICIO

// Se define una función arrow llamada ProgramaEdad que se activa al hacer clic en un botón.

// Dentro de la función:
// Se obtiene el valor de la edad ingresada por el usuario desde el elemento HTML correspondiente utilizando document.getElementById("edadInput").value, 
// y se convierte a un número entero utilizando parseInt().
// Se inicializa una cadena vacía llamada resultado para almacenar los años cumplidos.
// Se utiliza un bucle for para iterar desde 1 hasta la edad ingresada por el usuario.
// En cada iteración del bucle, se agrega a la cadena resultado una frase que indica los años cumplidos.

// La cadena resultado se asigna como contenido del elemento HTML con el id "resultado" utilizando document.getElementById("resultado").innerHTML = resultado;

