// 41.Ingrese una frase que lo identifique como programador de Software y luego mostrar esta frase invertida. 

function invertirFrase() {
    // Obtener la frase ingresada
    let Frase = document.getElementById("fraseInput").value;

    // Invertir la frase
    let FraseInvertida = Frase.split('').reverse().join('');

    // Mostrar la frase invertida
    document.getElementById("resultado").textContent = "Frase invertida:" + FraseInvertida;
}

// EXPLICACION DEL EJERCICIO

// function invertirFrase() {: Esto define una función llamada invertirFrase() que se ejecutará cuando se active algún evento, como hacer clic en un botón.

// let Frase = document.getElementById("fraseInput").value;: Esta línea obtiene el valor del elemento de entrada HTML con el ID "fraseInput", 
// que es donde se espera que el usuario ingrese la frase. este valor se almacena en la variable Frase.

// let FraseInvertida = Frase.split('').reverse().join('');: Aquí invertimos la frase.

// Frase.split('') divide la frase en un array de caracteres individuales.
// reverse() invierte el orden de los elementos en el array.
// join('') une los elementos del array en una cadena nuevamente.
// El resultado de estos métodos es la frase invertida, que almacenamos en la variable FraseInvertida.

// document.getElementById("resultado").textContent = "Frase invertida: " + FraseInvertida;: Finalmente, esta línea actualiza el
// contenido del elemento HTML con el ID "resultado" para mostrar la frase invertida. Concatenamos el texto "Frase invertida: " 
// con la frase invertida y lo asignamos al contenido de textContent del elemento. Esto se mostrará en la interfaz de usuario.

// Frase.split(''): Este método split('') divide la cadena Frase en un array de caracteres individuales. El argumento vacío '' 
// indica que se quiere dividir la cadena en cada carácter individual. Por ejemplo, si Frase es "Hola", esto producirá el array ['H', 'o', 'l', 'a'].

// .reverse(): Este método invierte el orden de los elementos en el array. Por lo tanto, si tenemos el array ['H', 'o', 'l', 'a'], 
// después de aplicar reverse(), obtenemos ['a', 'l', 'o', 'H'].

// .join(''): Finalmente, el método join('') une los elementos del array en una cadena nuevamente. El argumento vacío '' indica que queremos 
// unir los elementos sin ningún carácter separador entre ellos.