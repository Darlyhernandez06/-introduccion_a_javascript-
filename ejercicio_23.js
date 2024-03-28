// 23.  Realice un algoritmo que, a partir de proporcionarle la velocidad de un automóvil 
// expresada en kilómetros por hora, proporcione la velocidad en metros por segundo. 

function convertirVelocidad() {
    // Obtener la velocidad del automóvil en kilómetros por hora desde el input HTML
    let velocidadKmh = parseFloat(document.getElementById("velocidadKmh").value);

    // Calcular la velocidad del automóvil en metros por segundo
    let velocidadMs = velocidadKmh * (1000 / 3600); // 1 km/h = 1000 m/3600 s

    // Mostrar el resultado en el elemento HTML con id "resultado"
    document.getElementById("resultado"). innerText = "La velocidad del automóvil es: " + velocidadMs.toFixed(2) + " metros por segundo";

}

// EXPLICACION DEL EJERCICIO

// Función convertirVelocidad():
// Esta función se ejecuta cuando se hace clic en un botón en la interfaz de usuario. Normalmente, este botón estaría vinculado al evento onclick y 
// llamaría a esta función.

// Obtención de la velocidad en kilómetros por hora:
// La velocidad del automóvil se obtiene del elemento de entrada en el HTML con el ID "velocidadKmh". Utilizamos document.getElementById() 
// para obtener este elemento y luego accedemos a su valor con la propiedad value. Este valor se convierte a un número de punto flotante (float) 
// utilizando parseFloat().

// La velocidad del automóvil en metros por segundo se calcula multiplicando la velocidad en kilómetros por hora por el factor de conversión (1000 / 3600)
// Esto convierte kilómetros por hora a metros por segundo, ya que 1 kilómetro por hora es igual a (1000 / 3600) metros por segundo.

// Mostrar el resultado en el HTML:
// Una vez calculada la velocidad en metros por segundo, se actualiza el contenido del elemento con el ID "resultado" para mostrar el resultado.
// se coloca innerText para establecer el texto y toFixed(2) para redondear la velocidad a dos decimales antes de mostrarla en el elemento de resultado.


