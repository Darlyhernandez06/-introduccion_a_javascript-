// 34. Generar el algoritmo que dé como resultado el tiempo estimado para el llenado de un depósito. 
// a. Q = V/t, siendo Q (caudal), V (volumen) y t (tiempo).  
// b. Volumen = PI *(radio^2)* H (altura del depósito). 
// El tiempo se encuentra en minutos. Normalmente se mide el volumen en litros y el tiempo en segundos. 

function calcularDeposito() {
    // Solicitar al usuario que ingrese el radio, la altura y el caudal del depósito
    const radio = parseFloat(prompt("Ingrese el radio del depósito (metros):"));
    const altura = parseFloat(prompt("Ingrese la altura del depósito (metros):"));
    const caudal = parseFloat(prompt("Ingrese el caudal (litros por segundo):"));

    // Calcular el tiempo estimado para el llenado del depósito
    const tiempoEstimado = calcularTiempoLlenadoDeposito(radio, altura, caudal);

    // Mostrar el resultado en el elemento HTML correspondiente
    document.getElementById("resultado").textContent = "El tiempo estimado para el llenado del depósito es de " + tiempoEstimado + " minutos.";
}

function calcularTiempoLlenadoDeposito(radio, altura, caudal) {
    // Calcular el volumen del depósito
    const volumen = Math.PI * Math.pow(radio, 2) * altura;

    // Calcular el tiempo de llenado en segundos y convertirlo a minutos
    const tiempoSegundos = volumen / caudal;
    const tiempoMinutos = tiempoSegundos / 60;

    // Devolver el tiempo de llenado en minutos
    return tiempoMinutos;
}

// EXPLICACION DEL EJERCICIO

// Función calcularDeposito():
// Esta función solicita al usuario que ingrese el radio del depósito, la altura del depósito y el caudal en litros por segundo utilizando la función 
// prompt().
// Luego, llama a la función calcularTiempoLlenadoDeposito() para calcular el tiempo estimado necesario para llenar el depósito.
// muestra el resultado en el elemento con el id "resultado" utilizando document.getElementById("resultado").textContent.

// Función calcularTiempoLlenadoDeposito():
// Esta función toma los parámetros radio, altura y caudal y calcula el volumen del depósito utilizando la fórmula: Volumen = PI *(radio^2)* H (altura del depósito).

// Luego, calcula el tiempo necesario para llenar el depósito dividiendo el volumen entre el caudal.
// convierte el tiempo de segundos a minutos y lo devuelve.

// const tiempoSegundos = volumen / caudal;:
// Esta línea calcula el tiempo necesario para llenar el depósito en segundos. Se divide el volumen del depósito (expresado en litros) entre el caudal 
// (expresado en litros por segundo). El resultado de esta división es el tiempo requerido para llenar el depósito en segundos. Esta operación es
//  posible ya que el volumen se mide en litros y el caudal en litros por segundo, lo que resulta en una unidad de tiempo en segundos.

// const tiempoMinutos = tiempoSegundos / 60;:
// Esta línea convierte el tiempo calculado en segundos a minutos. Se divide el tiempo en segundos entre 60, ya que hay 60 segundos en un minuto.
// El resultado de esta división es el tiempo en minutos, que es más conveniente para presentar al usuario.

// return tiempoMinutos;:
// el tiempo estimado para llenar el depósito se devuelve como resultado de la función.