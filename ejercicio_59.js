// 59. En un colegio, se necesita hacer una selección de basquetbol que represente al colegio, 
// para lo cual es requisito indispensable que los postulantes sean menores o iguales a 19 
// años, con una estatura de más de 175 cm y el peso tiene que estar entre los 80 kg y 75. 

function SelecciondeBasquetbol () {
    let Nombre = document.getElementById("nombre").value;
    let Edad = parseInt(document.getElementById("edad").value);
    let Estatura = parseInt(document.getElementById("estatura").value);
    let Peso = parseInt(document.getElementById("peso").value);
    let resultado = document.getElementById("resultado");

    if (Edad <= 19 && Estatura > 175 && Peso >= 75 && Peso <= 80) {
        resultado.innerHTML = "<p>" + Nombre + " ha sido seleccionado para el equipo de baloncesto.</p>";
    } else {
        resultado.innerHTML = "<p>" + Nombre + " no cumples con los requisitos para ser seleccionado en el equipo de baloncesto.</p>";
    }
}

// EXPLICACION DEL EJERCICIO

// Obtención de datos:
// Se obtienen los valores ingresados por el usuario desde los elementos de entrada en el documento HTML. Estos valores incluyen el nombre (Nombre), 
// la edad (Edad), la estatura (Estatura), y el peso (Peso). Estos datos se obtienen utilizando el método getElementById y se almacenan en variables 
// correspondientes.
// Se obtiene también el elemento del documento HTML donde se mostrará el resultado, este elemento se almacena en la variable resultado.

// Evaluación de los requisitos:
// Se utiliza una estructura condicional if-else para verificar si el estudiante cumple con los requisitos para ser seleccionado en el equipo de baloncesto.
// Si el estudiante cumple con todos los requisitos (edad menor o igual a 19 años, estatura mayor a 175 cm, y peso entre 75 kg y 80 kg), se actualiza 
// el contenido del elemento resultado con un mensaje indicando que el estudiante ha sido seleccionado para el equipo de baloncesto.
// Si el estudiante no cumple con alguno de los requisitos, se actualiza el contenido del elemento resultado con un mensaje indicando que el estudiante 
// no cumple con los requisitos para ser seleccionado en el equipo de baloncesto.

// Actualización del resultado:
// La actualización del contenido del elemento resultado se realiza modificando su propiedad innerHTML.
// Se agregan elementos <p> para formatear el mensaje y mostrarlo correctamente en la página.