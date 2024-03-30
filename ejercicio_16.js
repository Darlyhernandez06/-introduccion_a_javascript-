// 16. Escribir un programa que calcule la velocidad de un proyectil que recorre 2km en 5 minutos, exprese el resultado en metros/segundo.

// Convertir la distancia de kilómetros a metros (1 km = 1000 metros).
// Convertir el tiempo de minutos a segundos.
// Usar la fórmula de velocidad: velocidad = distancia/ tiempo para calcular la velocidad en metros por segundo.

function calcularVelocidad() {
    // Convertir la distancia de kilómetros a metros
    let distanciaEnMetros = 2 * 1000; // 1 km = 1000 metros

    // Convertir el tiempo de minutos a segundos
    let tiempoEnSegundos = 5 * 60; // 1 minuto = 60 segundos

    // Calcular la velocidad (distancia / tiempo)
    let velocidad = distanciaEnMetros / tiempoEnSegundos;

    // Mostrar el resultado en el HTML
    document.getElementById("Velocidad").innerText = "La velocidad de un proyectil que recorre 2km en 5 minutos es: " + velocidad.toFixed(2) + " metros por segundo";
}

// EXPLICACION DEL EJERCICIO

// let distanciaEnMetros = 2 * 1000;: Esto calcula la distancia en metros. Multiplica 2 kilómetros por 1000 para convertirlo a metros, ya que 1 kilómetro
// es igual a 1000 metros.

// let tiempoEnSegundos = 5 * 60;: Esto convierte el tiempo de minutos a segundos. Multiplica 5 minutos por 60 segundos para obtener el tiempo en segundos,
// ya que 1 minuto es igual a 60 segundos.

// let velocidad = distanciaEnMetros / tiempoEnSegundos;: Esto calcula la velocidad dividiendo la distancia en metros por el tiempo en segundos. 
// La fórmula de velocidad es distancia sobre tiempo.

// document.getElementById("Velocidad").innerText = "La velocidad de un proyectil que recorre 2km en 5 minutos es: " + velocidad.toFixed(2) + " 
// metros por segundo";: Esto actualiza el contenido del elemento HTML con el id "Velocidad" para mostrar el resultado del cálculo de la velocidad. 
// Utiliza velocidad.toFixed(2) para redondear la velocidad a dos decimales, y concatena este valor con el texto descriptivo para mostrar 
// el resultado completo en la página HTML.