/* Crea tu función aquí */
function analizaPalabras(palabras) {
    for (const indice in palabras) {
        const deletreo = palabras[indice].split("").join("-");
        const tamanyo = palabras[indice].length;
        const esPar = (palabras[indice].length % 2 === 0) ? true : false;
        const esMayuscula = (palabras[indice].charAt(0) === palabras[indice].charAt(0).toUpperCase()) ? true : false;
        const hayBle = palabras[indice].search("ble");


        console.log("#######");
        console.log("Palabra " + (parseInt(indice, 10) + 1) + ": " + palabras[indice]);
        console.log("Nº de caracteres: " + tamanyo);
        console.log("Deletreo: " + deletreo);

        if (esPar === true && esMayuscula === true) {
            console.log("La palabra es par y empieza por mayúscula");
        } else if (esPar === true && esMayuscula === false) {
            console.log("La palabra es par y no empieza por mayúscula");
        } else if (esPar === false && esMayuscula === true) {
            console.log("La palabra es impar y empieza por mayúscula");
        } else {
            console.log("La palabra es impar y no empieza por mayúscula");
        }

        if (hayBle !== -1) {
            console.log("La palabra sí contiene 'ble'");
        } else {
            console.log("La palabra no contiene 'ble'");
        }
    }
    console.log("#######");
}