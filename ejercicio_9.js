// 9. Escribir un programa para una empresa que tiene salas de juegos para todas las edades y 
// quiere calcular de forma automática el precio que debe cobrar a sus clientes por entrar. El 
// programa debe preguntar al usuario la edad del cliente y mostrar el precio de la entrada. Si 
// el cliente es menor de 4 años puede entrar gratis, si tiene entre 4 y 18 años debe pagar 5€ 
// y si es mayor de 18 años, 10€. 

function calcularPrecioEntrada() {
    let edad = parseInt(document.getElementById("edadInput").value);
    let precio;
    let resultadoElement = document.getElementById("resultado");

    if (edad < 4) {
        precio = 0; 
        resultadoElement.innerText = "Su precio es 0, puede ingresar gratis";
    }else if (edad >= 4 && edad <=18 ) {
        precio = 5;
        resultadoElement.innerText = "El precio de la entrada es: 5€";
    }else if (edad >=18 ) {
        precio = 10;
        resultadoElement.innerText = "El precio de la entrada es: 10€";
    }
}

// EXPLICACION DEL EJERCICIO 

// Obtención de la edad del cliente:
// let edad = parseInt(document.getElementById("edadInput").value);: Esta línea de código obtiene el valor de la edad ingresada por el usuario desde el 
// campo de entrada del formulario con el id "edadInput". El valor se convierte a un número entero utilizando parseInt() y se guarda en la variable edad.

// Declaración de variables:
// let precio;: Se declara una variable precio que se utilizará para almacenar el precio de la entrada correspondiente a la edad del cliente.
// let resultadoElement = document.getElementById("resultado");: Se declara una variable resultadoElement para hacer referencia al elemento HTML donde
// se mostrará el resultado del cálculo del precio de la entrada.

// Cálculo del precio de la entrada:
// Se utiliza una serie de declaraciones if-else if-else para determinar el precio de la entrada según la edad del cliente:
// Si la edad es menor que 4 años, el precio es 0€ y se muestra el mensaje "Su precio es 0, puede ingresar gratis" en el elemento resultadoElement.
// Si la edad está entre 4 y 18 años (inclusive), el precio es 5€ y se muestra el mensaje "El precio de la entrada es: 5€" en el elemento resultadoElement.
// Si la edad es mayor que 18 años, el precio es 10€ y se muestra el mensaje "El precio de la entrada es: 10€" en el elemento resultadoElement.