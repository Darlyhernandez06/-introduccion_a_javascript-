// 14. Escribir un programa que calcule el área de un triángulo. 

function calcularAreaTriangulo() {
    // Obtener la base y la altura del triángulo ingresadas por el usuario
    let Base = parseFloat(document.getElementById("baseInput").value);
    let Altura = parseFloat(document.getElementById("alturaInput").value);

    // Calcular el área del triángulo
    let area = (Base * Altura) / 2;

    // Mostrar el resultado en el HTML
    document.getElementById("resultado").innerText = "El área del triángulo es: " + area.toFixed(2);
}


// EXPLICACION DEL EJERCICIO 

// function calcularAreaTriángulo() {: Esta línea define una función llamada calcularAreaTriángulo(), que se utiliza para calcular el área de un triángulo
// cuando se la llama.

// let Base = parseFloat(document.getElementById("baseInput").value);: Aquí se obtiene el valor de la base del triángulo ingresado por el usuario. 
// document.getElementById("baseInput").value accede al elemento de entrada HTML con el id "baseInput" y obtiene su valor. 
// parseFloat() se utiliza para convertir este valor de cadena a un número decimal de punto flotante, y luego se guarda en la variable Base.
    
// De la misma manera se obtiene el valor de la altura del triángulo ingresado por el usuario utilizando document.getElementById("alturaInput").value,
// se convierte en un número flotante y se guarda en la variable Altura.
    
// let resultadoElement = document.getElementById("resultado");: Esta línea obtiene una referencia al elemento HTML con el id "resultado" y 
// la asigna a la variable resultadoElement. Esta variable se utiliza para acceder al elemento de resultado de manera más eficiente en el código.
    
// let area = (Base * Altura) / 2;: Aquí se calcula el área del triángulo utilizando la fórmula básica: base por altura dividido por 2. 
// El resultado se guarda en la variable area.
    
// document.getElementById("resultado").innerText = "El área del triángulo es:" + area.toFixed(2);: esta línea actualiza el contenido del elemento HTML 
// con el id "resultado" para mostrar el resultado del cálculo del área del triángulo. Concatena el mensaje "El área del triángulo es:" 
// con el valor de la variable area, que contiene el resultado del cálculo, y lo asigna como el texto del elemento.