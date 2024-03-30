// 31.  Se requiere calcular la distancia entre dos puntos, realizar el código que permita hallar la 
// solución, por favor utilizar funciones matemáticas para ello.: 
// a.  rc((x2-x1)^2 + (y2-y1)^2). 

function calcularDistancia() {
    // Obtener las coordenadas de los puntos desde los inputs HTML
    let x1 = parseFloat(document.getElementById("x1").value);
    let y1 = parseFloat(document.getElementById("y1").value);
    let x2 = parseFloat(document.getElementById("x2").value);
    let y2 = parseFloat(document.getElementById("y2").value);

    // Calcular la distancia entre los puntos utilizando la fórmula de distancia euclidiana
    let distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

    // Mostrar la distancia calculada en el elemento HTML correspondiente
    document.getElementById("resultado").textContent = "La distancia entre los puntos es: " + distancia.toFixed(2);
}


// EXPLICACION DEL EJERCICIO

// function calcularDistancia() {: Esto define una función llamada calcularDistancia(), que se activa cuando se hace clic en el botón correspondiente
// en el HTML.

// let x1 = parseFloat(document.getElementById("x1").value);: Esto obtiene el valor del elemento de entrada con el ID "x1" del HTML, que es la coordenada
// x del primer punto. Utiliza parseFloat() para convertir el valor del campo de entrada en un número decimal.
    
// let y1 = parseFloat(document.getElementById("y1").value);: obtiene el valor de la coordenada y del primer punto.
    
// let x2 = parseFloat(document.getElementById("x2").value);: Esto hace lo mismo pero para la coordenada x del segundo punto.
    
// let y2 = parseFloat(document.getElementById("y2").value);: obtiene el valor de la coordenada y del segundo punto.
    
// let distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));: Aquí se calcula la distancia entre los dos puntos utilizando 
// la fórmula de distancia euclidiana. La fórmula es la raíz cuadrada de la suma de los cuadrados de las diferencias de las coordenadas x y y 
// entre los dos puntos.
    
// document.getElementById("resultado").textContent = "La distancia entre los puntos es: " + distancia.toFixed(2);: el resultado se muestra en 
// el elemento con el ID "resultado" en el HTML. Se usa toFixed(2) para redondear la distancia a dos decimales antes de mostrarla.

// Calcula la distancia entre dos puntos (x1, y1) y (x2, y2) en un plano cartesiano utilizando la fórmula de la distancia euclidiana.
// Se calcula la diferencia entre las coordenadas x de los dos puntos y se eleva al cuadrado.
// Se calcula la diferencia entre las coordenadas y de los dos puntos y se eleva al cuadrado.
// Se suman los resultados de los pasos 1 y 2.
// Se calcula la raíz cuadrada del resultado de la suma para obtener la distancia euclidiana entre los dos puntos.

// Math.sqrt(): Esta función se utiliza para calcular la raíz cuadrada de un número. Toma un solo argumento, que es el número del cual se desea
// calcular la raíz cuadrada, y devuelve la raíz cuadrada de ese número.

// Math.pow(): Esta función se utiliza para calcular una base elevada a una potencia. Toma dos argumentos: la base y el exponente. 
// Devuelve el valor de la base elevada al exponente.