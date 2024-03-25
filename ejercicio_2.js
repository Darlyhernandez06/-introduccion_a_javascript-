// 2. escribir un programa que almacene la cadena de caracteres contraseña de una variable,
// pregunte al usuario por la contraseña e imprima por pantalla si la contraseña introducida 

function verificarContraseña() {

    const contraseñaGuardada = "Hachiko0612";

    const contraseñaIngresada = document.getElementById("contraseñaInput").value;

    if (contraseñaGuardada == contraseñaIngresada) {
        document.getElementById("resultado").textContent = "¡Contraseña correcta! Puedes acceder al sistema.";
    } else {
        document.getElementById("resultado").textContent = "¡Contraseña incorrecta! No puedes acceder al sistema.";
    }
}

// EXPLICACION DEL EJERCICIO 
// Definición de la función verificarContraseña():
// Se define una función llamada verificarContraseña() que será ejecutada cuando el usuario realice una acción, por ejemplo, al hacer clic en un botón.

// Definición de la contraseña predefinida:
// Se define la contraseña predefinida utilizando una constante llamada contraseñaGuardada. En este caso, la contraseña predefinida es "Hachiko0612".

// Obtención de la contraseña ingresada por el usuario:

// Se utiliza document.getElementById("contraseñaInput").value para obtener el valor del campo de entrada de contraseña del documento HTML. 
// Esto se utiliza para obtener la contraseña que el usuario ha ingresado.

// Comparación de las contraseñas:
// Se compara la contraseña ingresada por el usuario con la contraseña predefinida utilizando un condicional if.
// Si las contraseñas son iguales (contraseñaGuardada == contraseñaIngresada), se ejecuta el bloque de código dentro del primer if
// que establece el texto del elemento con ID "resultado" como "¡Contraseña correcta! Puedes acceder al sistema.".
// Si las contraseñas no son iguales, se ejecuta el bloque de código dentro del else, que establece el texto del 
// elemento con ID "resultado" como "¡Contraseña incorrecta! No puedes acceder al sistema.".