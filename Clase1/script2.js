function anagramas(palabra1, palabra2) {
    if (palabra1 === palabra2 || palabra1.length != palabra2.length) {
        return console.log("No son anagramas");
    }
    else {
        // Convertir las palabras a minúsculas y eliminar espacios
        palabra1 = palabra1.toLowerCase().replace(/\s+/g, '');
        palabra2 = palabra2.toLowerCase().replace(/\s+/g, '');
        
        let palabra1Ordenada = palabra1.split('').sort().join('');
        let palabra2Ordenada = palabra2.split('').sort().join('');

        console.log(`Palabra 1 ordenada: ${palabra1Ordenada}`);
        console.log(`Palabra 2 ordenada: ${palabra2Ordenada}`);
        
        if (palabra1Ordenada === palabra2Ordenada) {
            return console.log("Son anagramas");
        } else {
            return console.log("No son anagramas");
        }
    }   
}