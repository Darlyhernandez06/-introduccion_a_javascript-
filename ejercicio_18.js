// 18. Escribir un programa que evalúe la siguiente expresión (a+7*c) / (b+2-a) + 2*b

function evaluarExpresion() {
    let valor_A = parseFloat(document.getElementById("valorA").value);
    let valor_B = parseFloat(document.getElementById("valorB").value);
    let valor_C = parseFloat(document.getElementById("valorC").value);

    let expresion = (valor_A + 7 * valor_C) / (valor_B + 2 - valor_A) + 2 * valor_B;

    document.getElementById("resultado").innerText = "El resultado de la expresión es:" + expresion;
}

// EXPLICACION DEL EJERCICIO

// let valor_A = parseFloat(document.getElementById("valorA").value);: Esta línea obtiene el valor de A ingresado por el usuario desde un elemento de entrada
//  HTML con el id "valorA". document.getElementById("valorA").value recupera el valor del campo de entrada y parseFloat() se utiliza para convertir
// este valor de cadena a un número de punto flotante, que se guarda en la variable valor_A. Lo mismo se realiza para los valores de B y C con las 
// variables valor_B y valor_C, respectivamente.

// let expresion = (valor_A + 7 * valor_C) / (valor_B + 2 - valor_A) + 2 * valor_B;: Aquí se calcula la expresión dada utilizando los valores
// ingresados por el usuario. La expresión se evalúa de acuerdo con la fórmula proporcionada en el enunciado.

// document.getElementById("resultado").innerText = "El resultado de la expresión es:" + expresion;: por ultimo en esta línea actualiza el 
// contenido del elemento HTML con el id "resultado" para mostrar el resultado de la evaluación de la expresión. expresion contiene el valor
// calculado de la expresión y se concatena con el texto descriptivo para formar el mensaje completo que se muestra en la página HTML.