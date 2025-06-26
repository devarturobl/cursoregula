//declarar una variable con var y con let diferencia el ambito de visibilidad

function testVar() {
    if (true) {
        var x = 10;
    }
    console.log(x); // ✅ Funciona, x existe fuera del bloque
}

function testLet() {
    if (true) {
        let y = 10;
    }
    console.log(y); // ❌ Error: y is not defined
}

//Redeclaración en el mismo ámbito
function redeclareVar() {
    var a = 1;
    var a = 2; // ✅ Válido, var permite redeclaración
    console.log(a); // 2
}

function redeclareLet() {
    let b = 1;
    //let b = 2; // ❌ Error: let no permite redeclaración
    console.log(b);
}

//Declarar un arreglo
var myArray = [1, 2, 3, 4, 5];
let myLetArray = ["Hola", 7, "Como", 9, "Estas"];

function mostrarmyletArray() {
    for (let i = 0; i < myLetArray.length; i++) {
    console.log(myLetArray[i]); // Imprime cada elemento del arreglo
    }
}

var metodo1 = [];

function agregaelemento(x){
metodo1.push(x);
return metodo1;
}

