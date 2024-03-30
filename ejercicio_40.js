// 40. Una empresa que contrata personal requiere determinar la edad de las personas que 
// solicitan trabajo, pero cuando se les realiza la entrevista sólo se les pregunta el año en que 
// nacieron. Realice el código que representen el algoritmo para solucionar este problema. 

function calcularEdad() {
    // Solicitar al usuario que ingrese el año de nacimiento
    const añoDeNacimiento = parseInt(prompt("Ingrese el año de nacimiento:"));

    // Obtener el año actual
    const añoActual = new Date().getFullYear();

    // Calcular la edad restando el año de nacimiento al año actual
    const edad = añoActual - añoDeNacimiento; 

    // Mostrar el resultado en el elemento HTML correspondiente
    document.getElementById("resultado").textContent = "La edad de la persona es: " + edad + " años.";
}


// EXPLICACION DEL EJERCICIO

// const AñodeNacimiento = parseInt(prompt("Ingrese el año de nacimiento:"));: Esta línea solicita al usuario que ingrese el año de nacimiento 
// utilizando la función prompt(). El valor ingresado se convierte a un número entero utilizando parseInt() y se almacena en la variable AñodeNacimiento.

// const AñoActual = new Date().getFullYear();: Esta línea obtiene el año actual utilizando el objeto Date() y su método getFullYear(). 
// El año actual se almacena en la variable AñoActual.

// const edad = AñoActual - AñodeNacimiento;: Aquí se calcula la edad restando el año de nacimiento (AñodeNacimiento) del año actual (AñoActual).
// El resultado se almacena en la variable edad.

// document.getElementById("resultado").textContent = "La edad de la persona es: " + edad + " años.";: se actualiza el contenido del elemento HTML 
// con el ID "resultado" para mostrar el resultado del cálculo de la edad. Se concatena el mensaje con la edad calculada y se muestra en el navegador.

// Date() es un objeto incorporado que representa una fecha y hora específicas. Cuando se crea un nuevo objeto Date utilizando new Date(), 
// esta obteniendo un objeto que representa la fecha y hora actuales en el momento en que se ejecuta esa línea de código.

// La función getFullYear() es un método del objeto Date que se utiliza para obtener el año de la fecha representada por ese objeto. 
// Este método devuelve el año como un número de cuatro dígitos.

// cuando escribimos new Date().getFullYear(), estamos creando un nuevo objeto Date, que representa la fecha y hora actuales, y luego
// obtenemos el año de esa fecha utilizando el método getFullYear().