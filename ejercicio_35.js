// 35.  Un jefe de obra con el dinero que tiene compra cinco juegos de llaves hexagonales cada 
// uno por $11500. Una bomba en $1168000 y tres cajas de pernos cada uno por $87000. 
// Después de pagar le sobran $91000. ¿Cuánto dinero tenía? 

function calcularDinero() {
    const costoLlavesHexagonales = 5 * 11500; // Costo de cinco juegos de llaves hexagonales
    const costoBomba = 1168000; // Costo de la bomba
    const costoPernos = 3 * 87000; // Costo de tres cajas de pernos
    const dineroSobrante = 91000; // Dinero que le sobra después de la compra

    const totalGastado = costoLlavesHexagonales + costoBomba + costoPernos; // Calcular el total gastado en la compra

    const dinerotenia = totalGastado + dineroSobrante; // Calcular el dinero inicial sumando el total gastado al dinero sobrante después de la compra

    // Mostrar el resultado
    document.getElementById("resultado").textContent = "El jefe de obra tenía $" + dinerotenia + " antes de la compra.";
}

// EXPLICACION DEL EJERCICIO

// const costoLlavesHexagonales = 5 * 11500;: Esto calcula el costo de cinco juegos de llaves hexagonales multiplicando el precio de cada juego
// (11500) por la cantidad de juegos (5).

// const costoBomba = 1168000;: Aquí se define el costo de la bomba, que es de $1168000.

// const costoPernos = 3 * 87000;: Esto calcula el costo de tres cajas de pernos multiplicando el precio de cada caja (87000) 
// por la cantidad de cajas (3).

// const dineroSobrante = 91000;: Esta es la cantidad de dinero que le sobra al jefe de obra después de realizar las compras.

// const totalGastado = costoLlavesHexagonales + costoBomba + costoPernos;: Calcula el total gastado en la compra sumando el costo de los juegos de llaves,
// la bomba y las cajas de pernos.

// const dineroTenia = totalGastado + dineroSobrante;: Calcula el dinero inicial sumando el total gastado al dinero sobrante después de la compra.

// document.getElementById("resultado").textContent = "El jefe de obra tenía $" + dinerotenia + " antes de la compra."; muestra el resultado 
// en un elemento HTML con el id "resultado", indicando cuánto dinero tenía el jefe de obra antes de realizar las compras.




