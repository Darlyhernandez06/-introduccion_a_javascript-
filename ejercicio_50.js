// 50.  Considere dos variables llamadas temperatura y presión. Escriba una sentencia if-else que 
// muestre en pantalla la palabra Alarma si la variable presión es mayor a 200 o si la variable 
// temperatura es mayor a 100. En caso contrario, se debe mostrar en pantalla la palabra Normal. 

function verificar() {
    // Obtener los valores de temperatura y presión ingresados por el usuario
    let temperatura = parseFloat(document.getElementById("temperatura").value);
    let presion = parseFloat(document.getElementById("presion").value);

    // Verificar si la presión es mayor a 200 o la temperatura es mayor a 100
    if (presion > 200 || temperatura > 100) {
        document.getElementById("resultado").textContent = "Alarma";
    } else {
        document.getElementById("resultado").textContent = "Normal";
    }
}

// EXPLICACION DEL EJERCICIO 

// Obtiene los valores de temperatura y presión ingresados por el usuario desde los elementos de entrada en el HTML con los ids "temperatura" y "presion".
// Verifica si la presión es mayor que 200 o si la temperatura es mayor que 100.
// Si alguna de las condiciones anteriores se cumple, establece el contenido del elemento con id "resultado" en "Alarma".
// Si ninguna de las condiciones se cumple, establece el contenido del elemento con id "resultado" en "Normal".