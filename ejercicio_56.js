// 56. Un banco paga intereses a los depósitos dependiendo del saldo. Si el saldo es menor a 
// $100.000 se paga un interés anual de 3%, pero si su saldo es mayor a $100.000 se paga 
// un interés anual de 4%. Al final mostrar el saldo final y el interés pagado. 

function BancoIntereses () {
    // Obtener el saldo ingresado por el usuario
    let Saldo = parseFloat(document.getElementById("saldo").value);

    // Inicializar la variable para almacenar el interés
    let interes = 0;

    // Verificar el saldo y calcular el interés correspondiente
    if (Saldo <  100000){
        interes = Saldo * 0.03; // 3% de interés
    } else if (Saldo > 100000){
        interes = Saldo * 0.04; // 4% de interés
    } 

    // Calcular el saldo final sumando el interés al saldo original
     let saldoFinal = Saldo + interes;
  
    // Mostrar el resultado en la página
    let resultadoHTML = "<p>Saldo final: $" + saldoFinal.toFixed(2) + "</p>";
    resultadoHTML += "<p>Interés pagado: $" + interes.toFixed(2) + "</p>";
      
    document.getElementById("resultado").innerHTML = resultadoHTML;
}

// EXPLICACION DEL EJERCICIO

// Obtener el saldo ingresado por el usuario:
// let Saldo = parseFloat(document.getElementById("saldo").value);: Esta línea de código obtiene el valor ingresado por el usuario en el campo de entrada
// con el ID "saldo" y lo convierte en un número decimal utilizando parseFloat(). El valor resultante se almacena en la variable Saldo.

// Inicializar la variable para almacenar el interés:
// let interes = 0;: Se inicializa la variable interes con un valor de cero. Esta variable se utilizará para almacenar el interés calculado más adelante 
// en la función.

// Verificar el saldo y calcular el interés correspondiente:
// Se utiliza una estructura if...else if para determinar el interés que se aplicará en función del saldo ingresado por el usuario.
// Si el saldo es menor a $100,000, se calcula el interés del 3% y se asigna a la variable interes.
// Si el saldo es mayor a $100,000, se calcula el interés del 4% y se asigna a la variable interes.

// Calcular el saldo final:
// let saldoFinal = Saldo + interes;: Se calcula el saldo final sumando el interés al saldo original. El resultado se almacena en la variable saldoFinal.

// Mostrar el resultado en la página:
// Se crea una cadena de texto (resultadoHTML) que contiene la información del saldo final y el interés pagado.
// Se utiliza document.getElementById("resultado").innerHTML para actualizar el contenido del elemento HTML con el ID "resultado" con la cadena de texto 
// generada, de modo que los resultados se muestren en la página web.