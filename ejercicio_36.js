// 36.  En el programa de cocina de “Doña Anita” han dado la receta para la preparación de 
// bizcocho especial de chocolate. Por cada 100 gramos de harina hay que añadir 10 gramos 
// de cacao y un puñado de nueces. Si quiero prepararlos con 20 gramos de cacao. ¿La 
// cantidad de gramos de harina para hacer el bizcocho es?

function calcularBizcocho()  {
    // Cantidad de harina en gramos que se utiliza como referencia en la receta
    const gramosharina = 100; 

    // Gramos de cacao por cada 100 gramos de harina
    const cacaoPor100Harina = 10; 

    //Calcular la cantidad de harina usando regla de tres
    const preparación = (20 * gramosharina ) / cacaoPor100Harina; 

    // Mostrar el resultado
    document.getElementById("resultado").textContent = "La cantidad de gramos de harina necesaria para hacer el bizcocho es:" + preparación + "gramos.";
}

// EXPLICACION DEL EJERCICIO

// const gramosharina = 100;: Esta constante representa la cantidad de harina en gramos que se utiliza como referencia en la receta. 
// En este caso, se establece en 100 gramos, lo que significa que la receta original utiliza 100 gramos de harina.

// const cacaoPor100Harina = 10;: Esta constante representa la cantidad de cacao en gramos que se añade por cada 100 gramos de harina en la receta.
// En este caso, se establece en 10 gramos, lo que significa que por cada 100 gramos de harina se añaden 10 gramos de cacao.

// const preparación = (20 * gramosharina ) / cacaoPor100Harina;: En esta línea se calcula la cantidad de harina necesaria para hacer el bizcocho 
// cuando se utiliza 20 gramos de cacao. una regla de tres simple, se multiplica la cantidad de cacao deseado (20 gramos) 
// por la cantidad de harina de referencia (100 gramos) y se divide por la cantidad de cacao por cada 100 gramos de harina (10 gramos). 
// Esto da como resultado la cantidad de harina necesaria.

// document.getElementById("resultado").textContent = "La cantidad de gramos de harina necesaria para hacer el bizcocho es:" + preparación + "gramos.";: 
// se actualiza el contenido del elemento HTML con el id "resultado" para mostrar el resultado del cálculo. Se muestra un mensaje que indica 
// la cantidad de gramos de harina necesaria para hacer el bizcocho.