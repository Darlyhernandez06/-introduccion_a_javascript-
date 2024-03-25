// 2. escribir un programa que almacene la cadena de caracteres contraseña de una variable,
// pregunte al usuario por la contraseña e imprima por pantalla si la contraseña introducida
// por el usuario coincide con la guardada en la variable sin tener en cuenta mayúsculas y
// minúsculas, se debe validar que solo se pueda ingresar valores alfanuméricos. 

function verificarContraseña() {

    // Almacenar la contraseña en una variable
    const contraseñaGuardada = "Hachiko0612";

    // Obtener la contraseña ingresada por el usuario y convertirla a minúsculas
    let contraseñaIngresada = document.getElementById("contraseñaInput").value.toLowerCase();

    // Expresión regular para validar si la contraseña contiene solo caracteres alfanuméricos
    let expresionRegular = /^[a-zA-Z0-9]+$/;

    // Verificar si la contraseña ingresada cumple con la expresión regular
    if (!expresionRegular.test(contraseñaIngresada)) {
        document.getElementById("resultado").textContent = "Por favor, ingrese solo caracteres alfanuméricos.";
    } else { // Comparar la contraseña ingresada con la contraseña guardada (sin importar mayúsculas y minúsculas)
        if (contraseñaIngresada === contraseñaGuardada.toLowerCase()) {
            document.getElementById("resultado").textContent = "¡Contraseña correcta! Puede acceder al sistema.";
        } else {
            document.getElementById("resultado").textContent = "¡Contraseña incorrecta! No puede acceder al sistema.";
        }
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

//  Esta contraseña ingresada se convierte a minúsculas utilizando .toLowerCase(). Esto se hace para que la comparación entre la contraseña ingresada y 
// la contraseña guardada no distinga entre mayúsculas y minúsculas.
// depues se utiliza una expresión regular ^[a-zA-Z0-9]+$ para verificar si la contraseña ingresada contiene solo caracteres alfanuméricos.
// Esta expresión regular comprueba si la cadena contiene solo letras (mayúsculas y minúsculas) y números.
// Si la contraseña ingresada no cumple con la expresión regular (es decir, contiene caracteres no alfanuméricos), 
// se muestra un mensaje indicando que solo se deben ingresar caracteres alfanuméricos.

// Comparación de las contraseñas:
// Se compara la contraseña ingresada por el usuario con la contraseña predefinida utilizando un condicional if.
// Si las contraseñas son iguales (contraseñaGuardada == contraseñaIngresada), se ejecuta el bloque de código dentro del primer if
// que establece el texto del elemento con ID "resultado" como "¡Contraseña correcta! Puedes acceder al sistema.".
// Si las contraseñas no son iguales, se ejecuta el bloque de código dentro del else, que establece el texto del 
// elemento con ID "resultado" como "¡Contraseña incorrecta! No puedes acceder al sistema.".