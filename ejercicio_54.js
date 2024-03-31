// 54.  Restarle al primer número al segundo (siempre y cuando el primero sea mayor que él 
// segundo, en caso contrario indicar con un mensaje que la operación no es posible 
// realizarla. 

function RestarleNumero () {
    // Obtener los valores de los números ingresados por el usuario
    let Numero1 = parseFloat(document.getElementById("numero1").value);
    let Numero2 = parseFloat(document.getElementById("numero2").value);

    // Verificar si el primer número es mayor que el segundo
    if (Numero1 >  Numero2) {
        // Realizar la resta si es posible
        let resultado = Numero1 - Numero2;
        // Mostrar el resultado en la página
      document.getElementById("resultado").textContent = "La resta es: " + resultado;
    }else {
        // Mostrar un mensaje indicando que la operación no es posible
        document.getElementById("resultado").textContent = "La operación no es posible, el primer número no es mayor que el segundo.";
    }
}

// EXPLICACION DEL EJERCICIO 

// Obtención de los valores de los números ingresados:
// Utiliza document.getElementById("numero1").value y document.getElementById("numero2").value para obtener los valores ingresados por el usuario en los 
// campos de entrada con los IDs "numero1" y "numero2", respectivamente.
// Utiliza parseFloat() para convertir estos valores a números de punto flotante.

// Verificación si el primer número es mayor que el segundo:
// Se utiliza una estructura condicional if...else para verificar si el valor de Numero1 es mayor que el valor de Numero2.

// Realización de la resta si es posible:
// Si el primer número es mayor que el segundo, se realiza la resta de Numero1 - Numero2 y se almacena el resultado en la variable resultado.

// Mostrar el resultado en la página:
// Si la resta se realizó con éxito, se muestra el resultado en la página utilizando document.getElementById("resultado").textContent. Se muestra el 
// mensaje "La resta es: " seguido del valor de la resta.

// Mostrar un mensaje si la operación no es posible:
// Si el primer número no es mayor que el segundo, se muestra un mensaje indicando que la operación no es posible utilizando la misma técnica de 
// actualización del contenido del elemento HTML con document.getElementById("resultado").textContent.