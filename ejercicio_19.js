// 19.  Escribir un programa que calcule el área y el volumen de un cilindro. 

// Área de la superficie lateral del cilindro (A superficie): A superficie = 2πrh
// Área total de la superficie del cilindro (A total):A total = 2πr(r+h)
// Volumen del cilindro (V): V=πr2h
// Donde: R es el radio del cilindro y H es la altura del cilindro.

function calcular() {
    // Obtener los valores del radio y la altura del cilindro
    let Radio = parseFloat(document.getElementById("radio").value);
    let Altura = parseFloat(document.getElementById("altura").value);

    // Calcular el área de la superficie del cilindro
    let area_superficie = 2 * Math.PI * Radio * Altura;
    document.getElementById('areaSuperficie').innerText = "Área de la superficie del cilindro: " + area_superficie.toFixed(2);

    // Calcular el área total de la superficie del cilindro
    let area_total = 2 * Math.PI * Radio * (Radio + Altura);
    document.getElementById('areaTotal').innerText = "Área total de la superficie del cilindro: " + area_total.toFixed(2);

    // Calcular el volumen del cilindro
    let Volumen =  Math.PI * Math.pow(Radio, 2) * Altura;
    document.getElementById('volumen').innerText = "Volumen del cilindro: " + Volumen.toFixed(2);

}

// EXPLICACION DEL EJERCICIO

// let Radio = parseFloat(document.getElementById("radio").value); y let Altura = parseFloat(document.getElementById("altura").value);:
// Estas líneas obtienen los valores del radio y la altura del cilindro ingresados por el usuario desde elementos de entrada HTML con los id "radio" 
// y "altura", respectivamente. document.getElementById("radio").value y document.getElementById("altura").value recuperan los valores de los campos 
// de entrada, y parseFloat() se utiliza para convertir estos valores de cadena a números de punto flotante. Los valores se guardan en las variables 
// Radio y Altura.

// let area_superficie = 2 * Math.PI * Radio * Altura;: Aquí se calcula el área de la superficie del cilindro utilizando la fórmula A superficie = 2πrh
// donde r es el radio y es la altura del cilindro. La variable area_superficie almacena este valor.

// document.getElementById('areaSuperficie').innerText = "Área de la superficie del cilindro: " + area_superficie.toFixed(2);: 
// Esta línea actualiza el contenido del elemento HTML con el id "areaSuperficie" para mostrar el resultado del cálculo del área de la 
// superficie del cilindro. area_superficie.toFixed(2) se utiliza para redondear el área de la superficie a dos decimales y luego se 
// concatena con el texto descriptivo para formar el mensaje completo que se muestra en la página HTML.

// Los pasos 2 y 3 se repiten para calcular y mostrar el área total de la superficie del cilindro y el volumen del cilindro.