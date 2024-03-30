// 33. Calcular la edad de una madre en el momento que dio a luz a alguno de sus hijos. 

function calcularEdadMadre() {
    // Obtener la fecha de nacimiento de la madre y del hijo
    const fechaMadre = prompt("Ingrese la fecha de nacimiento de la madre (formato YYYY-MM-DD):");
    const fechaHijo = prompt("Ingrese la fecha de nacimiento del hijo (formato YYYY-MM-DD):");

    // Verificar si se han ingresado ambas fechas
    if (!fechaMadre || !fechaHijo) {
        alert("Por favor, ingrese ambas fechas.");
        return;
    }

    // Convertir las fechas de texto a objetos Date
    const fechaMadreObj = new Date(fechaMadre);
    const fechaHijoObj = new Date(fechaHijo);

    // Calcular la diferencia en milisegundos entre las fechas
    const diferencia = fechaHijoObj.getTime() - fechaMadreObj.getTime();

    // Convertir la diferencia de milisegundos a años
    const edadMadre = Math.floor(diferencia / (1000 * 60 * 60 * 24 * 365.25));

    // Mostrar el resultado
    document.getElementById("resultado").textContent = "La madre tenía " + edadMadre + " años cuando dio a luz a su hijo.";
}

// EXPLICACION DEL EJERCICIO

// Solicitud de fechas de nacimiento: La función utiliza la función prompt() para solicitar al usuario que ingrese la fecha de nacimiento de la madre y}
// del hijo en formato YYYY-MM-DD (año-mes-día).

// La expresión !fechaMadre || !fechaHijo es una expresión lógica en JavaScript que evalúa si fechaMadre o fechaHijo son falsos, es decir, 
// si son null, undefined, o una cadena vacía ('')
// Verificación de las fechas: Se verifica si el usuario ha ingresado ambas fechas. Si falta alguna de las fechas (es decir, si fechaMadre o fechaHijo
// es null o una cadena vacía), se muestra un mensaje de alerta indicando al usuario que ingrese ambas fechas y la función se detiene utilizando return;.

// Conversión a objetos Date: Las fechas ingresadas por el usuario en forma de texto se convierten en objetos Date utilizando el constructor new Date().

// Cálculo de la diferencia de tiempo: Se calcula la diferencia en milisegundos entre la fecha de nacimiento del hijo y la fecha de nacimiento de la 
// madre utilizando el método getTime() de los objetos Date.

// Conversión a años: La diferencia de tiempo se convierte a años dividiendo por la cantidad de milisegundos en un año
// (aproximadamente 31557600000 milisegundos). Se utiliza Math.floor() para redondear el resultado al número entero más cercano.

// Mostrar el resultado: La edad de la madre en el momento del nacimiento del hijo se muestra en la página HTML usando document.getElementById("resultado").textContent.

// En JavaScript, los objetos Date se utilizan para trabajar con fechas y horas. Al crear un objeto Date, puede representar una fecha y hora específicas, 
// o simplemente una fecha sin una hora específica. 

// Creación de un objeto Date: Puedes crear un objeto Date utilizando el constructor new Date(). Puedes pasar varios parámetros, como el año, el mes, 
// el día, la hora, el minuto, el segundo, etc.

// Métodos útiles: Los objetos Date tienen métodos útiles para obtener y establecer partes específicas de la fecha y la hora, como getFullYear(), 
// getMonth(), getDate(), getHours(), getMinutes(), getSeconds(), etc.

// getTime(): El método getTime() devuelve el número de milisegundos desde el 1 de enero de 1970 (conocido como el "epoch" en informática). 
// Esto se utiliza a menudo para calcular diferencias de tiempo entre dos fechas.

// Math.floor() es una función integrada en JavaScript que devuelve el número entero más grande menor o igual a un número dado.





