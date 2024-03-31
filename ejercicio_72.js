// 72.  Escribir un programa que pida al usuario una palabra y luego muestre por pantalla una a 
// una las letras de la palabra introducida empezando por la última. 

// Función para mostrar las letras de una palabra en orden inverso
const mostrarLetrasInverso = () => {
    // Obtener la palabra ingresada por el usuario
    const palabra = document.getElementById("palabraInput").value;

    // Llamar a la función con la palabra como parámetro
    mostrarLetrasInversoParametros(palabra);
}

// Función que recibe la palabra como parámetro
const mostrarLetrasInversoParametros = (palabra) => {
    // Variable para almacenar el resultado
    let resultado = "";

    // Recorrer la palabra de atrás hacia adelante
    for (let i = palabra.length - 1; i >= 0; i--) {
        // Agregar cada letra al resultado
        resultado += palabra[i] + " ";
    }

    // Mostrar el resultado en el elemento con id "resultado"
    document.getElementById("resultado").textContent = resultado;
}

// EXPLICACION DEL EJERCICIO

// Función mostrarLetrasInverso:
// Esta función se dispara cuando el usuario hace clic en un botón (no incluido en el código proporcionado), generalmente asociado con el evento onclick.
// Dentro de esta función, se obtiene la palabra ingresada por el usuario desde el elemento de entrada con el id "palabraInput"
// utilizando document.getElementById("palabraInput").value.
// Luego, llama a la función mostrarLetrasInversoParametros pasando la palabra como parámetro.

// Función mostrarLetrasInversoParametros:
// Esta función toma la palabra ingresada como parámetro.
// Se inicializa una variable resultado para almacenar las letras de la palabra en orden inverso.
// Utiliza un bucle for para recorrer la palabra de atrás hacia adelante. El bucle comienza desde palabra.length - 1 
// (el índice del último carácter de la palabra) y termina cuando i es mayor o igual a 0.
// En cada iteración del bucle, agrega la letra correspondiente a la variable resultado utilizando palabra[i], lo que obtiene la letra en la posición 
// actual del índice i.
// Después de que el bucle termina, el contenido de resultado contendrá las letras de la palabra ingresada en orden inverso.

// actualiza el contenido del elemento con el id "resultado" en el HTML utilizando document.getElementById("resultado").textContent = resultado;, 
// lo que muestra las letras en orden inverso al usuario.