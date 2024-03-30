// 58. Se desea realizar una aplicación que ingrese el nombre del mes y mostrar que signo 
// zodiacal pertenece, para ello usar if_else anidados.

function AplicacionSigno () {
    // Obtener el nombre del mes ingresado por el usuario
    let mes = document.getElementById("mesInput").value.toLowerCase();

    // Determinar el signo zodiacal según el nombre del mes
    let signoZodiacal;

    if (mes === "enero") {
        signoZodiacal = "Capricornio";
    } else if (mes === "febrero") {
        signoZodiacal = "Acuario";
    } else if (mes === "marzo") {
        signoZodiacal = "Piscis";
    } else if (mes === "abril") {
        signoZodiacal = "Aries";
    } else if (mes === "mayo") {
        signoZodiacal = "Tauro";
    } else if (mes === "junio") {
        signoZodiacal = "Géminis";
    } else if (mes === "julio") {
        signoZodiacal = "Cáncer";
    } else if (mes === "agosto") {
        signoZodiacal = "Leo";
    } else if (mes === "septiembre") {
        signoZodiacal = "Virgo";
    } else if (mes === "octubre") {
        signoZodiacal = "Libra";
    } else if (mes === "noviembre") {
        signoZodiacal = "Escorpio";
    } else if (mes === "diciembre") {
        signoZodiacal = "Sagitario";
    } else {
        signoZodiacal = "Mes no válido";
    }

    // Mostrar el resultado en el elemento con id "resultado"
    document.getElementById("resultado").innerText = "El signo zodiacal para " + mes + " es: " + signoZodiacal;

}

// EXPLICACION DEL EJERCICIO

// Obtención del nombre del mes ingresado por el usuario:
// Utiliza document.getElementById("mesInput") para obtener el elemento HTML con el ID "mesInput", que es un campo de entrada donde el usuario ingresa 
// el nombre del mes.
// .value se utiliza para obtener el valor actual del campo de entrada.
// .toLowerCase() convierte el valor del campo de entrada a minúsculas para asegurar la consistencia en las comparaciones posteriores.

// Determinación del signo zodiacal según el nombre del mes:
// Utiliza una serie de declaraciones if-else para comparar el valor de mes con los nombres de los meses en minúsculas.
// Asigna el signo zodiacal correspondiente a la variable signoZodiacal según el nombre del mes ingresado por el usuario.
// Si el nombre del mes no coincide con ninguno de los casos anteriores, se asigna el mensaje "Mes no válido".

// Mostrar el resultado en la página:
// Utiliza document.getElementById("resultado") para obtener el elemento HTML con el ID "resultado", que es el lugar donde se mostrará el resultado.
// .innerText se utiliza para establecer el texto dentro del elemento HTML.
// El texto muestra el nombre del mes ingresado por el usuario y el signo zodiacal correspondiente determinado anteriormente.