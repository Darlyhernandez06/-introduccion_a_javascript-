// 37. Un camión transporta 25 cajas de repuestos de carros. Si cada caja pesa 748 Kg ¿cuántos Kg transporta? 

function calcularPesoTransporte() {
    // Número de cajas de repuestos
    const Cajas = 25; 

    // Peso de cada caja en Kg
    const pesodeCaja = 748; 

    // Calcular el peso total multiplicando el número de cajas por el peso de cada caja
    const pesoTotal = Cajas * pesodeCaja;

    // Mostrar el resultado
    document.getElementById("resultado").textContent = "El camión transporta un total de " + pesoTotal + " Kg de repuestos.";
}

// EXPLICACION DEL EJERCICIO

// const Cajas = 25;: Se declara una constante Cajas que representa el número de cajas de repuestos que el camión está transportando. 
// En este caso, se establece en 25.

// const pesodeCaja = 748;: Se declara una constante pesodeCaja que representa el peso de cada caja de repuestos en kilogramos. 
// En este caso, se establece en 748 Kg.

// const pesoTotal = Cajas * pesodeCaja;: Se calcula el peso total de los repuestos multiplicando el número de cajas (Cajas) por el peso de cada caja
// (pesodeCaja). Esto da como resultado el peso total en kilogramos.

// document.getElementById("resultado").textContent = "El camión transporta un total de " + pesoTotal + " Kg de repuestos.";: 
// Se actualiza el contenido del elemento HTML con el id "resultado" para mostrar el resultado del cálculo. Se muestra un mensaje indicando 
// el peso total de los repuestos transportados por el camión en kilogramos.