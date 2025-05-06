const fs = require('fs');


// 1. Leer archivo como string
function leerArchivoComoString(ruta) {
    try {
        const contenido = fs.readFileSync(ruta, 'utf8');    
        console.log(`Contenido del archivo: ${contenido}`);
        return contenido;
        
    } catch (error) {
        console.error(`Error al leer el archivo: ${error.message}`);
        return null;
    }
}

// 2. Escribir texto en archivo
function escribirTextoEnArchivo(ruta, texto, flag) {
    const existe = fs.existsSync(ruta);
    if (!existe && !flag) {
        throw new Error("El archivo no existe");
    }
    fs.writeFileSync(ruta, texto, 'utf8');
}

// 3. Transformar string en array de números
function transformarStringEnArrayDeNumeros(texto, separador) {
    return texto
        .split(separador)
        .filter(num => /^\d+$/.test(num))
        .map(num => parseInt(num));
}

// 4. Transformar array de números a un solo string
function transformarArrayDeNumerosAUnSoloString(array, separador) {
    return array.join(separador);
}

// 5. Combinar dos arrays
function combinarDosArrays(array1, array2) {
    return [...new Set([...array1, ...array2])].sort((a, b) => a - b);
}

// 6. Combinar N arrays
function combinarNArrays(arrays) {
    return [...new Set(arrays.flat())].sort((a, b) => a - b);
}

module.exports = {
    leerArchivoComoString,
    escribirTextoEnArchivo,
    transformarStringEnArrayDeNumeros,
    transformarArrayDeNumerosAUnSoloString,
    combinarDosArrays,
    combinarNArrays
};
