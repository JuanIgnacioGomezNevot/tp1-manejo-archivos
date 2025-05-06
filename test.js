const fs = require('fs');
const assert = require('assert');
const funciones = require('./funciones.js'); 

// Importar las funciones aquí si están en otro archivo
const { leerArchivoComoString, escribirTextoEnArchivo, transformarStringEnArrayDeNumeros, transformarArrayDeNumerosAUnSoloString, combinarDosArrays, combinarNArrays } = require('./funciones.js');

// Prueba para transformarStringEnArrayDeNumeros
assert.deepStrictEqual(transformarStringEnArrayDeNumeros('123 | 456 | 789 | 1bc | 10', ' | '), [123, 456, 789, 10]);

// Prueba para transformarArrayDeNumerosAUnSoloString
assert.strictEqual(transformarArrayDeNumerosAUnSoloString([123, 456, 789, 10], ','), '123,456,789,10');

// Prueba para combinarDosArrays
assert.deepStrictEqual(combinarDosArrays([1, 5, 10], [2, 3, 8, 11]), [1, 2, 3, 5, 8, 10, 11]);

// Prueba para combinarNArrays
assert.deepStrictEqual(combinarNArrays([[1, 10], [2, 3, 15, 16], [4], [6, 7, 13]]), [1, 2, 3, 4, 6, 7, 10, 13, 15, 16]);


const rutaArchivo = 'archivo.txt'; 
assert.deepStrictEqual(escribirTextoEnArchivo(rutaArchivo, 'Este es un texto de prueba o Talvez no...', false), undefined);

assert.deepStrictEqual(escribirTextoEnArchivo(rutaArchivo, 'Espero que me estes leyendo 🙌 ', false), undefined);

leerArchivoComoString(rutaArchivo, "utf8");


console.log("Todas las pruebas pasaron exitosamente.");