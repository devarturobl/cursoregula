function anagramas(palabra1, palabra2) {
    if (palabra1 === palabra2 || palabra1.length != palabra2.length) {
        return console.log("No son anagramas");
    }
    else {
        return console.log("Son anagramas");
    }   
}