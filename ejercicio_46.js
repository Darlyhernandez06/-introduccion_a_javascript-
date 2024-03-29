// 46. Calcule el mayor de tres números, permitiendo leer 3 valores diferentes.

function calcularMayor() {
    // Obtener los valores de los tres números ingresados por el usuario
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);
    let numero3 = parseFloat(document.getElementById("numero3").value);

    // Verificar cuál de los tres números es el mayor
    let mayor = numero1;
    if (numero2 > mayor) {
        mayor = numero2;
    }
    if (numero3 > mayor) {
        mayor = numero3;
    }

    // Mostrar el resultado
    document.getElementById("resultado").textContent = "El mayor de los tres números es: " + mayor;
}

// EXPLICACION DEL EJERCICIO

// Obtención de los valores: Se obtienen los valores de los tres números ingresados por el usuario utilizando document.getElementById("numeroX").value, 
// donde "X" representa el número del campo de entrada.

// Comparación de números: Se inicializa una variable mayor con el valor del primer número (numero1). Luego, se compara este número con los otros dos
// (numero2 y numero3) utilizando declaraciones if. Si alguno de los números es mayor que el valor actual de mayor, 
// se actualiza el valor de mayor con el número más grande.

// Mostrar el resultado: se muestra el resultado en el elemento HTML con id "resultado". Se concatena la cadena "El mayor de los tres números es: 
// " con el valor de mayor para formar el mensaje que se mostrará al usuario.