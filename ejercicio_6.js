// 6. los alumnos de un curso se han dividido en dos grupos A y B de acuerdo con el sexo y el 
// nombre, el grupo A está formado por las mujeres con un nombre anterior a la M y los 
// hombres con un nombre posterior a la N y el grupo B por el resto, escribir un programa que 
// pregunte al usuario su nombre y sexo y muestre por pantalla el grupo al que corresponde. 

function determinarGrupo() {
    let nombre = document.getElementById("nombreInput").value;
    let sexo = document.getElementById("sexoInput").value;
    let resultadoElement = document.getElementById("resultado");

    if ((sexo === "femenino" && nombre < 'm' ) ||  (sexo === "masculino" && nombre > 'n')) {
        grupo = "Grupo A";
    } else {
        grupo = "Grupo B";
    }
    document.getElementById("resultado").innerText = "usted pertenece al" + grupo + ".";
}

// EXPLICACION DEL EJERCICIO 

// Obtención de los valores del formulario:
// let nombre = document.getElementById("nombreInput").value;: Esta línea de código obtiene el valor del campo de entrada de nombre del formulario y
// lo almacena en la variable nombre.
// let sexo = document.getElementById("sexoInput").value;: en esta línea obtiene el valor del campo de selección de sexo del formulario y lo guarda 
// en la variable sexo.

// Selección del elemento de resultado:
// let resultadoElement = document.getElementById("resultado");: Esta línea selecciona el elemento HTML donde se mostrará el resultado del grupo al
// que pertenece el usuario.

// Condición if:
// En esta línea, se evalúa una condición utilizando un operador lógico || (OR) para comprobar dos casos:
// Caso 1: Si el sexo ingresado es "femenino" (sexo === "femenino") y el nombre es alfabéticamente anterior a "M" (nombre < 'm'). 
// Esto significa que las mujeres cuyo nombre empieza antes de la letra "M" pertenecerán al Grupo A.
// Caso 2: Si el sexo ingresado es "masculino" (sexo === "masculino") y el nombre es alfabéticamente posterior a "N" (nombre > 'n'). 
// Esto significa que los hombres cuyo nombre empieza después de la letra "N" pertenecerán también al Grupo A.
// Si alguna de estas condiciones se cumple, se ejecuta el bloque de código dentro del if, y la variable grupo se establece como "Grupo A".

// Bloque else:
// Si ninguna de las condiciones del if se cumple, se ejecuta el bloque de código dentro del else, y la variable grupo se establece como "Grupo B".

// Actualización del elemento de resultado:
// Después de determinar a qué grupo pertenece el usuario, se actualiza el contenido del elemento con id "resultado" utilizando la propiedad innerText. 
// Se concatena el valor de la variable grupo con un mensaje y se muestra en la página web.