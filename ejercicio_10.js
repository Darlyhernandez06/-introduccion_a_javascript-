// 10. La pizzería Bella Napoli ofrece pizzas vegetarianas y no vegetarianas a sus clientes. Los 
// ingredientes para cada tipo de pizza aparecen a continuación. 
// a. Ingredientes vegetarianos: Pimiento y tofu. 
// b. Ingredientes no vegetarianos: Pepperoni, Jamón y Salmón.  
// Escribir un programa que pregunte al usuario si quiere una pizza vegetariana o no, y en 
// función de su respuesta le muestre un menú con los ingredientes disponibles para que 
// elija. Solo se puede elegir un ingrediente además de la mozzarella y el tomate que están 
// en todas las pizzas. Al final se debe mostrar por pantalla si la pizza elegida es vegetariana 
// o no y todos los ingredientes que lleva. 

// Esta función se encarga de mostrar el tipo de pizza y los ingredientes seleccionados
function mostrarIngredientes() {
    // Obtener el tipo de pizza seleccionado y los elementos del DOM necesarios
    let tipoPizza = document.getElementById("tipoPizzaSelect").value;
    let ingredientesSelect = document.getElementById("ingredientesPizzaSelect");
    let resultadoElement = document.getElementById("resultado");

    // Limpiar el contenido del resultado
    resultadoElement.innerHTML = "";

    // Obtener los ingredientes seleccionados del select
    let ingredientesSeleccionados = [];
    for (let i = 0; i < ingredientesSelect.options.length; i++) {
        let opcion = ingredientesSelect.options[i];
        if (opcion.selected) {
            ingredientesSeleccionados.push(opcion.text);
        }
    }

    // Mostrar el tipo de pizza y los ingredientes base
    resultadoElement.innerHTML = tipoPizza.charAt(0).toUpperCase() + tipoPizza.slice(1) + " <br>Ingredientes: Mozzarella, Tomate";

    // Mostrar los ingredientes seleccionados (si hay alguno)
    if (ingredientesSeleccionados.length > 0) {
        resultadoElement.innerHTML += ", " + ingredientesSeleccionados.join(", ");
    }

    // Mostrar el contenedor de ingredientes
    document.getElementById("ingredientesContainer").style.display = "block";
}

// Esta función se encarga de agregar las opciones de ingredientes dependiendo del tipo de pizza seleccionado
document.getElementById("tipoPizzaSelect").addEventListener("change", function() {
    let tipoPizza = this.value;
    let ingredientesSelect = document.getElementById("ingredientesPizzaSelect");
    ingredientesSelect.innerHTML = "";

    // Agregar las opciones de ingredientes basados en el tipo de pizza seleccionado
    if (tipoPizza === "vegetariana") {
        agregarOpcion(ingredientesSelect, "pimiento", "Pimiento");
        agregarOpcion(ingredientesSelect, "tofu", "Tofu");
    } else if (tipoPizza === "no_vegetariana") {
        agregarOpcion(ingredientesSelect, "pepperoni", "Pepperoni");
        agregarOpcion(ingredientesSelect, "jamon", "Jamón");
        agregarOpcion(ingredientesSelect, "salmon", "Salmón");
    }
});

// Esta función agrega una opción al elemento select
function agregarOpcion(selectElement, value, text) {
    var option = document.createElement("option");
    option.value = value;
    option.text = text;
    selectElement.appendChild(option);
}



// EXPLICACION DEL EJERCICIO

// Función mostrarIngredientes():Esta función se encarga de mostrar los ingredientes de la pizza seleccionada por el usuario.
// Comienza obteniendo el valor del tipo de pizza seleccionada (tipoPizza) y el elemento select que contiene los ingredientes (ingredientesSelect),
// así como el elemento donde se mostrará el resultado (resultadoElement).
// Limpia el contenido del elemento resultadoElement, para asegurarse de que esté vacío antes de agregar los nuevos datos.
// Itera sobre las opciones del elemento ingredientesSelect para determinar cuáles están seleccionadas por el usuario. 
// Para cada opción seleccionada, agrega el texto de la opción a un array llamado ingredientesSeleccionados.
// Luego, construye un mensaje que incluye el tipo de pizza seleccionada y los ingredientes seleccionados, si los hay. 
// Este mensaje se asigna al contenido del elemento resultadoElement.
// Despues muestra el contenedor de ingredientes (ingredientesContainer), que podría estar oculto inicialmente.

// Evento change del tipo de pizza:
// Este evento se activa cuando el usuario cambia la selección del tipo de pizza.
// El código asociado a este evento utiliza un listener que escucha cambios en el elemento select tipoPizzaSelect. Cuando se produce un cambio, 
// se ejecuta una función anónima.
// Dentro de esta función, se obtiene el valor seleccionado (tipoPizza) y se actualiza el menú desplegable de ingredientes (ingredientesSelect).
// Dependiendo del tipo de pizza seleccionada, se agregan las opciones de ingredientes correspondientes al menú desplegable.

// Función agregarOpcion():
// Esta función se utiliza para agregar una nueva opción al menú desplegable de ingredientes.
// Recibe tres parámetros: el elemento select al que se agregará la opción (selectElement), el valor de la opción (value) y el texto que se 
// mostrará al usuario (text). Dentro de la función, se crea un nuevo elemento option y se configuran su valor y texto según los parámetros proporcionados.
// Por ultimo se añade el nuevo elemento option al elemento select especificado (selectElement).