// 24.  Escriba una expresión regular que reconozca los números en punto flotante (por ejemplo 2.3e-1, -3e2, 23, 3.2). 

function validarNumero() {
    // Obtener el valor del número desde el input HTML
    let numero = document.getElementById("numero").value;

    // Expresión regular para reconocer números en punto flotante
    let expresion = /[-+]?\d+(\.\d+)?([eE][-+]?\d+)?/;

    // Verificar si el número coincide con la expresión regular
    if (expresion.test(numero)) {
        document.getElementById("resultado").innerText = "El número es válido.";
    } else {
        document.getElementById("resultado").innerText = "El número no es válido.";
    }
}

// EXPLICACION DEL EJERCICIO

// Función validarNumero():
//Esta función se llama cuando el usuario hace clic en un botón en la interfaz de usuario. Presumiblemente, este botón estaría vinculado al evento onclick
// y llamaría a esta función.

// Obtención del valor del número desde el input HTML:
// El valor del número ingresado por el usuario se obtiene del elemento de entrada en el HTML con el ID "numero". Utilizamos document.getElementById() 
// para obtener este elemento y luego accedemos a su valor con la propiedad value.

// Expresión regular para reconocer números en punto flotante:
// Se define una expresión regular llamada expresion que reconoce números en punto flotante. Esta expresión regular coincide con varios formatos 
// de números en punto flotante, incluidos números decimales estándar y notación científica.

// Verificación si el número coincide con la expresión regular:
// Se utiliza el método test() de la expresión regular para verificar si el número ingresado por el usuario coincide con la expresión regular. 
// Si el número coincide, se establece el texto del elemento con el ID "resultado" como "El número es válido.". De lo contrario, se establece como 
// "El número no es válido.".

// expresion: /[-+]?\d+(\.\d+)?([eE][-+]?\d+)?/;
// [-+]?: Este fragmento indica que puede haber un signo positivo (+) o negativo (-) opcional al principio del número.
// \d+: Coincide con uno o más dígitos del número, lo que significa que debe haber al menos un dígito en el número.
// (\.\d+)?: Este fragmento coincide opcionalmente con una parte decimal del número. \. coincide con un punto decimal, y \d+ coincide con uno o más dígitos
// después del punto.
// ([eE][-+]?\d+)?: Este fragmento coincide opcionalmente con la parte de la notación científica del número. [eE] coincide con el carácter "e" o "E", 
// que indica la notación científica. [-+]? coincide opcionalmente con un signo positivo o negativo antes del exponente. \d+ coincide con uno o más 
// dígitos del exponente.