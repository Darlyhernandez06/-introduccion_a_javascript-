// 64. Escribir un programa que pida al usuario un número entero positivo y muestre por pantalla 
// todos los números impares desde 1 hasta ese número separados por coma. 

const ProgramaMostrarImpares = () => {
    // Obtener el número ingresado por el usuario
    const numero = parseInt(document.getElementById("numeroInput").value);

    // Validar si el número ingresado es un entero positivo
    if (numero <= 0 || isNaN(numero)) {
        alert("Por favor, ingrese un número entero positivo.");
        return;
    }

    // Variable para almacenar los números impares
    let impares = "";

    // Iterar desde 1 hasta el número ingresado, incluyendo solo los impares
    for (let i = 1; i <= numero; i += 2) {
        // Agregar el número impar a la cadena impares, separado por coma
        impares += i + ", ";
    }

    // Eliminar la coma extra al final de la cadena impares
    impares = impares.slice(0, -2);

    // Mostrar los números impares en el elemento con id "resultado"
    document.getElementById("resultado").textContent = "Números impares hasta " + numero + ": " + impares;

} 

// EXPLICACION DEL EJERCICIO

// Obtención del número ingresado por el usuario: Se utiliza document.getElementById("numeroInput").value para obtener el valor del elemento de entrada
// donde el usuario ingresa el número. Este valor se convierte a un número entero utilizando parseInt() y se almacena en la variable numero.

// Validación del número ingresado: Se verifica si el número ingresado es válido, es decir, si es un entero positivo. Esto se hace mediante una condición
// if. Si el número es menor o igual a cero (<= 0) o no es un número (isNaN(numero)), se muestra una alerta indicando al usuario que debe ingresar un número entero positivo y se finaliza la ejecución de la función utilizando return.

// Generación de los números impares: Se utiliza un bucle for para iterar desde 1 hasta el número ingresado (i <= numero). En cada iteración, 
// se agrega el número impar actual a la cadena impares junto con una coma y un espacio, solo si i es impar (i % 2 === 1). Esto se logra mediante
// i += 2, que incrementa i en 2 en cada iteración, asegurando así que i sea siempre impar.

// Eliminación de la coma extra: Después de completar el bucle, se elimina la coma extra al final de la cadena impares utilizando slice(0, -2), 
// que elimina los dos últimos caracteres de la cadena.

// Mostrar los resultados: se utiliza document.getElementById("resultado").textContent para asignarle al elemento con id "resultado" un mensaje 
// que indica los números impares generados hasta el número ingresado por el usuario.

