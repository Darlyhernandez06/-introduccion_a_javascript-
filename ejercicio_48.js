// 48. Escriba un algoritmo que permita calcular el área, debe preguntar que figura geométrica 
// desea calcular "Triángulo y Círculo: (Escriba T o C): 
// a. Triangulo = base * altura / 2 
// b. Circulo = PI * radio* radio 

function calcularArea() {
    // Obtener la figura seleccionada por el usuario y convertirla a mayúsculas
    const figura = document.getElementById("figura").value.toUpperCase();
    let area;

    // Determinar el cálculo del área según la figura seleccionada
    if (figura === 'T') {
        // Si la figura es un triángulo, solicitar la base y altura
        const base = parseFloat(prompt("Ingrese la base del triángulo:"));
        const altura = parseFloat(prompt("Ingrese la altura del triángulo:"));
        // Calcular el área del triángulo
        area = (base * altura) / 2;
    } else if (figura === 'C') {
        // Si la figura es un círculo, solicitar el radio
        const radio = parseFloat(prompt("Ingrese el radio del círculo:"));
        // Calcular el área del círculo
        area = Math.PI * radio * radio;
    } else {
        // Si se ingresa una figura no válida, mostrar un mensaje de error
        area = "Por favor, ingrese 'T' para un triángulo o 'C' para un círculo.";
    }

    // Mostrar el resultado del cálculo del área en el elemento HTML correspondiente
    document.getElementById("resultado").textContent = "El área es: " + area.toFixed(2);
}


// EXPLICACION DEL EJERCICIO

// const figura = document.getElementById("figura").value.toUpperCase();: Obtiene el valor del elemento de entrada con el ID "figura" del HTML y lo
// convierte a mayúsculas para garantizar que coincida con las condiciones del if posterior.

// let area;: Declara una variable area que se utilizará para almacenar el resultado del cálculo del área.

// if (figura === 'T') { ... } else if (figura === 'C') { ... } else { ... }: Esta es una estructura condicional que verifica qué figura geométrica 
// se ha seleccionado. Si es un triángulo ('T'), solicita al usuario que ingrese la base y la altura del triángulo utilizando la función prompt(), 
// luego calcula el área utilizando la fórmula correspondiente. Si es un círculo ('C'), solicita al usuario que ingrese el radio del círculo y 
// calcula el área utilizando la fórmula del área del círculo. 
// Si no se ingresa ninguna de las opciones válidas, asigna un mensaje de advertencia a la variable area.

// document.getElementById("resultado").textContent = "El área es: " + area.toFixed(2);: actualiza el contenido del elemento con el ID "resultado" 
// en el HTML con el resultado del cálculo del área, formateado con dos decimales utilizando el método toFixed(2).