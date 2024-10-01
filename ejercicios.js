// Operadores de comparación
// 1. Comprueba si 10 es mayor o igual que 9 e imprime el resultado en consola.
function compareTenAndNine() {
    // Tu código aquí...
    let numero1 = 10;
    let numero2 = 9;
    if (numero1 >= numero2) { 
         console.log("mayor");
    }    
}

// 2. Comprueba si 0 es igual a 0 e imprime el resultado en consola.
function compareZeroAndZero() {
    // Tu código aquí...
    let num1 = 0;
    let num2 = 0;

    num1 = num2,console.log("Es igual")
}


// 3. Comprueba si 7 es mayor que 8 y menor que 10, e imprime el resultado en consola.
function compareSeven() {
    // Tu código aquí...
    let numero = 7;

if (numero > 8 && numero < 10) {
    console.log(numero + " es mayor que 8 y menor que 10");
} else {
    console.log(numero + " no cumple la condición de ser mayor que 8 y menor que 10");
}
}

// Operadores lógicos
// 4. Verifica si puedes comprar un producto de 1500 con un descuento del 25% teniendo 1150€ e imprime si puedes o no.
function canBuyProduct() {
    // Tu código aquí...

let precio = 1500, desc = 0.25, dinero = 1150;
let precioFinal = precio * (1 - desc);

if (dinero >= precioFinal) {
    console.log("Puedes comprar el producto. El precio con descuento es " + precioFinal + "€.");
} else {
    console.log("No puedes comprar el producto :( . El precio con descuento es " + precioFinal + "€.");
}
}

// Variables
// 5. Crea una variable llamada `mensaje` y asígnale el valor "Hola JavaScript", luego imprime la variable en consola.
function createMessageVariable() {
    // Tu código aquí...
    let mensaje = "Hola JavaScript";
        console.log(mensaje);
}

// 6. Crea una variable llamada `resultado` y asígnale la suma de 2 y 3, luego imprime la variable en consola.
function createSumVariable() {
    // Tu código aquí...
    let resultado = 2 + 3;
        console.log(resultado);

}

// 7. Crea una constante llamada `IS_DISABLED` y asígnale el valor booleano `true`, luego imprime la constante en consola.
function createDisabledConstant() {
    // Tu código aquí...
    const IS_DISABLED = true;
         console.log(IS_DISABLED);
}

// Null y Undefined
// 8. Crea una variable con `let` llamada `capacidad` y asígnale un valor `null`, luego imprime la variable en consola.
function createNullVariable() {
    // Tu código aquí...
    let capacidad = null;
        console.log(capacidad);
}

// 9. Crea una variable con `let` llamada `dinero` y asígnale un valor `undefined`, luego imprime la variable en consola.
function createUndefinedVariable() {
    // Tu código aquí...
    let dinero = undefined;
        console.log(dinero);

}

// typeof
// 10. Escribe un código para ver el tipo de una variable llamada `userName` e imprime el tipo de dato en consola.
function checkUserNameType() {
    // Tu código aquí...
    let userName = "Alan Escurra"; 

        console.log(typeof userName);

}

// 11. Asegúrate de que `dogId` es una cadena de texto y luego imprime el tipo de dato en consola.
function checkDogIdIsString() {
    // Tu código aquí...
    let dogId = String(12345); 

        console.log(typeof dogId);
}

// console.log()
// 12. Imprime un mensaje en la consola utilizando `console.log()`.
function logMessage() {
    // Tu código aquí...
    console.log("Hola Mundo, Me llamo Alan");

}

// 13. Utiliza `console.log()` para imprimir el valor de la variable `edad` que tiene el valor 30.
function logAge() {
    // Tu código aquí...
    let edad = 30;
         console.log(edad);
}

// 14. Muestra el mensaje 'La versión de JavaScript es' seguido de la variable `version` con el valor 2024 usando `console.log()`.
function logVersion() {
    // Tu código aquí...
    let version = 2024;
        console.log('La versión de JavaScript es ' + version);
}

// Exportar todas las funciones para poder usarlas en las pruebas
module.exports = {
    compareTenAndNine,
    compareZeroAndZero,
    compareSeven,
    canBuyProduct,
    createMessageVariable,
    createSumVariable,
    createDisabledConstant,
    createNullVariable,
    createUndefinedVariable,
    checkUserNameType,
    checkDogIdIsString,
    logMessage,
    logAge,
    logVersion,
};