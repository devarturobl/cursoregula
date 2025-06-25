function primo(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}


function nprimo(){
    var ban = 1;
    console.log("1 No Es primo");
    for(x=2; x<=100; x++){
        for(y=2; y<x; y++){
            if(x % y === 0){
                ban = 0;
                break;
            }
            }
        if(ban === 0){
            console.log(x + " No Es primo");
            ban = 1; // Reset the flag for the next number
        }else{
            console.log(x + " Es primo");
        }
    }
}

function rprimo(min, max) {
    if (min < 1) {
        console.log("El valor mínimo debe ser mayor o igual a 1");
        return;
    }

    if (min === max) {
        console.log("El valor mínimo y máximo son iguales, no hay rango para evaluar");
        return;
    }

    for (let x = min; x <= max; x++) {
        if (x === 1) {
            console.log("1 No es primo");
            continue;
        }

        let esPrimo = true; // ← bandera local

        for (let y = 2; y <= Math.sqrt(x); y++) {
            if (x % y === 0) {
                esPrimo = false;
                break;
            }
        }

        if (esPrimo) {
            console.log(x + " Es primo");
        } else {
            console.log(x + " No es primo");
        }
    }
}

function eprimo(num){
    if(num < 1) {
        console.log("El número debe ser mayor o igual a 1");
        return;
    }
    if (num === 1) {
        console.log("1 No es primo");
        return;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            console.log(num + " No es primo");
            return;
        }
    }
    console.log(num + " Es primo");
}