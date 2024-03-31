// 73. Escribir un programa en el que se pregunte al usuario por una frase y una letra, y muestre 
// por pantalla el número de veces que aparece la letra en la frase.

// Función para contar la cantidad de veces que aparece una letra en una frase
const contarLetra = () => {
    // Obtener la frase y la letra ingresadas por el usuario y convertirlas a minúsculas
    const frase = document.getElementById("fraseInput").value.toLowerCase();
    const letra = document.getElementById("letraInput").value.toLowerCase();
    
    // Llamar a la función contarLetraParametros con la frase y la letra como parámetros
    const conteo = contarLetraParametros(frase, letra);
    
    // Mostrar el resultado en el elemento HTML con el id "resultado"
    document.getElementById("resultado").textContent = `La letra "${letra}" aparece ${conteo} veces en la frase.`;
}

// Función que cuenta la cantidad de veces que aparece una letra en una frase
const contarLetraParametros = (frase, letra) => {
    // Validar si la letra ingresada es válida (un solo carácter alfabético)
    if (!/^[a-zA-Z]$/.test(letra)) {
        // Mostrar una alerta si la letra ingresada no es válida
        alert("Por favor, ingrese una letra válida.");
        // Retornar 0 para indicar que no se encontró la letra
        return 0;
    }
    
    // Inicializar el contador de conteo de la letra en 0
    let conteo = 0;
    
    // Recorrer cada carácter de la frase
    for (let i = 0; i < frase.length; i++) {
        // Verificar si el carácter actual es igual a la letra buscada
        if (frase[i] === letra) {
            // Incrementar el contador de conteo si se encuentra la letra
            conteo++;
        }
    }
    
    // Retornar el valor final del contador de conteo
    return conteo;
}

// EXPLICACION DEL EJERCICIO

// Función contarLetra:
// Esta función se ejecuta cuando el usuario hace clic en un botón en la interfaz de usuario.
// Comienza obteniendo la frase y la letra ingresadas por el usuario mediante document.getElementById("fraseInput").value.toLowerCase() y 
// document.getElementById("letraInput").value.toLowerCase(), respectivamente. Se utiliza toLowerCase() para convertir tanto la frase como la letra 
// a minúsculas, lo que asegura que la búsqueda sea insensible a mayúsculas y minúsculas.
// Llama a la función contarLetraParametros con la frase y la letra como parámetros.
// Finalmente, muestra el resultado en un elemento HTML con el id "resultado" utilizando document.getElementById("resultado").textContent.

// Función contarLetraParametros:
// Esta función toma dos parámetros: frase y letra.
// Comienza verificando si la letra ingresada es válida mediante la expresión regular /^[a-zA-Z]$/. Esta expresión regular garantiza que la letra 
// sea un solo carácter alfabético. Si la letra ingresada no cumple con esta condición, muestra una alerta con alert("Por favor, ingrese una letra válida.") 
// y devuelve 0 para indicar que no se encontró la letra.
// Si la letra es válida, inicializa un contador conteo en 0.
// Luego, itera sobre cada carácter de la frase utilizando un bucle for. En cada iteración, verifica si el carácter actual es igual a la letra buscada. 
// Si es así, incrementa el contador conteo.
// Al finalizar el bucle, devuelve el valor final del contador conteo, que representa la cantidad de veces que la letra aparece en la frase.