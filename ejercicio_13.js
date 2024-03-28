// 13. Escribir un programa que lea 4 números y calcule la media. 

function calcularMedia() {
    let Numero1 = parseFloat(document.getElementById("num1").value);
    let Numero2 = parseFloat(document.getElementById("num2").value);
    let Numero3 = parseFloat(document.getElementById("num3").value);
    let Numero4 = parseFloat(document.getElementById("num4").value);

    let media = (Numero1 + Numero2 + Numero3 + Numero4) / 4;

    document.getElementById("resultado").innerText = "La media de los números ingresados es:" + media;
}
// EXPLICACION DEL EJERCICIO 

// function calcularMedia() {: Esta línea define una función llamada calcularMedia(), que se encargará de calcular la media de los números ingresados 
// cuando se la llame.

// let Numero_1 = parseFloat(document.getElementById("num1").value);: Esta línea obtiene el valor ingresado en el primer campo de entrada con el id "num1".
// Utiliza parseFloat() para convertir el valor de entrada, que es una cadena, a un número de coma flotante (float). Luego, este valor se guarda en la variable Numero_1.
// De la misma manera, se obtienen los valores ingresados en los otros tres campos de entrada (num2, num3 y num4) y se guardan en las variables Numero_2, 
// Numero_3 y Numero_4, respectivamente.

// let media = (Numero_1 + Numero_2 + Numero_3 + Numero_4) / 4;: Esta línea calcula la media de los cuatro números sumándolos y luego dividiendo la
// suma por 4. El resultado se guarda en la variable media.

// document.getElementById("resultado").innerText = "La media de los números ingresados es:" + media;: Finalmente, esta línea actualiza el contenido 
// del elemento HTML con el id "resultado" para mostrar el resultado del cálculo de la media. Concatena el mensaje "La media de los números ingresados 
// es:" con el valor de la variable media, que contiene el resultado del cálculo.