// 15. Escribir un programa que calcule la longitud y el área de una circunferencia.

function calcular() {
    // Obtener el radio de la circunferencia ingresado por el usuario
    let radio = parseFloat(document.getElementById("radio").value);

    // Calcular la longitud de la circunferencia (2 * pi * radio)
    let longitud = 2 * Math.PI * radio;
    document.getElementById("longitud").innerText = "La longitud de la circunferencia es: " + longitud.toFixed(2);

    // Calcular el área de la circunferencia (pi * radio^2)
    let area = Math.PI * Math.pow(radio, 2);
    document.getElementById("area").innerText = "El área de la circunferencia es: " + area.toFixed(2);
}

// EXPLICACION DEL EJERCICIO

// function calcular() {: Esta línea define una función llamada calcular(), que se utiliza para calcular tanto la longitud como el área de la circunferencia 
// cuando se la llama.

// let radio = parseFloat(document.getElementById("radio").value);: Aquí se obtiene el valor del radio de la circunferencia ingresado por el usuario.
// document.getElementById("radio").value accede al elemento de entrada HTML con el id "radio" y obtiene su valor. parseFloat() se utiliza para convertir 
// este valor de cadena a un número decimal de punto flotante, y luego se guarda en la variable radio.
    
// let longitud = 2 * Math.PI * radio;: Aquí se calcula la longitud de la circunferencia utilizando la fórmula estándar: 2 * pi * radio.
// El valor de la constante pi se obtiene a través de Math.PI. El resultado se guarda en la variable longitud.
    
// document.getElementById("longitud").innerText = "La longitud de la circunferencia es:" + longitud.toFixed(2);: Esta línea actualiza el contenido 
// del elemento HTML con el id "longitud" para mostrar el resultado del cálculo de la longitud de la circunferencia. Concatena el mensaje 
// "La longitud de la circunferencia es:" con el valor de la variable longitud, que contiene el resultado del cálculo, y lo asigna como el texto 
// del elemento.
    
// let area = Math.PI * Math.pow(radio, 2);: Aquí se calcula el área de la circunferencia utilizando la fórmula estándar: π×radio2 Math.pow(radio, 2) 
// se utiliza para elevar al cuadrado el valor del radio. El resultado se guarda en la variable area.

// document.getElementById("area").innerText = "El area de la circuferencia es:" + area.toFixed(2);: en esta línea actualiza el contenido del 
// elemento HTML con el id "area" para mostrar el resultado del cálculo del área de la circunferencia. Concatena el mensaje 
// "El área de la circunferencia es:" con el valor de la variable area, que contiene el resultado del cálculo, y lo asigna como el texto del elemento.