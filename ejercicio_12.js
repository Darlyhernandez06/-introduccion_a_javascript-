// 12. Escribir un programa que calcule el área de un rectángulo: 

function calcularAreaRectángulo() {
    // Obtener la base y la altura ingresadas por el usuario
    let Base = parseFloat(document.getElementById("baseInput").value);
    let Altura = parseFloat(document.getElementById("alturaInput").value);
    let resultadoElement = document.getElementById("resultado");

    // Calcular el área del rectángulo
    let area = Base * Altura;

    // Mostrar el resultado en el HTML con dos decimales
    document.getElementById("resultado").innerText = "El área del rectángulo es: " + area.toFixed(2);
}

// EXPLICACION DEL EJERCICIO 

// function calcularAreaRectángulo() {: Esta línea define una función llamada calcularAreaRectángulo(), que se encargará de calcular el área del rectángulo cuando se llame.

// let Base = parseFloat(document.getElementById("baseInput").value);: Esta línea obtiene el valor ingresado en el campo de entrada con el id "baseInput".
// Utiliza parseFloat() para convertir el valor de entrada, que es una cadena, a un número de coma flotante (float). Luego, este valor se guarda en la 
// variable Base.
    
// let Altura = parseFloat(document.getElementById("alturaInput").value);: De manera similar a la línea anterior, esta línea obtiene el valor ingresado en 
// el campo de entrada con el id "alturaInput", lo convierte en un número de coma flotante y lo guarda en la variable Altura.
    
// let resultadoElement = document.getElementById("resultado");: Esta línea obtiene el elemento HTML con el id "resultado" y lo guarda en la variable 
// resultadoElement. Este elemento se utilizará más adelante para mostrar el resultado del cálculo del área.
    
// let area = Base * Altura;: Esta línea calcula el área del rectángulo multiplicando la base (Base) por la altura (Altura) y guarda el resultado en 
// la variable area.
    
// document.getElementById("resultado").innerText = "El área del rectangulo es:" + area.toFixed(2);: en esta línea actualiza el contenido del elemento HTML
// con el id "resultado" para mostrar el resultado del cálculo del área. Utiliza toFixed(2) para formatear el resultado con dos decimales después del 
// punto decimal antes de mostrarlo.