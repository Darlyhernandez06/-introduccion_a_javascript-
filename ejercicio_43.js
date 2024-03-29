// 43. Escriba una expresión regular que reconozca las cadenas de doble comillas. Debe permitir 
// la presencia de comillas y caracteres escapados. 

function buscarCadenas() {
    // Obtener el texto de entrada
    let texto2 = document.getElementById('texto2').value;
    
    // Expresión regular para encontrar cadenas de comillas dobles
    let regex = /"(?:\\.|[^\\"])*"/g;
    
    // Buscar coincidencias en el texto
    let coincidencias2 = texto2.match(regex);
    
    // Mostrar las coincidencias encontradas
    if ( coincidencias2 ) {
        document.getElementById('resultado').textContent = 'Cadenas encontradas:\n' +  coincidencias2 .join('\n');
    } else {
        document.getElementById('resultado').textContent = 'No se encontraron cadenas de comillas dobles.';
    }
}

// EXPLICACION DEL EJERCICIO

// Obtener el texto de entrada: Utiliza document.getElementById('texto2').value para obtener el valor del texto ingresado por el usuario en 
// un elemento textarea con el ID "texto2".

// Expresión regular para encontrar cadenas de comillas dobles: una expresión regular regex que busca cadenas de comillas dobles en el texto. 
// La expresión regular /\"(?:\\.|[^\\"])*\"/g busca las comillas dobles (") y permite que dentro de ellas haya caracteres escapados 
// (precedidos por \) o cualquier otro carácter que no sea una comilla doble, utilizando (?:\\.|[^\\"]). El modificador g indica que la 
// búsqueda debe ser global, es decir, que busque todas las coincidencias en todo el texto.

// Buscar coincidencias en el texto: Utiliza el método match() en el texto para encontrar todas las coincidencias de la expresión regular regex.
// El resultado se asigna a la variable coincidencias2.

// Mostrar las coincidencias encontradas: Verifica si se encontraron coincidencias (if (coincidencias2)). Si hay coincidencias,
//  concatena las cadenas encontradas en un mensaje que indica que se encontraron cadenas de comillas dobles y muestra este mensaje en 
// el elemento con el ID "resultado". Si no hay coincidencias, muestra un mensaje indicando que no se encontraron cadenas de comillas dobles.

// ": Coincide con una comilla doble, que marca el inicio y el final de la cadena buscada.
// (?: ... ): Grupo de no captura que permite agrupar partes de la expresión sin capturarlas.
// \\.: Coincide con cualquier carácter precedido por una barra invertida, incluyendo caracteres escapados como \".
// [^\\"]: Coincide con cualquier carácter que no sea una barra invertida ni una comilla doble.
// *: Indica que el grupo de coincidencia puede repetirse cero o más veces.
// /g: Modificador que indica que la búsqueda se realiza globalmente en todo el texto.