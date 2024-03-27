// 21. Escribir un programa que calcule el volumen de un elipsoide.

// Para calcular el volumen de un elipsoide, podemos usar la fórmula: V= 4/3 πabc 
// donde a, b, y c son las longitudes de los semiejes del elipsoide.

function calcularVolumenElipsoide() {
     // Obtener los valores de los semiejes a, b y c del elipsoide
    let A = parseFloat(document.getElementById("semiejeA").value);
    let B = parseFloat(document.getElementById("semiejeB").value);
    let C = parseFloat(document.getElementById("semiejeC").value);

    // Calcular el volumen del elipsoide
    let volumen = (4 / 3) * Math.PI * A * B * C;

    // Mostrar el resultado en el elemento HTML con id "resultado"
    document.getElementById("resultado").innerText = "El volumen del elipsoide es: " + volumen.toFixed(2);
}

// EXPLICACION DEL EJERCICIO

// Función calcularVolumenElipsoide(): La función se llama cuando se hace clic en un botón en la interfaz de usuario. El botón generalmente tendría un atributo onclick que llama a esta función.

// La función obtiene los valores de los semiejes A,B y C del elipsoide desde campos de entrada en el HTML. Utiliza document.getElementById() para obtener los elementos HTML 
// con los IDs "semiejeA", "semiejeB" y "semiejeC", y luego obtiene sus valores con la propiedad value.
 
// Utiliza la fórmula V= 4/3 πabc para calcular el volumen del elipsoide, donde A,B y C on los semiejes proporcionados por el usuario.
// Math.PI representa el valor de pi (π) proporcionado por JavaScript.

// Después de calcular el volumen, la función utiliza document.getElementById("resultado").innerText para mostrar el resultado en un elemento HTML 
// con el ID "resultado". toFixed(2) se utiliza para redondear el resultado a dos decimales antes de mostrarlo en el elemento de resultado.
