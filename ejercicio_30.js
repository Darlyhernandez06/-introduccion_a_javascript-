// 30. Comprobar la fortaleza de una contraseña teniendo en cuenta que debe tener entre 8 y 12 
// caracteres, y al menos una mayúscula, una minúscula, y un dígito. 

function verificarFortaleza(contrasena) {
    // Expresión regular para verificar si la contraseña cumple con los requisitos
    let expresion = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,12}$/; 
    
    // Verificar si la contraseña cumple con la expresión regular
    if (expresion.test(contrasena)) {
        return "La contraseña es segura.";
    } else {
        return "La contraseña no cumple con los requisitos.";
    }
}

function validarContraseña() {
    let contraseña = document.getElementById("contrasena").value;
    let mensaje = verificarFortaleza(contraseña);
    document.getElementById("mensaje").innerText = mensaje;
}

// EXPLICACION DEL EJERCICIO

// verificarFortaleza(Contraseña): Esta función toma una contraseña como entrada y utiliza una expresión regular para verificar si cumple con los 
// requisitos especificados:
// Debe contener al menos una letra minúscula ((?=.*[a-z])).
// Debe contener al menos una letra mayúscula ((?=.*[A-Z])).
// Debe contener al menos un dígito ((?=.*\d)).
// Debe tener entre 8 y 12 caracteres de longitud (.{8,12}).
// Si la contraseña cumple con todos estos requisitos, la función devuelve "La contraseña es segura.". De lo contrario, devuelve 
// "La contraseña no cumple con los requisitos.".

// validarContraseña(): Esta función se activa cuando se hace clic en el botón "Verificar" en el formulario HTML. Obtiene el valor del 
// campo de entrada de contraseña, llama a verificarFortaleza con este valor y muestra el mensaje de resultado en un elemento HTML con el id "mensaje".