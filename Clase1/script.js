/*
 * Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */

//un Comentario

console.log("Salida Manual");

console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.log("5");
console.log("6");
console.log("7");
console.log("8");
console.log("9");
console.log("10");
console.log("11");
console.log("12");
console.log("13");  
console.log("14");
console.log("15");


console.log("Salida Automatica 1");
for (let i = 1; i <= 100; i++) {
    if(i % 3 === 0) {
        if(i % 5 === 0) {
            console.log("fizzbuzz");
        }
        else {
            console.log("fizz");
        }
    }else{
        if(i % 5 === 0) {
            console.log("buzz");
        }else{
                console.log(i);
            }
        }
    }

    
console.log("Salida Automatica 2");
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("fizzbuzz");
    } else if (i % 3 === 0) {
        console.log("fizz");
    } else if (i % 5 === 0) {
        console.log("buzz");
    } else {
        console.log(i);
    }
}

