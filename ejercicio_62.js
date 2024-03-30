// 62. Escribir un programa que pida al usuario una palabra y la muestre por pantalla 10 veces. 

const MostrarPalabra = () => {
    // Obtener la palabra ingresada por el usuario
    const Palabra  = document.getElementById("palabraInput").value.trim();

    // Validar si se ingreso una palabra 
    if (Palabra === "") {
        alert("Por favor, ingrese una palabra.");
        return;
    }
    // Mostrar la palabra 10 veces
    let resultado = "";
    for (let i = 0; i < 10; i++) {
        resultado += `${Palabra}<br>`;
    }

    // Mostrar el resultado en el elemento con id "resultado"
    document.getElementById("resultado").innerHTML = resultado;
}

// EXPLICACION DEL EJERCICIO

// Declaración de la función: Se declara una función llamada MostrarPalabra utilizando una arrow function (=>). Esta función no toma ningún parámetro.

// Obtención de la palabra ingresada por el usuario: Se obtiene el valor del input con el id "palabraInput" utilizando 
// document.getElementById("palabraInput").value.trim(). El método trim() se utiliza para eliminar los espacios en blanco al principio y 
// al final de la palabra ingresada.

// Validación de la entrada: Se verifica si se ingresó una palabra. Si el campo está vacío, se muestra una alerta al usuario y la función retorna,
// evitando que continúe la ejecución.

// Generación de la palabra repetida: Se utiliza un bucle for para concatenar la palabra ingresada por el usuario al resultado 10 veces. 
// El bucle se ejecuta desde i = 0 hasta i < 10 (es decir, se ejecuta 10 veces), y en cada iteración se agrega la palabra seguida de un salto de línea 
// (<br>) al resultado.

// Mostrar el resultado: el resultado generado se asigna al contenido del elemento HTML con el id "resultado" utilizando 
// document.getElementById("resultado").innerHTML.