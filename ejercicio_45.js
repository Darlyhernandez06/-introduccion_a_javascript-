// 45. Determinar si un número es positivo y menor que 100. 

function verificarNumero() {
  // Obtener el valor del número ingresado
  let numero = parseFloat(document.getElementById("numeroInput").value);
  
  // Verificar si el número es positivo y menor que 100
  if (numero > 0 && numero < 100) {
    document.getElementById("resultado").textContent = "El número es positivo y menor que 100.";
  } else {
    document.getElementById("resultado").textContent = "El número no cumple ambas condiciones.";
  }
}
  
// EXPLICACION DEL EJERCICIO

// La función comienza obteniendo el valor ingresado por el usuario en un campo de entrada HTML con el id "numeroInput". Esto se hace 
// usando document.getElementById("numeroInput").value. El valor obtenido se convierte a un número flotante usando parseFloat() y se almacena en 
// la variable numero.

// se verifica si el número ingresado es positivo y menor que 100 utilizando una estructura condicional if. La condición numero > 0 && numero < 100 
// verifica si el número es mayor que cero y menor que 100 al mismo tiempo.

// Si la condición se cumple, es decir, si el número es positivo y menor que 100, se actualiza el contenido del elemento HTML con id "resultado" 
// para indicar que el número es positivo y menor que 100.

// Si la condición no se cumple, es decir, si el número no es positivo o es igual o mayor que 100, se actualiza el contenido del elemento HTML 
// con id "resultado" para indicar que el número no cumple ambas condiciones.