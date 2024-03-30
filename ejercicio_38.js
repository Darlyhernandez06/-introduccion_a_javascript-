// 38.  Tres estudiantes reunieron tapas de gaseosas para repartirlas y venderlas al final del año. 
// Martín toma 2/3 del total, Jairo un cuarto del total, y Lorena se queda con el resto. ¿Qué 
// parte le corresponde a Lorena? 

function calcularParteLorena() {
    // Representa el total de tapas de gaseosas para simplificar los cálculos
    const totaldeTapas = 1; 

    // Calcular la parte de Martín (2/3 del total)
    const parteMartin = (2/3) * totaldeTapas;

    // Calcular la parte de Jairo (1/4 del total)
    const parteJairo = (1/4) * totaldeTapas;

    // Calcular la parte que queda para Lorena (resto del total)
    const parteLorena = totaldeTapas - parteMartin - parteJairo;

    // Mostrar el resultado
    document.getElementById("resultado").textContent = "La parte que le corresponde a Lorena es: " + parteLorena.toFixed(2);
}

// EXPLICACION DEL EJERCICIO

// const totaldeTapas = 1;: Esta variable representa el total de tapas de gaseosas para simplificar los cálculos. Se establece en 1 ya que estamos 
// tratando con partes proporcionales.

// const parteMartin = (2/3) * totaldeTapas;: Aquí calculamos la parte de Martín, que es el 2/3 del total. Multiplicamos (2/3) por totaldeTapas 
// para obtener la parte proporcional.

// const parteJairo = (1/4) * totaldeTapas;: De manera similar, calculamos la parte de Jairo, que es 1/4 del total. Multiplicamos (1/4) por 
// totaldeTapas para obtener la parte proporcional.

// const parteLorena = totaldeTapas - parteMartin - parteJairo;: Luego, calculamos la parte que queda para Lorena, que es el resto del total
// después de que Martín y Jairo hayan tomado su parte. Restamos las partes de Martín y Jairo del totaldeTapas para obtener la parte de Lorena.

// document.getElementById("resultado").textContent se utiliza para mostrar el resultado en el elemento HTML con el ID "resultado".