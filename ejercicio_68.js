// 68. Escribir un programa que muestre por consola la tabla de multiplicar del 1 al 10. 

// Bucle externo para recorrer los números del 1 al 10
for (let numero = 1; numero <= 10; numero++){
    // Bucle interno para recorrer los números del 1 al 10 y calcular los productos
    for (let producto = 1; producto <= 10; producto++){
        // Calcular el producto de numero y producto
        let productos = numero * producto;
        // Mostrar el producto en la consola
        console.log(`${numero} * ${producto} = ${productos}`);
    }
    // Agregar una línea en blanco después de cada tabla de multiplicar
    console.log("");
}

// EXPLICACION DEL EJERCICIO

// Bucle Externo (for):
// Este bucle for se encarga de iterar a través de los números del 1 al 10.
// let numero = 1: Inicializa la variable numero en 1.
// numero <= 10: Establece la condición para que el bucle se ejecute mientras numero sea menor o igual a 10.
// numero++: Incrementa el valor de numero en cada iteración.

// Bucle Interno (for):
// Este bucle for está anidado dentro del bucle externo y se utiliza para generar los productos de multiplicar numero por todos los números del 1 al 10.
// let producto = 1: Inicializa la variable producto en 1.
// producto <= 10: Establece la condición para que el bucle se ejecute mientras producto sea menor o igual a 10.
// producto++: Incrementa el valor de producto en cada iteración.

// Cálculo del Producto:
// Dentro del bucle interno, se calcula el producto de numero por producto y se almacena en la variable productos.

// Impresión en la Consola:
// Dentro del bucle interno, se utiliza console.log() para imprimir el producto calculado en la consola.

// Línea en Blanco:
// Después de imprimir los productos para todos los números del 1 al 10, se imprime una línea en blanco en la consola para separar cada tabla de 
// multiplicar.

