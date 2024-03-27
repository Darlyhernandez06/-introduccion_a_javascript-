// 17. Escribir un programa que calcule el volumen de una esfera.
// formula V = 4/3 π r³

function calcularVolumen() {
    let radio = parseFloat(document.getElementById("radio").value);
    let volumen = (4/3) * Math.PI *Math.pow(radio, 3);

    document.getElementById("resultado"). innerText = "El volumen de la esfera es:" + volumen.toFixed(2);
}

// EXPLICACION DEL EJERCICIO

// let radio = parseFloat(document.getElementById("radio").value);: Esta línea obtiene el valor del radio de la esfera ingresado por el usuario desde un 
// elemento de entrada HTML con el id "radio". document.getElementById("radio").value recupera el valor del campo de entrada y parseFloat() se utiliza para
// convertir este valor de cadena a un número de punto flotante, que se guarda en la variable radio.

// let volumen = (4/3) * Math.PI * Math.pow(radio, 3);: Aquí se calcula el volumen de la esfera utilizando la fórmula matemática estándar para el 
// volumen de una esfera: V = 4/3 π r³ Math.PI devuelve el valor de la constante matemática π, Math.pow(radio, 3) calcula el radio al cubo y (4/3)
//  * Math.PI * Math.pow(radio, 3) realiza la operación completa para obtener el volumen.

// document.getElementById("resultado").innerText = "El volumen de la esfera es:" + volumen.toFixed(2);: en esta línea actualiza el contenido del 
// elemento HTML con el id "resultado" para mostrar el resultado del cálculo del volumen de la esfera. volumen.toFixed(2) se utiliza para
// redondear el volumen a dos decimales y luego se concatena con el texto descriptivo para formar el mensaje completo que se muestra en la página HTML.