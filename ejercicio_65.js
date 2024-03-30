// 65. Escribir un programa que pida al usuario un número entero positivo y muestre por pantalla 
// la cuenta atrás desde ese número hasta cero separados por comas. 

const ProgramacuentaAtras = () => {
    // Obtener el número ingresado por el usuario
    const numero =parseInt(document.getElementById("numeroInput").value);

    // Validar si el número ingresado es un entero positivo
    if (numero <= 0 || isNaN(numero)) {
        alert("Por favor, ingrese un número entero positivo.");
        return;
    }

    // Variable para almacenar la cuenta atrás
    let cuentaAtras = "";

    // Generar la cuenta atrás desde el número ingresado hasta cero
    for(let i = numero; i >= 0; i--) {
        cuentaAtras += i + ", ";
    }

    // Mostrar la cuenta atrás en el elemento con id "resultado"
    document.getElementById("resultado").textContent = "Cuenta atrás desde " + numero + " hasta 0: " + cuentaAtras;
}

// EXPLICACION DEL EJERCICIO

// Obtener el número ingresado por el usuario: Utiliza document.getElementById("numeroInput").value para obtener el valor ingresado por el usuario en 
// el campo de entrada con el ID "numeroInput". Este valor se almacena en la variable numero.

// Validar si el número ingresado es un entero positivo: Comprueba si el número ingresado (numero) es menor o igual a cero o si no es un número
// (utilizando isNaN(numero)). Si alguna de estas condiciones es verdadera, muestra una alerta indicando al usuario que ingrese un número entero 
//positivo y termina la ejecución de la función utilizando return.

// Inicializar una variable para almacenar la cuenta atrás: Declara una variable llamada cuentaAtras para almacenar la cuenta atrás que se 
// generará en el siguiente paso. Inicialmente, esta variable está vacía.

// Generar la cuenta atrás desde el número ingresado hasta cero: Utiliza un bucle for para generar la cuenta atrás. 
// Comienza con i igual al número ingresado (numero) y decrementa i en cada iteración hasta que i sea igual a cero. En cada iteración, 
// concatena el valor de i con una coma y un espacio a la cadena cuentaAtras.

// Mostrar la cuenta atrás en el elemento HTML: Utiliza document.getElementById("resultado").textContent para asignar el texto que muestra la cuenta
// atrás en el elemento HTML con el ID "resultado". Este texto incluye el número desde el cual se inicia la cuenta atrás (numero), el texto 
// "Cuenta atrás desde", y la cuenta atrás generada (cuentaAtras).