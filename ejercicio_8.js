// 8. En una determinada empresa, sus empleados son evaluados al final de cada año. Los 
// puntos que pueden obtener en la evaluación comienzan en 0.0 y pueden ir aumentando, 
// traduciéndose en mejores beneficios. Los puntos que pueden conseguir los empleados 
// pueden ser 0.0, 0.4, 0.6 o más, pero no valores intermedios entre las cifras mencionadas. 
// A continuación, se muestra una tabla con los niveles correspondientes a cada puntuación.  
// a. La cantidad de dinero conseguida en cada nivel es de 2.400€ multiplicada por la puntuación del nivel.  
// b. Nivel Puntuación Inaceptable 0.0 Aceptable 0.4 Meritorio 0.6 o más  
// Escribir un programa que lea la puntuación del usuario e indique su nivel de rendimiento, 
// así como la cantidad de dinero que recibirá el usuario. 

function evaluarRendimiento() {
    let puntuacion = parseFloat(document.getElementById("puntuacionInput").value);
    let nivel;
    let cantidadDinero;
    let resultadoElement = document.getElementById("resultado");

    if (puntuacion === 0.0) {
        nivel = "Inaceptable";
        cantidadDinero = 0;
    } else if (puntuacion === 0.4) {
        nivel = "Aceptable";
        cantidadDinero = 2400 * puntuacion;
    } else if (puntuacion >= 0.6) {
        nivel = " Meritorio";
        cantidadDinero = 2400 * puntuacion;
    } else {
        nivel = "Puntuación inválida";
        cantidadDinero = 0;
    }
    document.getElementById("resultado").innerText = "Nivel de rendimiento: " + nivel + "\nCantidad de dinero recibida: " + cantidadDinero + "€";
}

// EXPLICACION DEL EJERCICIO 

// Obtención del valor de la puntuación:
// let puntuacion = parseFloat(document.getElementById("puntuacionInput").value);: Esta línea de código obtiene el valor de la puntuación ingresada por el 
// usuario desde el campo de entrada del formulario con el id "puntuacionInput". El valor se convierte a un número decimal utilizando parseFloat() y se 
// guarda en la variable puntuacion.

// Declaración de variables:
// let nivel;: Se declara una variable nivel que se utilizará para almacenar el nivel de rendimiento correspondiente a la puntuación ingresada por el usuario.
// let cantidadDinero;: Se declara una variable cantidadDinero que se utilizará para almacenar la cantidad de dinero que recibirá el empleado según su rendimiento.

// Evaluación del nivel de rendimiento:
// Se utilizo unas declaraciones de if-else if-else para determinar el nivel de rendimiento del empleado según la puntuación ingresada.
// Si la puntuación es exactamente 0.0, se considera "Inaceptable" y no se le asigna ninguna cantidad de dinero.
// Si la puntuación es exactamente 0.4, se considera "Aceptable" y se calcula la cantidad de dinero que recibirá multiplicando 2400 por la puntuación.
// Si la puntuación es mayor o igual a 0.6, se considera "Meritorio" y se calcula la cantidad de dinero que recibirá multiplicando 2400 por la puntuación.
// Si la puntuación no es ninguno de estos valores, se considera "Puntuación inválida" y no se le asigna ninguna cantidad de dinero.

// Actualización del resultado:
// Después de determinar el nivel de rendimiento y la cantidad de dinero correspondiente, se actualiza el contenido del elemento <p> con id "resultado" 
// utilizando la propiedad innerText. Se concatena el resultado con el nivel de rendimiento y la cantidad de dinero que recibirá el empleado, 
// mostrando así la evaluación completa.